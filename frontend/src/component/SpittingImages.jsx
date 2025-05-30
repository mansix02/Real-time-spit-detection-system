// import React from 'react';
// import Sidebar from './Sidebar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   FaCamera,
//   FaChartLine,
//   FaImage,
//   FaUserPlus,
//   FaUsers,
//   FaSignOutAlt
// } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// function SpittingImages() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/');
//   };

//   return (
//     <div className="d-flex min-vh-100 bg-light">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content */}
//       <div className="flex-grow-1 p-4">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h3 className="fw-bold">Spitting Images</h3>
//         </div>

//         <div className="row g-4">
//           {[...Array(6)].map((_, index) => (
//             <div key={index} className="col-md-4">
//               <div className="card shadow-sm border-0">
//                 <img src={`https://via.placeholder.com/400?text=Spit+Image+${index + 1}`} className="card-img-top" alt={`Spit ${index + 1}`} />
//                 <div className="card-body text-center">
//                   <p className="card-text fw-semibold">Spitting Detected - Student #{index + 1}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SpittingImages;

import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

function SpittingImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/get_spitting_images')
      .then(response => setImages(response.data.images))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="d-flex min-vh-100 bg-light">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <h3 className="fw-bold mb-4">Spitting Images</h3>
        <div className="row g-4">
          {images.map((filename, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm border-0">
                <img
                  src={`http://localhost:5001/static/spits/${filename}`}
                  className="card-img-top"
                  alt={`Spit ${index + 1}`}
                />
                <div className="card-body text-center">
                  <p className="card-text fw-semibold">Spitting Detected - Image #{index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpittingImages;
