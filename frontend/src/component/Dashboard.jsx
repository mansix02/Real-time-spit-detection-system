import React from 'react';
import Sidebar from './Sidebar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaUserPlus,
  FaUsers,
  FaCamera,
  FaImage,
  FaBan,
  FaMoneyBillWave,
  FaUserCircle,
  FaSignOutAlt,
  FaChartLine
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Dashboard</h3>
          <button className="btn btn-outline-secondary d-flex align-items-center">
            <FaUserCircle className="me-2" size={20} />
            Admin
          </button>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center hover-shadow">
              <div className="card-body">
                <FaUsers className="mb-3 text-info" size={40} />
                <h2 className="fw-bold">256</h2>
                <p className="text-muted">Registered Students</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center hover-shadow">
              <div className="card-body">
                <FaBan className="mb-3 text-danger" size={40} />
                <h2 className="fw-bold">34</h2>
                <p className="text-muted">Spitting Behaviours Detected</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 text-center hover-shadow">
              <div className="card-body">
                <FaMoneyBillWave className="mb-3 text-success" size={40} />
                <h2 className="fw-bold">12</h2>
                <p className="text-muted">Pending Student Fines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
