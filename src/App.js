import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import Hero from './components/Hero'; // Page d'accueil
import Navbar from './components/Navbar'; // Navbar
import Find from './components/Find'; // Page Find
import Offer from './components/Offer'; // Page Offer
import MainPage from './components/MainPage';
import Footer from './components/Footer'; // Footer
import AdminPage from './components/AdminPage'; // Page Admin
import Aboutus from './components/Aboutus'; // Page Admin


function App() {
  return (
    <Router>
      <Navbar /> {/* La Navbar sera affichée sur toutes les pages */}
      
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/hero" element={<Hero />} /> {/* La route pour la page d'accueil */}
        <Route path="/find" element={<Find />} /> {/* Route pour la page Find */}
        <Route path="/offer" element={<Offer />} /> {/* Route pour l'Offre */}
        <Route path="/main" element={<MainPage />} /> {/* Route pour la page MainPage */}
        <Route path="/admin" element={<AdminPage />} /> {/* Route pour la page Admin */}
        <Route path="/about" element={<Aboutus />} /> {/* Route pour la page Admin */}
        <Route path="/" element={<SignIn />} /> {/* Redirection par défaut vers la page SignIn */}
      </Routes>

      <Footer /> {/* Footer affiché sur toutes les pages */}
    </Router>
  );
}

export default App;
