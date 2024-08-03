import React from 'react';
import { Outlet } from 'react-router-dom';
import FacultySidebar from '../components/Faculty/Sidebar/FacultySidebar';

function FacultyLayout() {
    return (
        <div class="d-flex justify-content-start margin-0 padding-0 w-100">
            <FacultySidebar />
            <div class="w-100" >
                <Outlet />
            </div>
        </div>
    );
};

export default FacultyLayout;