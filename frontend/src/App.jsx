import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './component/AdminLogin';
import Dashboard from './component/Dashboard';
import './App.css'; 
import Camera from './component/Camera';
import SpittingImages from './component/SpittingImages';
import AddStudent from './component/AddStudent';
import AllStudents from './component/AllStudents';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to /login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Route */}
        <Route path="/login" element={<AdminLogin />} />

        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/camera" element={<Camera />} />
        <Route path="/spitting-images" element={<SpittingImages />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/all-students" element={<AllStudents />} />
      </Routes>
    </Router>
  );
}

export default App;
