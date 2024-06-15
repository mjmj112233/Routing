import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Modal from './components/LoginModal';
import Navbar from './components/Navbar';
import Content from './components/Content';
import AboutUs from './components/About';
import ContactUs from './components/Contact';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route 
              path="/login" 
              element={
                <Modal 
                  handleLogin={handleLogin} 
                  error={error} 
                  username={username} 
                  password={password} 
                  setUsername={setUsername} 
                  setPassword={setPassword} 
                >
                  <div>
                    <h1 style={{ marginBottom: '10px' }}>Login</h1>
                    <p style={{ color: '#b1b1b1', fontSize: '12px', marginBottom: '40px' }}>
                      Sample Accounts: Username: user1 Password: password1
                    </p>
                  </div>
                </Modal>
              } 
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
