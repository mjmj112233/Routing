import styles from './Modal.module.css';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Modal({ children, handleLogin, error, username, password, setUsername, setPassword }) {
  const [redirect, setRedirect] = useState(false);

  const onSubmit = (e) => {
    handleLogin(e);
    if (!error) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        {children}
        <form onSubmit={onSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className={styles.login} type="submit">Login</button>
        </form>
      
      </div>
    </div>
  );
}
