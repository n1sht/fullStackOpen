import React from 'react';

const PersonForm = ({ addNameAndNum, newName, setNewName, newNumber, setNewNumber }) => {
  return (
    <form>
      <div>
        name:{' '}
        <input
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
      </div>
      <div>
        Number:{' '}
        <input
          value={newNumber}
          onChange={(e) => {
            setNewNumber(e.target.value);
          }}
        />
      </div>
      <div>
        <button type="submit" onClick={addNameAndNum}>
          add
        </button>
      </div>
    </form>
  );
};
export default PersonForm;
