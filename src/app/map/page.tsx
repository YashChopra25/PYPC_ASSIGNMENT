'use client'
import Map, { FullscreenControl, NavigationControl } from 'react-map-gl';
import MarkerComponent from '@/app/component/MarkerComponent'

import 'mapbox-gl/dist/mapbox-gl.css';
import AlgoliaSearch from '../component/AlgoliaSearch';

export default function MapComponent() {
    return (
        <div className='w-screen h-screen relative'>
            <div className='absolute z-10 top-6 left-4 w-1/2 max-md:w-full'>
                <AlgoliaSearch />
            </div>
            <Map
                mapboxAccessToken='pk.eyJ1IjoieWFzaGNob3ByYTI1MTEiLCJhIjoiY2x3b3llNHpzMjc3MjJrbW14ZGF1d3U5aSJ9.mMr3qRf0yFx1X4oGInI1Pg'
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 3
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/standard"
            >
                <MarkerComponent />
                <NavigationControl position='bottom-right' showCompass={false} />
                <FullscreenControl />
            </Map>
        </div>
    )
}