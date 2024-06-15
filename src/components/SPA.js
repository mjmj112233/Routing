import React from 'react';
import './SPAStyle.css';

export default function ModalDemo(props) {
  const titleStyle = {
    color: '#f0f0f0',
    margin: '10px 0 30px 0'
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h1 style={titleStyle}>{props.title}</h1>
        {props.navbar}
        {props.content}
      </div>
    </div>
  );
}
