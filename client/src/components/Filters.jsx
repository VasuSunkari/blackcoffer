import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="filters">
      <input name="topic" placeholder="Topic" onChange={handleChange} />
      <input name="region" placeholder="Region" onChange={handleChange} />
      <input name="country" placeholder="Country" onChange={handleChange} />
      <input name="end_year" placeholder="End Year" onChange={handleChange} />
    </div>
  );
};

export default Filters;
