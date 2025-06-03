import React from 'react';
import './piagam.css';

export default function PiagamReact({ nama, status }) {
  return (
    <div className="piagam-container">
      <div className="text-nama">{nama}</div>
      <div className="text-status">{status}</div>
    </div>
  );
}
