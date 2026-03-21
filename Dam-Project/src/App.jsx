import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [dams, setDams] = useState([]);
  const [selectedDam, setSelectedDam] = useState("");
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await axios.get(
      "https://api.data.gov.in/resource/7b3ed3e9-841f-4444-ab3c-e760a08b53b3?api-key=579b464db66ec23bdd000001b523511d5b4a40d94ced32044427f5ff&format=json"
    );

    let records = res.data.records;
    setData(records);

    let uniqueDistricts = [
      ...new Set(records.map((item) => item.district)),
    ];
    setDistricts(uniqueDistricts);
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);

    let filtered = data.filter(
      (item) => item.district === value
    );

    setDams(filtered);
    setSelectedDam("");
    setDetails(null);
  };

  const handleDamChange = (value) => {
    setSelectedDam(value);
  };

  const showDetails = () => {
    let dam = dams.find(
      (item) => item.name_of_dam === selectedDam
    );

    setDetails(dam);
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>Tamil Nadu Dams</h2>

      {/* District */}
      <select onChange={(e) => handleDistrictChange(e.target.value)}>
        <option>Select District</option>
        {districts.map((d, i) => (
          <option key={i}>{d}</option>
        ))}
      </select>

      <br /><br />

      {/* Dam */}
      {dams.length > 0 && (
        <select onChange={(e) => handleDamChange(e.target.value)}>
          <option>Select Dam</option>
          {dams.map((d, i) => (
            <option key={i}>{d.name_of_dam}</option>
          ))}
        </select>
      )}

      <br /><br />

      <button onClick={showDetails}>Show Details</button>

      <br /><br />

      {details && (
        <div>
          <h3>{details.name_of_dam}</h3>

          <p><b>District:</b> {details.district}</p>

          <p>
            <b>Height:</b> {details.height_above_lowest_foundation_m_} m
          </p>

          <p>
            <b>Capacity:</b> {details.gross_storage_capacity_10_3m3_}
          </p>

          <p>
            <b>Year of Completion:</b> {details.year_of_completion}
          </p>

          <p>
            <b>River:</b> {details.river}
          </p>

          <p>
            <b>Hydro Power:</b>{" "}
            {details.hydro_electric_power_mw_ || "Not Available"}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;