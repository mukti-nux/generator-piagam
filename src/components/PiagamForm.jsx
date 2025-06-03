import React, { useState } from 'react';
import PiagamReact from './PiagamReact';

export default function PiagamForm() {
  const [nama, setNama] = useState('');
  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {!submitted ? (
        <form onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}>
          <label>
            Nama:
            <input value={nama} onChange={(e) => setNama(e.target.value)} required />
          </label>
          <br />
          <label>
            Status:
            <input value={status} onChange={(e) => setStatus(e.target.value)} required />
          </label>
          <br />
          <button type="submit">Generate</button>
        </form>
      ) : (
        <PiagamReact nama={nama} status={status} />
      )}
    </>
  );
}
