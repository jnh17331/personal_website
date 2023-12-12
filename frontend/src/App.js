import './App.scss';
import Layout from'./components/Layout'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
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
