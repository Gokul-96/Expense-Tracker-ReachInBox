import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddExpense />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;