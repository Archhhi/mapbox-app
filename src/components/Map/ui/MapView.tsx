import React, { useRef, useState } from 'react'
import { useMap } from '../hooks/useMap'
import styles from './styles.module.css'
import Button from '../../Button'

export const MapView = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isToggleMarker, setIsToggleMarker] = useState(false)
  // const [isToggleLine, setIsToggleLine] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  useMap(mapRef, isToggleMarker, isVisible, setIsToggleMarker)

  const onAddMarker = () => {
    setIsToggleMarker(true)
  }

  const onAddLine = () => {
    // setIsToggleLine(true)
  }

  return (
    <div ref={mapRef} className={styles.mapContainer}>
      <div className={styles.buttonsWrapper}>
        <div className={styles.buttonOptionsWrapper}>
          <Button
            disabled={isToggleMarker}
            onClick={onAddMarker}
            text={'Добавить маркер'}
          />
          <div className={styles.buttonOptions}>
            <span onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? 'Скрыть' : 'Показать'}
            </span>
            <span>Удалить</span>
          </div>
        </div>
        <div className={styles.buttonOptionsWrapper}>
          <Button
            disabled={false}
            onClick={onAddLine}
            text={'Добавить линию'}
          />
          <div className={styles.buttonOptions}>
            <span>Скрыть</span>
            <span>Удалить</span>
          </div>
        </div>
      </div>
    </div>
  )
}
