import { Map } from 'mapbox-gl'
import { configMapbox } from '../components/Map/config'

export const initMap = (
  container: HTMLDivElement,
  coords: [number, number]
) => {
  return new Map({
    container,
    style: 'mapbox://styles/mapbox/dark-v10',
    pitchWithRotate: false,
    center: coords,
    zoom: 10,
    accessToken: configMapbox.mapboxAccessToken,
    doubleClickZoom: false
  })
}
