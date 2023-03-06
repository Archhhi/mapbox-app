import React, { useEffect, useRef, useState } from 'react'
import { Map } from 'mapbox-gl'
import { initMap } from '../../../utils/initMap'
import { generateNewMarker } from '../../../utils/generateNewMarker'
import { FeaturesType, FeatureTypes, GeometryTypes } from '../types'

type GeoType = {
  features: FeaturesType[]
}

export const useMap = (
  container: React.RefObject<HTMLDivElement>,
  isToggleMarker: boolean,
  isVisible: boolean,
  setIsToggleMarker: (active: boolean) => void
) => {
  const mapInitRef = useRef<Map | null>(null)
  const [geo, setGeo] = useState<GeoType>({
    features: [
      {
        type: FeatureTypes.FEATURE,
        geometry: {
          coordinates: [-87.637596, 41.940403],
          type: GeometryTypes.POINT
        }
      }
    ]
  })

  useEffect(() => {
    if (container.current) {
      mapInitRef.current = initMap(container.current, [-87.699329, 41.860092])
    }
  }, [])

  useEffect(() => {
    const isVisibleMarkers = isVisible

    geo.features.forEach(
      (feature) =>
        isVisibleMarkers &&
        generateNewMarker({ map: mapInitRef.current!, feature })
    )
  }, [isVisible, geo])

  useEffect(() => {
    let isGenerateActive = isToggleMarker

    mapInitRef.current &&
      mapInitRef.current.on('click', ({ lngLat }) => {
        isGenerateActive &&
          setGeo({
            ...geo,
            features: [
              ...geo.features,
              {
                type: FeatureTypes.FEATURE,
                geometry: {
                  coordinates: [lngLat.lng, lngLat.lat],
                  type: GeometryTypes.POINT
                }
              }
            ]
          })
        isGenerateActive = false
        setIsToggleMarker(false)
      })

    return () => {
      mapInitRef.current?.off('click', generateNewMarker)
    }
  }, [isToggleMarker])
}
