<template>
    <h1 class="font-extrabold uppercase">Map</h1>
    <MapboxMap
        map-id="map"
        :options="mapOptions"
    >
         <MapboxSource
            source-id="texas-outline"
            :source="{
            type: 'geojson',
            data: '/tx.geojson'
            }"
        />

        <MapboxLayer
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
        <MapboxSource
        source-id="texas-places"
        :source="{
          type: 'geojson',
          data: places
        }"
      />
      <MapboxLayer :layer="placesLayer" />
      <MapboxLayer :layer="labelsLayer" />
    </MapboxMap>
</template>
<script setup>
const mapOptions = {
  style: 'mapbox://styles/typhainelegales/cmve0zzpa002n01s26bh96g3y',
  center: [-100, 31.9686] ,
  zoom: 5,
  minZoom:5,
  maxZoom:7
}

const places = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', properties: { name: 'Houston' }, geometry: { type: 'Point', coordinates: [-95.3698, 29.7604] } },
    { type: 'Feature', properties: { name: 'Austin' }, geometry: { type: 'Point', coordinates: [-97.7431, 30.2672] } },
    { type: 'Feature', properties: { name: 'Marfa' }, geometry: { type: 'Point', coordinates: [-104.0255, 30.3107] } },
    { type: 'Feature', properties: { name: 'Pecos' }, geometry: { type: 'Point', coordinates: [-103.4932, 31.4229] } },
    { type: 'Feature', properties: { name: 'Midland' }, geometry: { type: 'Point', coordinates: [-102.0779, 31.9973] } },
    { type: 'Feature', properties: { name: 'Odessa' }, geometry: { type: 'Point', coordinates: [-102.3676, 31.8457] } },
    { type: 'Feature', properties: { name: 'Corpus Christi' }, geometry: { type: 'Point', coordinates: [-97.3964, 27.8006] } },
    { type: 'Feature', properties: { name: 'Port Arthur' }, geometry: { type: 'Point', coordinates: [-93.9340, 29.8988] } },
    { type: 'Feature', properties: { name: 'Beaumont' }, geometry: { type: 'Point', coordinates: [-94.1266, 30.0802] } }
  ]
}
const placesLayer = {
  id: 'texas-city-points',
  type: 'circle',
  source: 'texas-places',
  paint: {
    'circle-radius': 3,
    'circle-color': '#ffffff',
    'circle-stroke-color': '#C084FC',
    'circle-stroke-width': 2
  }
}

const labelsLayer = {
  id: 'texas-city-labels',
  type: 'symbol',
  source: 'texas-places',
  layout: {
    'text-field': ['get', 'name'],
    'text-size': 12,
    'text-offset': [0, 1.3],
    'text-anchor': 'top'
  },
  paint: {
    'text-color': '#ffffff',
  }
}
</script>
<style >
.mapboxgl-default-map-size {
    left:0
}

.mapboxgl-ctrl-logo {
    display:none !important;
}
</style>