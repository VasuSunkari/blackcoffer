import React, { useState, useEffect } from 'react';
import Filters from './components/Filters';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import './App.css'; 

const App = () => {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = new URLSearchParams(filters).toString();
    axios.get(`/api/insights?${query}`)
      .then(res => setData(res.data));
  }, [filters]);

  return (
    <div className="container">
      <h1>📊 Insights Dashboard</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <Dashboard data={data} />
    </div>
  );
};

export default App;
