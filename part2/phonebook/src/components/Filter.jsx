import React from 'react';

const Filter = ({ onChange }) => {
  return (
    <div>
      <label>filter shown with </label>
      <input onChange={onChange} />
    </div>
  );
};

export default Filter;
