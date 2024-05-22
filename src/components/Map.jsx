import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const position = [24.732536, 46.6771966];

function Map() {
  return (
    <MapContainer
      center={position}
    //   zoom={18}
    zoom={6}
      scrollWheelZoom={true}

      style={{ minHeight: "50vh", minWidth: "50vw" }}
    >
        <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position}>
        <Popup>
          إدارك
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
