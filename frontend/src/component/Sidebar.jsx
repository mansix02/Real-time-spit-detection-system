import React from 'react';
import {
  FaCamera,
  FaChartLine,
  FaImage,
  FaUserPlus,
  FaUsers,
  FaSignOutAlt
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/');
  };

  // Function to check if route is active for styling
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="bg-white border-end d-flex flex-column justify-content-between p-3 shadow"
      style={{ width: '260px', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}
    >
      <div>
        <h4 className="mb-4 text-info fw-bold"><FaChartLine className="me-2" /> Spit System</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-3">
            <button
              className={`btn nav-link text-start d-flex align-items-center w-100 ${isActive('/dashboard') ? 'active text-white' : 'text-dark'}`}
              style={isActive('/dashboard') ? { backgroundColor: '#0dcaf0' } : {}}
              onClick={() => navigate('/dashboard')}
            >
              <FaChartLine className="me-2 text-info" /> Dashboard
            </button>
          </li>
          <li className="nav-item mb-3">
            <button
              className={`btn nav-link text-start d-flex align-items-center w-100 ${isActive('/camera') ? 'active text-white' : 'text-dark'}`}
              style={isActive('/camera') ? { backgroundColor: '#0dcaf0' } : {}}
              onClick={() => navigate('/camera')}
            >
              <FaCamera className="me-2 text-danger" /> Camera
            </button>
          </li>
          <li className="nav-item mb-3">
            <button
              className={`btn nav-link text-start d-flex align-items-center w-100 ${isActive('/spitting-images') ? 'active text-white' : 'text-dark'}`}
              style={isActive('/spitting-images') ? { backgroundColor: '#0dcaf0' } : {}}
              onClick={() => navigate('/spitting-images')}
            >
              <FaImage className="me-2 text-success" /> Spitting Images
            </button>
          </li>
          <li className="nav-item mb-3">
            <button
              className={`btn nav-link text-start d-flex align-items-center w-100 ${isActive('/add-student') ? 'active text-white' : 'text-dark'}`}
              style={isActive('/add-student') ? { backgroundColor: '#0dcaf0' } : {}}
              onClick={() => navigate('/add-student')}
            >
              <FaUserPlus className="me-2 text-danger" /> Add Student
            </button>
          </li>
          <li className="nav-item mb-3">
            <button
              className={`btn nav-link text-start d-flex align-items-center w-100 ${isActive('/all-students') ? 'active text-white' : 'text-dark'}`}
              style={isActive('/all-students') ? { backgroundColor: '#0dcaf0' } : {}}
              onClick={() => navigate('/all-students')}
            >
              <FaUsers className="me-2 text-info" /> All Students
            </button>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={handleLogout} className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center">
          <FaSignOutAlt className="me-2" /> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
