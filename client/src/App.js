import React from 'react';
// import { useQuery, gql } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';






export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<SearchBooks />}
          />
          <Route
            path='/saved'
            element={<SavedBooks />}
          />
          <Route
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  );
};
