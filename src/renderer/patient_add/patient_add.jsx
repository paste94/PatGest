import { useEffect, useState } from 'react';
import * as Database from '../database/database';
import heroSchema from '../database/schema';

export default function PatientAdd() {
  let [name, setName] = useState('');
  let [color, setColor] = useState('');

  const addHero = async (event) => {
    event.preventDefault();
    console.log('get.............');
    const db = await Database.get();

    const addData = {
      name,
      color,
    };
    console.log('insert..........');
    await db.heroes.insert(addData);
    setName('');
    setColor('');
  };

  const addCollection = () => {
    Database.get();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div id="insert-box" className="box">
      <h3>Add Hero</h3>
      <form onSubmit={addHero}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          name="color"
          type="text"
          placeholder="Color"
          value={color}
          onChange={handleColorChange}
        />
        <button type="submit">Insert a Hero</button>
      </form>
      <button type="submit" onClick={addCollection}>
        add collectiob
      </button>
    </div>
  );
}
