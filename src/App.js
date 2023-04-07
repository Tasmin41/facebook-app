import React from 'react';
import './App.css';
import Home from './layouts/Home';
import { Container } from 'react-bootstrap-v5';
import { useState,useEffect } from 'react';
import { fetchData } from './api/api';
import { DataContext } from './api/context';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <DataContext.Provider value={data}>
      <Home/>
  </DataContext.Provider>
     
  );
}

export default App;
