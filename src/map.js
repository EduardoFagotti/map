import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import geojsonData from "./geojson.json"; // Importe seu arquivo GeoJSON
import "leaflet/dist/leaflet.css"; // Importe o CSS do Leaflet

function Mapa() {
  return (
    <MapContainer
      center={[-19.9228747, -43.9432485]}
      zoom={100}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        data={geojsonData}
        style={(feature) => ({
          weight: 1,
        })}
      />
    </MapContainer>
  );
}

export default Mapa;
