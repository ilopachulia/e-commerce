import { GoogleMap, Marker } from "@react-google-maps/api";
import classes from "./Map.module.css";

const center = { lat: 44, lng: -80 };

function Map() {
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName={classes.map}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
