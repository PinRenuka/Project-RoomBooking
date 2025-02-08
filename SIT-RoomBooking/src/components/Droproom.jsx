import React from 'react'

import { useNavigate } from "react-router-dom";

const Droproom = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);
    }
  };

  return (
    <select className='bg-fuchsia-900 rounded-xl px-3 font-bold' onChange={handleChange} defaultValue="">
      <option value="" disabled>Room</option>
      <option value="/home">TR 10/1</option>
      <option value="/history">TR 10/2</option>
      <option value="/picking">TR 10/3</option>
      <option value="/picking">TR 10/5</option>
    </select>
  );
};

export default Droproom;

