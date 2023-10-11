import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api-test/")
    .then(
      res => res.json()
    )
    .then(
      data => {
        setData(data)
        console.log(data)
      });

  }, []);
  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
}

export default App;
