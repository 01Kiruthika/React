import React from "react";
import "./App.css"; 

const DamCard = ({ dam }) => {
  return (
    <div className="card">
      <div className="inner-card">
        <h3>{dam.name_of_dam}</h3>
        <p>{dam.district}</p>
      </div>

      <div className="row">
        <div className="mini-card">
          <p>Taluk</p>
          <h4>{dam.taluk}</h4>
        </div>

        <div className="mini-card">
          <p>Length</p>
          <h4>{dam.length_of_dam_m_}</h4>
        </div>

        <div className="mini-card">
          <p>Height</p>
          <h4>{dam.height_above_lowest_foundation_m_} m</h4>
        </div>
      </div>

      <div className="single-card">
        <p>Year of Completion</p>
        <h4>{dam.year_of_completion}</h4>
      </div>

      <div className="row">
        <div className="mini-card">
          <p>Capacity</p>
          <h4>{dam.gross_storage_capacity_10_3m3_}</h4>
        </div>

        <div className="mini-card">
          <p>River</p>
          <h4>{dam.river}</h4>
        </div>
      </div>

      <div className="row">
        <div className="mini-card">
          <p>Nearest City</p>
          <h4>{dam.nearest_city_town}</h4>
        </div>

        <div className="mini-card">
          <p>Hydro Power</p>
          <h4>{dam.hydro_electric_power_mw_ || "N/A"}</h4>
        </div>
      </div>
    </div>
  );
};

export default DamCard;