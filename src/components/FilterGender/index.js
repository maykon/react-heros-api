import React, { useState, useEffect } from 'react';

import './styles.css';

export default function FilterGender({ gender, onChange }) {
  const [filterGender, setFilterGender] = useState("");

  useEffect(() => {
    setFilterGender(gender);
  }, [gender]);

  const dispatchFilter = filtered => {
    setFilterGender(filtered)
    onChange(filtered);
  }

  const OptionFilter = ({ name, value = name }) => (
    <option value={value}>{name}</option>
  );

  return (
    <div className="filterGender">
        <strong>Gender </strong>
        <select value={filterGender} onChange={e => dispatchFilter(e.target.value)}>
            <OptionFilter name="All" value="" />
            <OptionFilter name="Another" value="-" />
            <OptionFilter name="Male" />
            <OptionFilter name="Female" />
        </select>
    </div>
  );
}
