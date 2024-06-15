// Content.js
import React from 'react';
import styles from './content.module.css';

export default function Content() {
  const pStyle = {
    paddingBottom: '100px'
  };

  return (
    <div className={styles.contentModuleStyle}>
      <h2>This is the Home Page.</h2>
      <p style={pStyle}>Details or any paragraph in this section. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br /> <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}
