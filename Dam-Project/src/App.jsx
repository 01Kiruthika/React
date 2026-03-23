import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [dams, setDams] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("All");

  useEffect(() => {
    debugger;
    fetchData();
  }, []);

  let fetchData = async () => {
    debugger;
    try {
      let res = await axios.get(
        "https://api.data.gov.in/resource/7b3ed3e9-841f-4444-ab3c-e760a08b53b3?api-key=579b464db66ec23bdd000001b523511d5b4a40d94ced32044427f5ff&format=json"
      );

      let records = res.data.records;

      setDams(records);
      
      console.log(records);
      
      let newarr = new Set(records.map((item) => item.district))
      console.log(newarr);
      
      let uniqueDistricts = ["All",...newarr];

      setDistricts(uniqueDistricts);

    } catch (error) {
      console.log(error);
    }
  };

  let newdams = dams.filter((dam) => dam.district === selectedDistrict)
  console.log(newdams);
  
  let filteredDams = selectedDistrict === "All" ? dams : newdams;

  return (
    <div className="app">
      <h2 className="title">Tamil Nadu Dams Details</h2>

      <select
        value={selectedDistrict}
        onChange={(e) => setSelectedDistrict(e.target.value)}
      >
        {districts.map((dist, index) => (
          <option key={index} value={dist}>
            {dist}
          </option>
        ))}
      </select>

      <div className="container">
        {filteredDams.map((dam) => (
          <div key={dam.name_of_dam} className="card">

            <div className="inner-card">
              <h3>{dam.name_of_dam}</h3>
              <p>{dam.district}</p>
            </div>

            <div className="row">
              <div className="mini-card">
                <p>Taluk</p>
                <h4>{dam.taluk || "N/A"}</h4>
              </div>

              <div className="mini-card">
                <p>Length</p>
                <h4>{dam.length_of_dam_m_ || "N/A"}</h4>
              </div>

              <div className="mini-card">
                <p>Height</p>
                <h4>{dam.height_above_lowest_foundation_m_ || "N/A"} m</h4>
              </div>
            </div>

            <div className="single-card">
              <p>Year of Completion</p>
              <h4>{dam.year_of_completion || "N/A"}</h4>
            </div>

            <div className="row">
              <div className="mini-card">
                <p>Capacity</p>
                <h4>{dam.gross_storage_capacity_10_3m3_ || "N/A"}</h4>
              </div>

              <div className="mini-card">
                <p>River</p>
                <h4>{dam.river || "N/A"}</h4>
              </div>
            </div>

            <div className="row">
              <div className="mini-card">
                <p>Nearest City</p>
                <h4>{dam.nearest_city_town || "N/A"}</h4>
              </div>

              <div className="mini-card">
                <p>Hydro Power</p>
                <h4>{dam.hydro_electric_power_mw_ || "N/A"}</h4>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;