import React from 'react'
import { YMaps, Map,  Placemark, GeolocationControl, RouteButton, FullscreenControl } from "@pbe/react-yandex-maps";

const Maps = (latitude, longitude) => {
    const mapStyle = {
        position: "relative",
        left: 0,
        top: 0,
        width: "888px",
        height: "553px",
        overflow: "hidden",
      };
  return (
    <div>
        <YMaps
        enterprise
        query={{ apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b", lang: "EN" }}
      >
        <Map style={mapStyle} state={{ center: [latitude, longitude] || [41.310629, 69.278123], zoom: 12 }}>
          <Placemark geometry={[latitude, longitude] || [41.310629, 69.278123]} />
          <GeolocationControl options={{ float: "right" }} />
          <RouteButton options={{ float: "left" }} />
          <FullscreenControl />
        </Map>
      </YMaps>
    </div>
  )
}

export default Maps