'use client'

import { useEffect, useMemo, useState } from 'react'
import { MapPin, ArrowUpRight } from 'lucide-react'

type Position = [number, number]
type Ring = Position[]
type Geometry =
  | { type: 'Polygon'; coordinates: Ring[] }
  | { type: 'MultiPolygon'; coordinates: Ring[][] }

type Feature = {
  type: 'Feature'
  geometry: Geometry
}

type FeatureCollection = {
  type: 'FeatureCollection'
  features: Feature[]
}

const SABAH_GEOJSON =
  'https://raw.githubusercontent.com/atifmustaffa/malaysia-geojson/master/states/sabah.district.geojson'

const MAP_WIDTH = 620
const MAP_HEIGHT = 500
const MAP_PADDING = 24
const MAP_STROKE = '#3f5d63'
const MAP_STROKE_WIDTH = 2.4

function collectPositions(geojson: FeatureCollection) {
  return geojson.features.flatMap((feature) => {
    if (feature.geometry.type === 'Polygon') return feature.geometry.coordinates.flat()
    return feature.geometry.coordinates.flat(2)
  })
}

function project([longitude, latitude]: Position, bounds: { minX: number; maxX: number; minY: number; maxY: number }) {
  const x = MAP_PADDING + ((longitude - bounds.minX) / (bounds.maxX - bounds.minX)) * (MAP_WIDTH - MAP_PADDING * 2)
  const y = MAP_HEIGHT - MAP_PADDING - ((latitude - bounds.minY) / (bounds.maxY - bounds.minY)) * (MAP_HEIGHT - MAP_PADDING * 2)
  return `${x.toFixed(2)},${y.toFixed(2)}`
}

function MapShape({
  ring,
  bounds,
  index,
}: {
  ring: Ring
  bounds: { minX: number; maxX: number; minY: number; maxY: number }
  index: number
}) {
  return (
    <polygon
      key={index}
      points={ring.map((point) => project(point, bounds)).join(' ')}
      fill="#dff4f2"
      stroke={MAP_STROKE}
      strokeWidth={MAP_STROKE_WIDTH}
      strokeLinejoin="round"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
  )
}

export function Coverage() {
  const [geojson, setGeojson] = useState<FeatureCollection | null>(null)

  useEffect(() => {
    let active = true
    fetch(SABAH_GEOJSON)
      .then((response) => response.json())
      .then((data: FeatureCollection) => {
        if (active) setGeojson(data)
      })
      .catch(() => {
        if (active) setGeojson(null)
      })

    return () => {
      active = false
    }
  }, [])

  const bounds = useMemo(() => {
    if (!geojson) return null
    const positions = collectPositions(geojson)
    const xs = positions.map(([x]) => x)
    const ys = positions.map(([, y]) => y)
    return {
      minX: Math.min(...xs),
      maxX: Math.max(...xs),
      minY: Math.min(...ys),
      maxY: Math.max(...ys),
    }
  }, [geojson])

  return (
    <section id="coverage" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <MapPin className="size-3.5" /> Service Coverage
          </p>
          <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Serving Sabah today. Expanding across Malaysia tomorrow.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
            Our current service coverage is focused in Sabah, Malaysia. As TJ & SONS grows,
            additional service areas can be activated here without changing the experience.
          </p>

          <div className="mt-8 rounded-3xl border border-primary/10 bg-card p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Currently available
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-foreground">Sabah</h3>
                <p className="mt-1 text-sm text-muted-foreground">Malaysia</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                <span className="size-1.5 rounded-full bg-primary" /> Available
              </span>
            </div>
            <div className="mt-5 h-px bg-border" />
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">More locations</span>
              <span className="inline-flex items-center gap-1 font-medium text-foreground">
                Coming soon <ArrowUpRight className="size-4" />
              </span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-border/70 bg-[#eef7f5] p-5 shadow-sm sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,150,145,0.13),transparent_55%)]" />
          <div className="relative flex h-full min-h-[380px] items-center justify-center">
            {geojson && bounds ? (
              <svg
                viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
                className="max-h-[390px] w-full max-w-[620px] overflow-visible"
                role="img"
                aria-label="Map showing Sabah districts"
              >
                {geojson.features.flatMap((feature, featureIndex) => {
                  const rings =
                    feature.geometry.type === 'Polygon'
                      ? feature.geometry.coordinates
                      : feature.geometry.coordinates.flat()
                  return rings.map((ring, ringIndex) => (
                    <MapShape
                      key={`${featureIndex}-${ringIndex}`}
                      ring={ring}
                      bounds={bounds}
                      index={ringIndex}
                    />
                  ))
                })}
              </svg>
            ) : (
              <div className="h-[360px] w-full max-w-[620px] animate-pulse rounded-[40%] bg-primary/5" />
            )}

            <div className="absolute bottom-4 left-4 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="size-2.5 rounded-full bg-primary shadow-[0_0_0_5px_rgba(20,150,145,0.12)]" />
                Sabah
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">Current service area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
