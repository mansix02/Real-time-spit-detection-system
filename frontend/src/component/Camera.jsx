import React, { useState } from 'react';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCamera } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function CameraPage() {
  const navigate = useNavigate();
  const [isStreaming, setIsStreaming] = useState(false);

  const handleStart = () => {
    setIsStreaming(true);
  };

  const handleStop = () => {
    setIsStreaming(false);
    fetch('http://localhost:5001/stop', { method: 'GET' }).catch((err) =>
      console.error('Failed to stop stream:', err)
    );
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
          <h3 className="fw-bold"><FaCamera className="me-2 text-danger" />Live Spit Detection</h3>
        </div>
        <div className="text-center">
          <div
            className="rounded shadow-lg border border-2 border-info mb-4 mx-auto"
            style={{ width: '800px', height: '500px', overflow: 'hidden' }}
          >
            {isStreaming ? (
              <img
                src="http://localhost:5001/video"
                alt="Live Spit Detection"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            ) : (
              <div
                className="d-flex justify-content-center align-items-center h-100 text-muted"
                style={{ fontSize: '1.5rem' }}
              >
                Camera is off
              </div>
            )}
          </div>
          <div>
            {!isStreaming ? (
              <button className="btn btn-success px-4 py-2 fw-bold" onClick={handleStart}>
                Start Detection
              </button>
            ) : (
              <button className="btn btn-danger px-4 py-2 fw-bold" onClick={handleStop}>
                Stop Detection
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CameraPage;
