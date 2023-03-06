import { Popup, Marker, Map } from 'mapbox-gl'
import { FeaturesType } from '../components/Map/types'

export const generateNewMarker = ({
  map,
  feature
}: {
  map: Map
  feature: FeaturesType
}) => {
  console.log(feature.geometry.coordinates)
  const popUp = new Popup({ closeButton: false, anchor: 'left' }).setHTML(
    `<div class="popup">${new Date().toLocaleDateString()}</div>`
  )

  new Marker({ color: '#63df29', scale: 1.5 })
    .setLngLat(feature.geometry.coordinates)
    .setPopup(popUp)
    .addTo(map)
}
