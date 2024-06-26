'use client'
import Map, { FullscreenControl, NavigationControl } from 'react-map-gl';
import MarkerComponent from '@/app/_component/MarkerComponent'

import 'mapbox-gl/dist/mapbox-gl.css';
import AlgoliaSearch from './_component/AlgoliaSearch';
export default function MapComponent() {
  return (
    <div className='w-screen h-screen relative'>
      <div className='absolute z-10 top-6 left-4 w-1/2 max-md:w-full'>
        <AlgoliaSearch />
      </div>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_mapboxAccessToken}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 4
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/standard"
        optimizeForTerrain
      >
        <MarkerComponent />
        <NavigationControl position='bottom-right' showCompass={false} />
        <FullscreenControl />
      </Map>
    </div>
  )
}