import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './LoginModal';

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      onLoginSuccess();
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  const labelStyle = {
    display: 'block',
    textAlign: 'left',
    margin: '20px 0 5px 0'
  };

  const h1Style = {
    marginBottom: '40px'
  };

  return (
    <div className="login-page">
      <Modal>
        <div>
          <h1 style={h1Style}>Login</h1>
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <div>
                <label style={labelStyle}>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
