import React from 'react';

const Persons = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.phoneNumber}
        </p>
      ))}
    </div>
  );
};

export default Persons;
