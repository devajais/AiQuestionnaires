import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalDetails from './components/PersonalDetails';
// import Questionnaire from './Questionnaire';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetails />} exact />
        {/* <Route path="/questionnaire" element={<Questionnaire />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
