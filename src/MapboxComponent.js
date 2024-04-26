import React, { useEffect, useState, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import './App.css'
import { environment } from './EnvDev'

mapboxgl.accessToken = environment.mapbox.accessToken

const MapboxComponent = () => {
  const mapContainerRef = useRef(null)
  const map = useRef(null)

  const [lng] = useState(-7.63302)
  const [lat] = useState(33.587241)
  const [zoom] = useState(17)

  // Initialize map when component mounts
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/standard',
      center: [lng, lat],
      zoom: zoom
    })

    // Add our navigation control (the +/- zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

    // Map onload event
    map.current.on('load', () => {
      // Nifty code to force map to fit inside container when it loads
      map.current.resize()
    })

    // Clean up on unmount
    return () => map.current.remove()
  }, [lat, lng, zoom])

  return <div className="map-container" ref={mapContainerRef} />
}

export default MapboxComponent
