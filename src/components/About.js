import React from 'react';
import styles from './content.module.css';

function AboutUs() {
    const pStyle = {
        paddingBottom: '100px'
    };
    return (
        <div className={styles.contentModuleStyle}>
            <h2>This is About Us Page.</h2>
            <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum felis non erat tempus tristique. Quisque eu metus in sem dictum feugiat ut et tortor.
                Suspendisse rutrum, quam et molestie bibendum, erat nunc feugiat diam, eu efficitur tortor odio a ligula.
            </p>
        </div>
    );
}

export default AboutUs;
