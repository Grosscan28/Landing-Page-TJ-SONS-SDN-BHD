'use client'

import { useEffect, useMemo, useState } from 'react'
import { Check, MapPin } from 'lucide-react'

type Position = [number, number]
type Geometry = { type: 'Polygon'; coordinates: Position[][] } | { type: 'MultiPolygon'; coordinates: Position[][][] }
type MalaysiaFeature = { type: 'Feature'; id?: string; properties: { name?: string; state_name?: string; state_code?: string }; geometry: Geometry }
type MalaysiaGeoJSON = { type: 'FeatureCollection'; features: MalaysiaFeature[] }

const GEOJSON_URL = 'https://raw.githubusercontent.com/atifmustaffa/malaysia-geojson/master/malaysia.state.min.geojson'
const availableStates = new Set(['Sabah'])

function project([lon, lat]: Position, bounds: { minLon: number; maxLon: number; minLat: number; maxLat: number }) {
  const x = 28 + ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * 944
  const y = 26 + ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * 468
  return `${x.toFixed(2)},${y.toFixed(2)}`
}
function ringPath(ring: Position[], bounds: { minLon: number; maxLon: number; minLat: number; maxLat: number }) { return ring.map((point, i) => `${i === 0 ? 'M' : 'L'} ${project(point, bounds)}`).join(' ') + ' Z' }
function geometryPath(geometry: Geometry, bounds: { minLon: number; maxLon: number; minLat: number; maxLat: number }) {
  if (geometry.type === 'Polygon') return geometry.coordinates.map((ring) => ringPath(ring, bounds)).join(' ')
  return geometry.coordinates.map((polygon) => polygon.map((ring) => ringPath(ring, bounds)).join(' ')).join(' ')
}
function featureCenter(feature: MalaysiaFeature) {
  const points: Position[] = []
  const polygons = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates
  polygons.forEach((polygon) => polygon.forEach((ring) => ring.forEach((point) => points.push(point))))
  return [points.reduce((sum, p) => sum + p[0], 0) / points.length, points.reduce((sum, p) => sum + p[1], 0) / points.length] as Position
}

export function CoverageMap() {
  const [data, setData] = useState<MalaysiaGeoJSON | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => { fetch(GEOJSON_URL).then((r) => r.json()).then((json: MalaysiaGeoJSON) => setData(json)).catch(() => setData(null)) }, [])

  const bounds = useMemo(() => {
    if (!data?.features.length) return { minLon: 99.64, maxLon: 119.27, minLat: 0.85, maxLat: 7.36 }
    const points: Position[] = []
    data.features.forEach((f) => {
      const polygons = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates
      polygons.forEach((p) => p.forEach((r) => r.forEach((point) => points.push(point))))
    })
    return { minLon: Math.min(...points.map((p) => p[0])), maxLon: Math.max(...points.map((p) => p[0])), minLat: Math.min(...points.map((p) => p[1])), maxLat: Math.max(...points.map((p) => p[1])) }
  }, [data])

  const hoveredFeature = data?.features.find((feature) => (feature.properties.state_name ?? feature.properties.name ?? feature.id) === hovered)
  const hoveredInfo = hoveredFeature ? (() => {
    const name = hoveredFeature.properties.state_name ?? hoveredFeature.properties.name ?? hoveredFeature.id ?? 'Unknown state'
    const [cx, cy] = project(featureCenter(hoveredFeature), bounds).split(',').map(Number)
    return { name, available: availableStates.has(name), cx, cy }
  })() : null

  return (
    <section id="coverage" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary"><MapPin className="size-3.5" /> Service Coverage</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Coverage across Malaysia, state by state.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Sabah is currently available for service. Hover over any state to see its current availability status as TJ & SONS expands its network.</p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white/80 p-4 shadow-[0_24px_80px_rgba(10,65,130,0.10)] backdrop-blur-xl sm:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(35,112,255,0.10),transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-white/85 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-5 text-xs font-medium text-muted-foreground"><span className="inline-flex items-center gap-2"><span className="size-3 rounded-full bg-[#27c878]" /> Available</span><span className="inline-flex items-center gap-2"><span className="size-3 rounded-full bg-slate-200" /> Coming soon</span></div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Malaysia · 13 states + 3 federal territories</span>
            </div>

            {/* The SVG is ONLY the map interaction layer. The tooltip is a separate HTML layer above it. */}
            <div className="relative aspect-[1.95/1] min-h-[300px] w-full">
              {data ? <>
                <svg viewBox="0 0 1000 520" className="relative z-10 h-full w-full overflow-visible" role="img" aria-label="Interactive Malaysia service coverage map">
                  <g>
                    {data.features.map((feature) => {
                      const name = feature.properties.state_name ?? feature.properties.name ?? feature.id ?? 'Unknown state'
                      const available = availableStates.has(name)
                      const active = hovered === name
                      return <g key={name} tabIndex={0} role="button" aria-label={`${name}: ${available ? 'Available' : 'Coming soon'}`} onMouseEnter={() => setHovered(name)} onMouseLeave={() => setHovered(null)} onFocus={() => setHovered(name)} onBlur={() => setHovered(null)}>
                        <path d={geometryPath(feature.geometry, bounds)} fill={available ? '#b9f2d4' : active ? '#dcecff' : '#edf2f7'} stroke={active ? '#1683ee' : '#ffffff'} strokeWidth={active ? 3 : 1.8} vectorEffect="non-scaling-stroke" className="cursor-pointer transition-all duration-200" />
                      </g>
                    })}
                  </g>
                </svg>

                {hoveredInfo && <div
                  className="pointer-events-none absolute z-[100] w-[164px] -translate-x-1/2 -translate-y-[calc(100%+14px)] rounded-2xl bg-[#071b34] px-4 py-3 text-white shadow-[0_14px_35px_rgba(7,27,52,0.30)] ring-1 ring-white/10"
                  style={{ left: `${hoveredInfo.cx / 10}%`, top: `${hoveredInfo.cy / 5.2}%` }}
                >
                  <div className="flex items-center gap-2"><span className={`size-2.5 shrink-0 rounded-full ${hoveredInfo.available ? 'bg-[#27c878]' : 'bg-slate-400'}`} /><span className="truncate text-sm font-bold">{hoveredInfo.name}</span></div>
                  <p className={`mt-1 pl-[18px] text-[11px] font-semibold ${hoveredInfo.available ? 'text-[#72e4aa]' : 'text-slate-300'}`}>{hoveredInfo.available ? 'Available' : 'Coming soon'}</p>
                </div>}
              </> : <div className="grid h-full place-items-center text-sm text-muted-foreground">Loading Malaysia coverage map…</div>}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-slate-50/80 px-4 py-3 text-sm"><div className="flex items-center gap-2 font-medium text-foreground"><span className="grid size-7 place-items-center rounded-full bg-[#27c878]/15 text-[#14985b]"><Check className="size-4" /></span> Sabah is currently active</div><span className="hidden text-xs text-muted-foreground sm:block">Hover any state for availability</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
