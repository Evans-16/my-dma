import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import ServiceDetails from './components/ServicesDetails/ServiceDetails';
import FAQs from './components/FAQs/FAQs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Team />
                <Services />
                <Clients />
                <Contact />
              </>
            } />
            <Route path="/team-details" element={<TeamDetails />} />
            <Route path="/services-details" element={<ServiceDetails />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
