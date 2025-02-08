import React from 'react'

import { useNavigate } from "react-router-dom";

const Dropfloor = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);
    }
  };

  return (
    <select className='bg-fuchsia-900 rounded-xl px-3 font-bold' onChange={handleChange} defaultValue="">
      <option value="" disabled>Floor</option>
      <option value="/home">10</option>
      <option value="/history">11</option>
      <option value="/picking">12</option>
    </select>
  );
};

export default Dropfloor;

