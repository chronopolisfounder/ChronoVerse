import React, { useEffect, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import AICompanion from './AICompanion'

export default function MapPage() {
  const [position, setPosition] = useState(null)

  useEffect(() => {
    const map = L.map('map').setView([0, 0], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map)

    const locate = () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords
          setPosition([latitude, longitude])
          map.setView([latitude, longitude], 15)
          L.marker([latitude, longitude]).addTo(map)
        },
        (err) => console.error(err),
        { enableHighAccuracy: true }
      )
    }

    locate()
    const interval = setInterval(locate, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full">
      <div id="map" className="w-full h-full z-0"></div>
      <div className="absolute bottom-0 w-full z-10">
        <AICompanion position={position} />
      </div>
    </div>
  )
}
