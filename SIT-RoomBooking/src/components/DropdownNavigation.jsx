import React from 'react'

import { useNavigate } from "react-router-dom";

const DropdownNavigation = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);
    }
  };

  return (
    <select className='bg-fuchsia-900 rounded-xl px-3 font-bold' onChange={handleChange} defaultValue="">
      <option value="" disabled>Picking Rome</option>
      <option value="/home">CB2</option>
      <option value="/history">LX Building</option>
      <option value="/picking">SIT Building</option>
    </select>
  );
};

export default DropdownNavigation;

