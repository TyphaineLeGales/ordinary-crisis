export default function useMap() {
  const map = useMapboxRef('map')

  const aspectRatio = ref(0)
  const coordInternet = ref([45.64, -4.67])
  // responsive params for map
  const { $viewport } = useNuxtApp()
  const isLessThanLg = computed(() => $viewport.isLessThan('lg'))
  const zoomBounds = computed(() => [3.7, 9.5])
  const maxBounds = computed(() => {
    return isLessThanLg.value ? [[-6, 40], [40, 53]] : [[-14.419226312663085, 41.06750769389413], [20.206710312662523, 52.309176622736345]]
  })
  const showZoomControls = computed(() => isLessThanLg.value ? false : true)


  const resetView = () => {
    if (!map.value) return
    map.value.setZoom(isLessThanLg.value ? 3 : 3.7)
    map.value.flyTo({ center: [2.893742, 46.982778] })
  }

  const onMapZoom = (coordinates: string) => {
    const targetCoord = coordinates.split(',').map(c => Number(c)).reverse()
    setTimeout(() => map.value?.flyTo({
      center: [targetCoord[0], targetCoord[1]],
      zoom: 9, // max zoom
      essential: true,
    }), 1000)
  }

  const setCursor = (value: string) => {
    if (!map.value) return
    map.value.getCanvas().style.cursor = value
  }

  return {
    aspectRatio,
    coordInternet,
    zoomBounds,
    maxBounds,
    map,
    showZoomControls,
    onMapZoom,
    resetView,
    setCursor,

  }
}
