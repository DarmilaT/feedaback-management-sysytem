import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const StudentDashboard = ({ studentId }) => {
  const studentRef = doc(db, `students`,studentId);
  const [name, setName] = useState('');
  const [RegNum, setRegistrationNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [BatchNo, setBatchNo] = useState(0);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const studentSnapshot = await getDoc(studentRef);
        if (studentSnapshot.exists()) {
          const studentData = studentSnapshot.data();
          setName(studentData.name || '');
          setRegistrationNumber(studentData.RegNum || '');
          setEmail(studentData.Email || '');
          setBatchNo(studentData.BatchNo || 0);
        } else {
          console.log('Student not found');
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [studentRef, studentId]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCourseFeedback = (courseId) => {
    console.log(`Course feedback for course with ID ${courseId}`);
  };

  const handleLectureFeedback = (courseId) => {
    console.log(`Lecture feedback for course with ID ${courseId}`);
  };


  return (
    <div className="student-dashboard">
      <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#f0f0f0', borderBottom: '2px solid #ccc' }}>
        <h1 style={{ color: '#333' }}>Student Feedback Management System</h1>
        <button className="menu-btn" style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>Menu</button>
    </header>
        <div className="student-info" style={{ marginTop: '20px',marginLeft:'50px',marginRight:'50px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        <div className="info-item" style={{ marginBottom: '10px' }}>
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Name:</label>
            <span>{name}</span>
        </div>
        <div className="info-item" style={{ marginBottom: '10px' }}>
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Registration Number:</label>
            <span>{RegNum}</span>
        </div>
        <div className="info-item" style={{ marginBottom: '10px' }}>
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Email:</label>
            <span>{Email}</span>
        </div>
        <div className="info-item">
            <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Batch Number:</label>
            <span>{BatchNo}</span>
        </div>
        </div>


        <div className="courses-list" style={{ marginTop: '20px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ marginBottom: '15px', color: '#333' }}>Courses</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {courses.map((course, index) => (
                    <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ flex: '1', marginRight: '10px', fontWeight: 'bold' }}>{course.name}</span>
            <button onClick={() => handleCourseFeedback(course.id)} style={{ marginRight: '10px', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Course Feedback</button>
         <button onClick={() => handleLectureFeedback(course.id)} style={{ padding: '8px 16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Lecture Feedback</button>
      </li>
    ))}
    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <span style={{ flex: '1',marginLeft:'50px', marginRight: '50px', fontWeight: 'bold' }}>EC6020-Embedded System</span>
      <button onClick={() => handleCourseFeedback('EC6020')} style={{ marginRight: '50px', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Course Feedback</button>
      <button onClick={() => handleLectureFeedback('EC6020')} style={{ padding: '8px 16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Lecture Feedback</button>
    </li>
    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <span style={{ flex: '1',marginLeft:'50px', marginRight: '10px', fontWeight: 'bold' }}>EC6090-Robotics and Automation</span>
      <button onClick={() => handleCourseFeedback('EC6090')} style={{ marginRight: '50px', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Course Feedback</button>
      <button onClick={() => handleLectureFeedback('EC6090')} style={{ padding: '8px 16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Lecture Feedback</button>
    </li>
    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <span style={{ flex: '1',marginLeft:'50px', marginRight: '10px', fontWeight: 'bold' }}>EC6060-Software Engineering</span>
      <button onClick={() => handleCourseFeedback('EC6060')} style={{ marginRight: '50px', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Course Feedback</button>
      <button onClick={() => handleLectureFeedback('EC6060')} style={{ padding: '8px 16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Lecture Feedback</button>
    </li>
    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <span style={{ flex: '1',marginLeft:'50px', marginRight: '10px', fontWeight: 'bold' }}>EC9170-Deep Learning</span>
      <button onClick={() => handleCourseFeedback('EC6070')} style={{ marginRight: '50px', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Course Feedback</button>
      <button onClick={() => handleLectureFeedback('EC6070')} style={{ padding: '8px 16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Lecture Feedback</button>
    </li>
    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <span style={{ flex: '1',marginLeft:'50px', marginRight: '10px', fontWeight: 'bold' }}>EC9630-Machine Learning</span>
      <button onClick={() => handleCourseFeedback('EC9630')} style={{ marginRight: '50px', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Course Feedback</button>
      <button onClick={() => handleLectureFeedback('EC9630')} style={{ padding: '8px 16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Lecture Feedback</button>
    </li>
  </ul>
</div>

    </div>
  );
};

export default StudentDashboard;
