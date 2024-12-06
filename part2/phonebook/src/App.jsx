import './App.css';
import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
    };
    const alreadyExists = persons.some((person) => person.name === newPerson.name);
    if (alreadyExists) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
          <button type="submit" onClick={addName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;