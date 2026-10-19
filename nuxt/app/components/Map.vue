<template>
    <ClientOnly>

      <div class="map-wrapper">
          <MglMap
            :map-style="bgMapStyle"
            :center="mapOptions.center"
            :zoom="mapOptions.zoom"
            :min-zoom="mapOptions.minZoom"
            :max-zoom="mapOptions.maxZoom"
            :max-bounds="mapOptions.maxBounds"
          >
            <MglGeoJsonSource
              source-id="texas-outline"
              :data="texasGeoJsonUrl"
            />
        
            <MglFillLayer
              :layer="{
                id: 'texas-fill',
                type: 'fill',
                source: 'texas-outline',
                paint: {
                  'fill-color': '#C084FC',
                  'fill-opacity': 0.2
                }
              }"
            />
            <MglGeoJsonSource
              source-id="texas-places"
              :data="places"
            />
        
            <MglCircleLayer :layer="placesLayer" />
            <MglSymbolLayer :layer="labelsLayer" />
          </MglMap>
        </div>
    </ClientOnly>
</template>

<script setup>
import useMap from '~/composable/useMap'

const texasGeoJsonUrl = '/tx.geojson'

const mapOptions = {
  center: [-100, 31.9686],
  zoom: 5,
  minZoom: 5,
  maxZoom: 7,
  maxBounds: [
    [-107, 25],
    [-93, 37.5]
  ]
}

const { places, placesLayer, labelsLayer } = useMap()
</script>

<style>
.map-wrapper {
  width: 100%;
  height: 650px;
}
</style>