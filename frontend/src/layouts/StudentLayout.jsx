import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebar from '../components/Student/Sidebar/StudentSidebar';

function StudentLayout() {
    return (
        <div class="d-flex justify-content-start margin-0 padding-0 w-100">
            <StudentSidebar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default StudentLayout;