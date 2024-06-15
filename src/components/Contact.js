import React from 'react';
import styles from './content.module.css';

function ContactUs() {
    const pStyle = {
        paddingBottom: '100px'
    };
    return (
        <div className={styles.contentModuleStyle}>
            <h2>This is Contact Us Page.</h2>
            <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque neque ut placerat imperdiet.
                Nullam feugiat a lorem sit amet tristique. Nulla tempus, leo sit amet sagittis ultrices, purus augue semper mauris, tempor dapibus libero massa a sapien.
                <br /> <br /> Pellentesque vitae mattis lacus. Donec et sapien quam. Ut lobortis, purus ac pharetra efficitur, ante justo fermentum nisi, quis scelerisque purus orci sit amet nulla. Proin vehicula elit in lectus rhoncus, vel bibendum mi accumsan. Morbi tempor nunc sed dolor tincidunt tincidunt et vel ipsum. Nulla aliquam luctus quam non convallis.</p>
        </div>
    );
}

export default ContactUs;
