import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalDetails from './components/PersonalDetails';
import Questionnaire from './components/Questionnaire';

function App() {
  return (
    <Router>
      <Routes baseName='/'>
      <Route path="/AiQuestionnaires" element={<PersonalDetails />} exact />
        <Route path="/" element={<PersonalDetails />} exact />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </Router>
  );
}

export default App;
