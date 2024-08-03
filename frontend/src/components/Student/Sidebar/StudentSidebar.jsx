import React, { useEffect, useState } from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";

function StudentSidebar(activePage) {

    const location = useLocation();
    const { hashname, path, search } = location;
    const activePg = location.pathname;

    useEffect(() => {
        console.log(location)
    }, [activePg]);

    return(
        <div class="d-flex flex-column flex-shrink-0 p-4 bg-body-secondary" style={{width: "218px", minHeight:"100vh"}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="src/res/logo.png" class="me-2" width="40" />
            <span class="fs-4">My Portal</span>
            </a>
            <hr/>
            <ul class="nav nav-pills flex-column mb-auto">
            <li class={activePg === "/student" ? "nav-item" : ""}>
                <a href="/student" class={activePg === '/student' ? "nav-link active" : "nav-link link-body-emphasis"}>
                <i class="bi bi-kanban"></i>
                Dashboard
                </a>
            </li>
            <li class={activePg === '/student/assignments' ? "nav-item" : ""}>
                <a href="/student/assignments" class={activePg === '/student/assignments' ? "nav-link active" : "nav-link link-body-emphasis"}>
                <i class="bi bi-journal-text"></i>
                Assignments
                </a>
            </li>
            <li class={activePg === '/student/study-materials' ? "nav-item" : ""}>
                <a href="/student/study-materials" class={activePg === "/student/study-materials" ? "nav-link active" : "nav-link link-body-emphasis"}>
                <i class="bi bi-book"></i>
                Study Materials
                </a>
            </li>
            
            <li class={activePg === '/student/notifications' ? "nav-item" : ""}>
                <a href="/student/notifications" class={activePg === "/student/notifications" ? "nav-link active" : "nav-link link-body-emphasis"}>
                <i class="bi bi-chat-left-dots"></i>
                Notifications
                </a>
            </li>
            </ul>
            <hr/>
            <div class="dropdown">
            <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="src/res/avatar.jpg" alt="" width="32" height="32" class="rounded-circle me-2"/>
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

/*<li>
                <a href="/exams" class={activePage === "exams" ? "nav-link active" : "nav-link link-body-emphasis"}>
                <i class="bi bi-pencil"></i>
                Exams
                </a>
            </li>*/