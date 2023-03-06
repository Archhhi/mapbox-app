type ConfigMapbox = {
  mapboxAccessToken: string
}

export const configMapbox: ConfigMapbox = {
  mapboxAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN as string
  // mapStyles: {
  //   mapboxLight: 'mapbox://styles/mapbox/light-v9',
  //   mapboxDark: 'mapbox://styles/mapbox/dark-v9'
  // }
}
