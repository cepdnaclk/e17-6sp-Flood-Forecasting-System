import "./App.css";
import { Map } from "@esri/react-arcgis";

function App() {
  return (
    <div className="App">
      <Map
        mapProperties={{ basemap: "satellite" }}
        viewProperties={{
          center: [-122.4443, 47.2529],
          zoom: 6,
        }}
      />
    </div>
  );
}

export default App;
