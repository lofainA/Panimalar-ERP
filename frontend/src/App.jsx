import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome/Welcome';

import FacultyLayout from './layouts/FacultyLayout';
import StudentLayout from './layouts/StudentLayout';

import FacultyDashboard from './pages/Faculty/FacultyDashboard/FacultyDashbaord';
import Attendance from './pages/Faculty/Attendance/Attendance';
import AssignmentManagement from './pages/Faculty/AssignmentManagement/AssignmentManagement'

import StudentLogin from './pages/Student/StudentLogin/StudentLogin';
import FacultyLogin from './pages/Faculty/FacultyLogin/FacultyLogin';

import StudentDashboard from './pages/Student/StudentDashboard/StudentDashboard';
import Assignments from './pages/Student/Assignments/Assignments';
import StudyMaterials from './pages/Student/StudyMaterials/StudyMaterials';
import Notifications from './pages/Student/Notifications/Notifications';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/student-login" element={<StudentLogin />}/>
        <Route path="/faculty-login" element={<FacultyLogin />}/>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="/student/assignments" element={<Assignments />}/>
          <Route path="/student/study-materials" element={<StudyMaterials />}/>
          <Route path="/student/notifications" element={<Notifications />}/>
        </Route>
        <Route path="/faculty" element={<FacultyLayout />}>
          <Route index element={<FacultyDashboard />} />
          <Route path="/faculty/attendance" element={<Attendance />} />
          <Route path="/faculty/assignments" element={<AssignmentManagement />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;