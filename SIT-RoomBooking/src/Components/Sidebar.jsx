import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>LX Building</h2>
      <div className="selectors">
        <select>
          <option>Floor</option>
        </select>
        <select>
          <option>Room</option>
        </select>
      </div>
      <div className="calendar">
        <h3>February 2025</h3>
        <div className="days">
          {[...Array(28)].map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
