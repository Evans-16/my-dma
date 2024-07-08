import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Team from './components/Team/Team';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import ServiceDetails from './components/ServicesDetails/ServiceDetails';
import FAQs from './components/FAQs/FAQs';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';

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
                <Statistics />
                <Services />
                <Team />
                <Clients />
                <Contact />
              </>
            } />
            <Route path="/team-details" element={<TeamDetails />} />
            <Route path="/services-details" element={<ServiceDetails />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
