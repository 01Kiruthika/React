import { useEffect, useState } from "react";
import "./App.css";
import DamCard from "./DamCard";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


// Fix default marker icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function App() {
  const [dams, setDams] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("All");
  const [selectedDam, setSelectedDam] = useState("All");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://api.data.gov.in/resource/7b3ed3e9-841f-4444-ab3c-e760a08b53b3?api-key=579b464db66ec23bdd000001b523511d5b4a40d94ced32044427f5ff&format=json"
      );

      let data = await response.json();
      let records = data.records;

      setDams(records);

      let uniqueDistricts = ["All", ...new Set(records.map((d) => d.district))];
      setDistricts(uniqueDistricts);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  let damsInDistrict =
    selectedDistrict === "All"
      ? dams
      : dams.filter((d) => d.district === selectedDistrict);

  let damNames = [
    "All",
    ...new Set(damsInDistrict.map((d) => d.name_of_dam)),
  ];

  let filteredDams =
    selectedDam === "All"
      ? dams
      : dams.filter(
        (dam) =>
          dam.district === selectedDistrict &&
          dam.name_of_dam === selectedDam
      );

  return (
    <div className="app">
      <h2 className="title">Tamil Nadu Dams Details</h2>

      <div className="filterdata">
        <h4>District</h4>
        <select
          value={selectedDistrict}
          onChange={(e) => {
            setSelectedDistrict(e.target.value);
            setSelectedDam("All");
          }}
        >
          {districts.map((dist) => (
            <option key={dist} value={dist}>
              {dist}
            </option>
          ))}
        </select>

        <h5>Dam</h5>
        <select
          value={selectedDam}
          disabled={selectedDistrict === "All"}
          onChange={(e) => setSelectedDam(e.target.value)}
        >
          {damNames.map((dam) => (
            <option key={dam} value={dam}>
              {dam}
            </option>
          ))}
        </select>
      </div>

      {/* Map */}
      <MapContainer
        center={[11.1271, 78.6569]} // Tamil Nadu center coordinates
        zoom={7}
        className="leaflet-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {filteredDams.map((dam) => {
          const lat = parseFloat(dam.latitude);
          const lon = parseFloat(dam.longitude);
          if (!lat || !lon) return null; // skip invalid coordinates

          return (
            <Marker key={dam.name_of_dam} position={[lat, lon]}>
              <Popup>
                <strong>{dam.name_of_dam}</strong>
                <br />
                District: {dam.district}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <div className="container">
        {filteredDams.length === 0 ? (
          <p>No dams found</p>
        ) : (
          filteredDams.map((dam) => (
            <DamCard key={dam.name_of_dam} dam={dam} />
          ))
        )}
      </div>
    </div>
  );
}

export default App; 