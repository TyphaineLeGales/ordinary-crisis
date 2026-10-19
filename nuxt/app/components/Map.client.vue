<template>
  <div
    ref="mapContainer"
    class="absolute inset-0 w-full h-full"
  />
</template>
<script setup lang="ts">
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import useMap from '~/composable/useMap'

const mapContainer = ref<HTMLElement | null>(null)
const { places, placesLayer, labelsLayer } = useMap()

let map: maplibregl.Map | undefined
const isMobile = window.matchMedia('(max-width: 767px)').matches
const route = useRoute()
const layerIds = [
  'texas-fill',
  'texas-outline-border',
  'texas-city-points',
  'texas-city-labels'
]

function updateMapInfoVisibility() {
  if (!map) return

  const visible = route.path === '/map'

  for (const layerId of layerIds) {
    if (map.getLayer(layerId)) {
      map.setLayoutProperty(
        layerId,
        'visibility',
        visible ? 'visible' : 'none'
      )
    }
  }
}

watch(
  () => route.path,
  updateMapInfoVisibility,
  { immediate: true }
)


onMounted(async () => {
    await nextTick()
    if (!mapContainer.value) {
        console.error('Texas map container was not found.')
        return
    }

    map = new maplibregl.Map({
        container: mapContainer.value,
        style: {
        version: 8,
        sources: {
            satellite: {
            type: 'raster',
            tiles: [
                'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg',
            ],
            tileSize: 256,
            attribution:
                'Satellite imagery © EOX IT Services GmbH',
            },
        },

        layers: [
            {
            id: 'satellite',
            type: 'raster',
            source: 'satellite',
            paint: {
                'raster-saturation': -1,
                'raster-contrast': 0.1,
            },
            },
        ],
        },

        center: isMobile ? [-99.5, 29.5] : [-99.5, 32.5],
        zoom: isMobile ? 3.5 : 4.6,
        minZoom: 2.5,
        maxZoom: 9,

       maxBounds: isMobile
        ? [[-115, 20],[-80, 43],]
        : [[-132, 22],[-45, 52],],
    })

    map.addControl(
        new maplibregl.NavigationControl(),
        'top-right',
    )

    map.on('load', () => {
        if (!map) return

        map.addSource('texas-outline', {
        type: 'geojson',
        data: '/tx.geojson',
        })

        map.addLayer({
        id: 'texas-outline-border',
        type: 'line',
        source: 'texas-outline',
        paint: {
            'line-color': '#C085FC',
            'line-width': 2,
        },
        })
        map.addLayer({
        id: 'texas-fill',
        type: 'fill',
        source: 'texas-outline',
        paint: {
            'fill-color': '#C085FC',
            'fill-opacity': 0.3,
        },
        })

        map.addSource('texas-places', {
        type: 'geojson',
        data: places as GeoJSON.FeatureCollection,
        })

        map.addLayer({
        ...placesLayer,
        source: 'texas-places',
        } as maplibregl.CircleLayerSpecification)

        map.addLayer({
        ...labelsLayer,
        source: 'texas-places',
        } as maplibregl.SymbolLayerSpecification)

        updateMapInfoVisibility()

        map.on('click', 'texas-city-points', (event) => {
            const feature = event.features?.[0]
            if (!feature || feature.geometry.type !== 'Point') {
                return
            }
            // TODO - pick up ID or use feature.properties?.name to fetch data from backend
        })

        map.on('mouseenter', 'texas-city-points', () => {
        if (map) {
            map.getCanvas().style.cursor = 'pointer'
        }
        })

        map.on('mouseleave', 'texas-city-points', () => {
        if (map) {
            map.getCanvas().style.cursor = ''
        }
        })
    })

    map.on('error', (event) => {
        console.error('MapLibre error:', event.error)
    })

})

onBeforeUnmount(() => {
  map?.remove()
  map = undefined
})
</script>
