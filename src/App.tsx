// I will remove this styling sheet or rework it
// import './App.css'
import Notes from './components/notes';
import ContactPage from './pages/Contact';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import ProjectsPage from './pages/Projects';
import WritingPage from './pages/Writing';
import TutoringPage from './pages/Tutoring';
import AboutPage from './pages/About';

function App() {
  return (
    <Router>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/projects" Component={ProjectsPage} />
          <Route path="/technical-writing" Component={WritingPage} />
          <Route path="/teaching" Component={TutoringPage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/contact" Component={ContactPage} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
