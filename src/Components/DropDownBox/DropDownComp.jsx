import React, { useState } from 'react';
import './DropDown.css'

function Dropdown() {
  const [select, setSelect] = useState();

  return (
    <div className='drop-down-box'>
      <select value = {select} onChange={e => setSelect(e.target.value)}>
        <option>Breakfast</option>
        <option>Dinner</option>
        <option>Lunch</option>
        <option>Salad</option>
        <option>Soup</option>
      </select>
    </div>
  );
}

export default Dropdown;