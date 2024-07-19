import React, { useEffect, useState } from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";

function StudentSidebar(activePage) {

    const location = useLocation();
    const { hashname, path, search } = location;
    const activePg = path

    useEffect(() => {
        console.log(activePage)
    }, [activePage]);

    return(
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-secondary" style={{width: "210px", height: "100vh"}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="src/assets/logo.png" class="bi pe-none me-2" width="40" />
            <span class="fs-4">Dashboard</span>
            </a>
            <hr/>
            <ul class="nav nav-pills flex-column mb-auto">
            <li class={activePg === 'student-dashboard' ? "nav-item" : activePg}>
                <a href="/student-dashboard" class={activePg === 'dashboard' ? "nav-link link-body-emphasis active" : "nav-link link-body-emphasis"}>
                <img src="src/assets/SidebarIcons/house.svg" width="16" height="16"/>
                Home
                </a>
            </li>
            <li class={activePage === 'assignments' ? "nav-item" : ""}>
                <a href="/assignments" class={activePage === 'assignments' ? "nav-link link-body-emphasis active" : "nav-link link-body-emphasis"}>
                <img src="src/assets/SidebarIcons/journal-text.svg" width="16" height="16"/>
                Assignments
                </a>
            </li>
            <li>
                <a href="/study-materials" class={activePage === "studyMats" ? "nav-link active" : "nav-link link-body-emphasis"}>
                <img src="src/assets/SidebarIcons/book.svg" width="16" height="16"/>
                Study Materials
                </a>
            </li>
            <li>
                <a href="#" class={activePage === "exams" ? "nav-link active" : "nav-link link-body-emphasis"}>
                <img src="src/assets/SidebarIcons/pencil.svg" width="16" height="16"/>
                Exams
                </a>
            </li>
            <li>
                <a href="#" class={activePage === "social" ? "nav-link active" : "nav-link link-body-emphasis"}>
                <img src="src/assets/SidebarIcons/chat-left-dots.svg" width="16" height="16"/>
                Social
                </a>
            </li>
            </ul>
            <hr/>
            <div class="dropdown">
            <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="src/assets/avatar.jpg" alt="" width="32" height="32" class="rounded-circle me-2"/>
                <strong>Tom Holland</strong>
            </a>
            <ul class="dropdown-menu text-small shadow">
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Edit Profile</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="/student-login">Sign out</a></li>
            </ul>
            </div>
        </div>
    );
}

export default StudentSidebar;