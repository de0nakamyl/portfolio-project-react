import './App.css';
import { Routes, Route } from 'react-router-dom'
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampsites());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route
          path='directory/:campsiteId'
          element={<CampsiteDetailPage />}
          />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;