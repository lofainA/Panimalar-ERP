import React from "react";
import StudentSidebar from "../../../components/Student/Sidebar/StudentSidebar";
import "./styles.css";
import ToDoList from "../../../components/ToDoList/ToDoList";

function StudentDashboard() {

    const studDetails = {
        FirstName: "Tom",
        LastName: "Holland",
        Department: "CSE",
        Year: "2022-2026",
        Semester: 5,
        CGPA: 8.5,
    };

    const tt = {
        1: "Algebra and Number Theory",
        2: "Internet Programming",
        3: "Theory of Computation",
        4: "Library",
        5: "Object Oriented Analysis and Design",
        6: "Internet Programming Lab",
        7: "Internet Programming Lab",
        8: "Technical Skills Lab"
    }

    const assignments = {
        1: "Organizational Behaviour",
        2: "Internet Programming",
        3: "Theory of Computation",
    }

    const entries = Object.entries(studDetails).slice(2);

    return(
        <div className="container">
            <StudentSidebar />
            <div className="dashboard-page d-flex flex-wrap">
                <div className="heading">
                    <img src="src/res/avatar.jpg" class="rounded-circle mx me-4 img-fluid" width="70" height="70" alt="profile picture"/>
                    <div class="fs-1">{ studDetails.FirstName } {studDetails.LastName}</div>
                </div>
                <div className="body" class="d-flex flex-column gap-4 flex-wrap">
                    <div className="details" class="d-flex flex-wrap gap-3">
                        {entries.map(([key, value]) => (
                            <ul class="list-group list-group-horizontal" key={ key }>
                                <li class="list-group-item bg-body-secondary">{ key }</li>
                                <li class="list-group-item">{ value }</li>
                            </ul>
                        ))}
                    </div>
                    <div class="d-flex gap-2 flex-1 flex-wrap" >
                        <div className="assignments">
                            <div class="list-group" style={{width: "23rem"}}>
                                <div class="list-group-item list-group-item-action bg-body-secondary">
                                    <div class="d-flex w-100 justify-content-between align-items-center">
                                        <h4 class="p-2 mb-1">Pending Assignments</h4>
                                        <a href="/assignments">
                                        <i class="bi bi-arrow-right-circle"></i>
                                        </a>
                                    </div>
                                </div>
                                {Object.entries(assignments).map(([key, value]) => (
                                    <div class="list-group-item">
                                        <ul class="list-group list-group-horizontal">
                                            <li class="list-group-item bg-body-secondary">{ key }</li>
                                            <li class="list-group-item">{ value }</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <ToDoList />
                        </div>
                        <div className="timetable">
                            <div class="list-group" style={{width: "23rem"}}>
                                <a href="#" class="list-group-item list-group-item-action bg-body-secondary">
                                    <div class="d-flex flex-column w-100 justify-content-between">
                                        <h4 class="p-2 mb-1">Tomorrows Time-Table</h4>
                                        <small class="px-2 mb-1"><span class="badge bg-secondary">Friday</span></small>
                                    </div>
                                </a>
                                {Object.entries(tt).map(([key, value]) => (
                                    <div class="list-group-item">
                                        <ul class="list-group list-group-horizontal">
                                            <li class="list-group-item bg-body-secondary">{ key }</li>
                                            <li class="list-group-item">{ value }</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;