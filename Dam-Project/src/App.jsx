import { useEffect, useState } from "react";
import "./App.css";
import DamCard from "./DamCard";

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