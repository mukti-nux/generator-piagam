import React from 'react';
import html2canvas from 'html2canvas';
import './piagam.css';

export default function PiagamReact({ nama, status }) {
  const downloadAsImage = () => {
    const piagamEl = document.getElementById('piagam-container');

    html2canvas(piagamEl).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'piagam.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div id="piagam-container" className="piagam-container">
        <div className="text-nama">{nama}</div>
        <div className="text-status">{status}</div>
      </div>
      <button onClick={downloadAsImage} style={{ marginTop: '16px' }}>
        Download PNG
      </button>
    </div>
  );
}
