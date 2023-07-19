import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import { Button, CssBaseline } from '@mui/material';
import '@fontsource/open-sans';
import '@fontsource/open-sans/800.css';
import '@fontsource/open-sans/600.css';
import { SiMyanimelist } from 'react-icons/si';
import './App.css';
import { AnimeList } from './pages/AnimeList';
import {Navbar} from './components/Navbar';
import {Home} from './pages/Home';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime-list" element={<AnimeList />} />
        </Routes>
      </div>
    </Router>
  );
}
