import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Layout from './components/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="forecast" element={<Forecast />} />
      </Route>
    </Routes>
  );
}