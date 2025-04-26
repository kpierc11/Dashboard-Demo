import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '600px'
  };
  
  const center = {
    lat: 36.4254,
    lng: -82.3061
  };
  
 export default function StationMap() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyCEygbGqSKSp-34jMva5e2vuSDX5jc3gGM"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker position={center}/>
        </GoogleMap>
      </LoadScript>
    )
  }
  
