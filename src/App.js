import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import RegistrationForm from './RegistrationForm';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'registration':
        return <RegistrationForm />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => setCurrentPage('home')}>Home</li>
          <li onClick={() => setCurrentPage('registration')}>Registration</li>
          <li onClick={() => setCurrentPage('contact')}>Contact</li>
        </ul>
      </nav>
      <main>
        {renderPage()}
      </main>
      <Footer className='footer' />
    </div>
  );
}

export default App;
