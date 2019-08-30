import React, { useState, useEffect } from 'react';

export default function SearchInput({ search, onChange }) {
  const [filterHeros, setFilterHeros] = useState("");
  
  useEffect(() => {
    setFilterHeros(search);
  }, [search]);

  const dispatchFilter = filtered => {
    setFilterHeros(filtered)
    setTimeout(() => onChange(filtered), 200);
  }

  return (
    <input type="text" placeholder="Pequise por um herói"
        onChange={e => dispatchFilter(e.target.value)} value={filterHeros} />
  );
}
