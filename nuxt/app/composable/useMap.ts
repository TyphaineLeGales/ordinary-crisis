export default function useMap() {


  const aspectRatio = ref(0)

//   const mapOptions = {
//   style: 'mapbox://styles/typhainelegales/cmve0zzpa002n01s26bh96g3y',
//   center: [-100, 31.9686] ,
//   zoom: 5,
//   minZoom:5,
//   maxZoom:7
// }

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


const bgMapStyle = {
  version: 8 as const,

  sources: {
    satellite: {
      type: 'raster' as const,
      tiles: [
        'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg'
      ],
      tileSize: 256,
      attribution:
        'Sentinel-2 cloudless imagery © EOX IT Services GmbH'
    }
  },

  layers: [
    {
      id: 'satellite',
      type: 'raster' as const,
      source: 'satellite',
      paint: {
        'raster-saturation': -1,
        'raster-contrast': 0.1
      }
    }
  ]
}


  const resetView = () => {
    // if (!map.value) return
    // map.value.setZoom(isLessThanLg.value ? 3 : 3.7)
    // map.value.flyTo({ center: [2.893742, 46.982778] })
  }

  const onMapZoom = (coordinates: string) => {
    // const targetCoord = coordinates.split(',').map(c => Number(c)).reverse()
    // setTimeout(() => map.value?.flyTo({
    //   center: [targetCoord[0], targetCoord[1]],
    //   zoom: 9, // max zoom
    //   essential: true,
    // }), 1000)
  }

  const setCursor = (value: string) => {
    // if (!map.value) return
    // map.value.getCanvas().style.cursor = value
  }

  return {
    aspectRatio,
    places,
    labelsLayer,
    placesLayer,
    onMapZoom,
    resetView,
    setCursor,
    bgMapStyle

  }
}
