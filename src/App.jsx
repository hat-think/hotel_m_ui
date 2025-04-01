import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPageWithHeader from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPageWithHeader />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
