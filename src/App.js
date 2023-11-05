import './App.scss';
//import axios from 'axios';
//import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {
  // Example of using data from our backend
  
  //const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch("http://localhost:8000/api-test/")
  //   .then(
  //     res => res.json()
  //   )
  //   .then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     });

  // }, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
    </>
  );
}

export default App;
