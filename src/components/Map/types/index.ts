import { LngLat, LngLatLike } from 'mapbox-gl'

export enum FeatureTypes {
  FEATURE = 'FEATURE'
}

export enum GeometryTypes {
  POINT = 'Point'
}

export type Geometry = {
  coordinates: LngLatLike
  type: GeometryTypes
}

export type FeaturesType = {
  type: FeatureTypes
  geometry: Geometry
}
