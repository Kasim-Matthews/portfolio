import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import Portfolio from './pages/portfolioPage';
import About from './pages/aboutPage';
import Contact from './pages/contactPage';
import Skills from './pages/skillsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/skills' element={<Skills/>}/>
    </Routes>
  );
}

export default App;
