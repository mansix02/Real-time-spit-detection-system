import React, { useState } from 'react';
import Sidebar from './Sidebar';  // <-- Import Sidebar component
import 'bootstrap/dist/css/bootstrap.min.css';

function AllStudents() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Mansi Ahirwar', email: 'mansi@example.com', mobile: '1234567890', address: 'City A', classInfo: '10th', image: null },
    { id: 2, name: 'Rahul Kumar', email: 'rahul@example.com', mobile: '0987654321', address: 'City B', classInfo: '9th', image: null },
    { id: 3, name: 'Anita Sharma', email: 'anita@example.com', mobile: '1122334455', address: 'City A', classInfo: '10th', image: null },
  ]);

  // Group students by classInfo
  const groupedByClass = students.reduce((groups, student) => {
    const cls = student.classInfo || 'Unknown';
    if (!groups[cls]) groups[cls] = [];
    groups[cls].push(student);
    return groups;
  }, {});

  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow-1 p-4">
        <h3 className="fw-bold mb-4">All Students (Grouped by Class)</h3>

        {Object.keys(groupedByClass).length === 0 && (
          <p>No students available.</p>
        )}

        {Object.entries(groupedByClass).map(([className, students]) => (
          <div key={className} className="mb-5">
            <h4 className="text-info mb-3">{className}</h4>
            <div className="row">
              {students.map(student => (
                <div key={student.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card shadow-sm h-100">
                    {student.image ? (
                      // If image is a URL string, use it directly
                      typeof student.image === 'string' ? (
                        <img src={student.image} alt={student.name} className="card-img-top" style={{height: '180px', objectFit: 'cover'}} />
                      ) : (
                        // If image is a File object, create a URL
                        <img src={URL.createObjectURL(student.image)} alt={student.name} className="card-img-top" style={{height: '180px', objectFit: 'cover'}} />
                      )
                    ) : (
                      <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{height: '180px'}}>
                        No Image
                      </div>
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{student.name}</h5>
                      <p className="mb-1"><strong>Email:</strong> {student.email}</p>
                      <p className="mb-1"><strong>Mobile:</strong> {student.mobile}</p>
                      <p className="mb-1"><strong>Address:</strong> {student.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllStudents;
