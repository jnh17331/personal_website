import './App.scss';
//import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
import Layout from'./components/Layout'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/about" element={<Layout />}>
        <Route index element={<About />} />
      </Route>
      <Route path="/projects" element={<Layout />}>
        <Route index element={<Projects />} />
      </Route>
      <Route path="/blog" element={<Layout />}>
        <Route index element={<Blog />} />
      </Route>
      <Route path="/contact" element={<Layout />}>
        <Route index element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
