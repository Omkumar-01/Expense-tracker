// src/components/Filter.js
import React from 'react';

const Filter = ({ filterCategory, setFilterCategory }) => {
  return (
    <div>
      <input
        type="text"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        placeholder="Filter by category"
      />
    </div>
  );
};

export default Filter;
