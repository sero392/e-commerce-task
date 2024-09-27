import React from 'react';
import '../Assets/css/toastr.css';

export default function ToastrComp ({ message, type = 'info', onClose }) {
  const toastrClass = `toastr toastr-${type}`;
  return (
    <div className={toastrClass}>
      <span>{message}</span>
      <button className="toastr-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};