// RUBA DA QUI https://github.com/vazra/electron-react-ts-rxdb-realm-sqlite/blob/master/src/renderer/databases/rxdb/db.ts

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Console } from 'console';
import { useEffect, useState } from 'react';
import PatientsList from './patients_list/patients_list';
import PatientAdd from './patient_add/patient_add';

export default function App() {
  return (
    <div>
      <h1>RxDB Example - React</h1>
      <PatientsList />
      <PatientAdd />
    </div>
    /*
    <Router>
      <Routes>
        <Route path="/" element={<PatientAdd />} />
      </Routes>
    </Router>
    */
  );
}
