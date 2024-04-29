import React, { useState } from 'react';
import '../styles/maHomepageDashboard.css'; // Import your custom CSS for styling

const Dashboard = () => {
  // State variables to manage active tab, list visibility, and other data
  const [activeTab, setActiveTab] = useState('lectures');
  const [showLists, setShowLists] = useState(false); // State to track list visibility

  // Function to toggle visibility of lists
  const toggleLists = () => {
    setShowLists(!showLists);
  }

  return (
    <div className="dashboard">
      {/* Sidebar content */}
      <div className={`sidebar ${showLists ? 'show' : ''}`}>
        {/* Buttons for feedback, lecture list, course list, student list, course allocation, summary, notice, reset password, and logout */}
        <div className="list-buttons">
          <button onClick={() => console.log('Feedback')}>Feedback</button>
          <button onClick={() => console.log('Lecture List')}>Lecture List</button>
          <button onClick={() => console.log('Course List')}>Course List</button>
          <button onClick={() => console.log('Student List')}>Student List</button>
          <button onClick={() => console.log('Course Allocation')}>Course Allocation</button>
          <button onClick={() => console.log('Summary')}>Summary</button>
          <button onClick={() => console.log('Notice')}>Notice</button>
          <button onClick={() => console.log('Reset Password')}>Reset Password</button>
          <button onClick={() => console.log('Logout')}>Logout</button>
        </div>
      </div>
      <div className="content">
        <div className="header">
          {/* Button to toggle sidebar in top left corner */}
          <div className="toggle-button" onClick={toggleLists}>
            ☰
          </div>
          {/* Title */}
          <div className="dashboard-title">
            Student Feedback Management System
          </div>
        </div>
        {/* Main content */}
        <div className="main-content">
          {/* Main content */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
