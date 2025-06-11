import React from 'react';

const Input = ({ label, value, onChange, type = 'text', name, className = '' }) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
