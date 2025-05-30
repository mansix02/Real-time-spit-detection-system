import React, { useState } from 'react';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaCamera,
  FaChartLine,
  FaImage,
  FaUserPlus,
  FaUsers,
  FaSignOutAlt
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    classInfo: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Student information submitted!');
  };

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
          <h3 className="fw-bold">Add Student</h3>
        </div>
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: '600px' }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Student Image</label>
              <input type="file" className="form-control" onChange={handleImageChange} accept="image/*" required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Mobile No.</label>
              <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Address</label>
              <textarea className="form-control" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Class</label>
              <input type="text" className="form-control" name="classInfo" value={formData.classInfo} onChange={handleChange} required />
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-info text-white fw-bold">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
