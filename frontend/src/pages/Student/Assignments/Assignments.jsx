import React from "react";
import StudentSidebar from "../../../components/Student/Sidebar/StudentSidebar";

import "./styles.css";

function Assignments () {

    const assignments = [
        {
            subject: "Thoeory of Computation",
            due: "Thu Jul 18 2024",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            subject: "Organizational Behaviour",
            due: "Mon Jul 22 2024",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            subject: "Internet Programming",
            due: "Fri Jul 26 2024",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ];

    const handleAssignmentSubmission = () => {

    };

    const currDate = new Date();

    return(
        <div className="container">
            <div class="d-flex flex-column gap-4 w-100 h-100 p-4">
                <div>
                    <h4>Today</h4>
                    <hr/>
                    <div class="d-flex flex-column gap-2">
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item bg-body-secondary">Theory of Computation</li>
                            <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                        </ul>
                        <div>
                            <form onSubmit={handleAssignmentSubmission} class="d-flex flex-row w-75 align-items-center gap-2">
                                <label for="formFile" class="form-label text-secondary p-0 m-0">Upload completed assignment</label>
                                <input class=" form-control" type="file"/>
                                <button type="submit" class="btn btn-success"><i class="bi bi-upload"/></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Mon Jul 22 2024</h4>
                    <hr/>
                    <div class="d-flex flex-column gap-2">
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item bg-body-secondary">Organizational Behaviour</li>
                            <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                        </ul>
                        <div>
                            <form onSubmit={handleAssignmentSubmission} class="d-flex flex-row w-75 align-items-center gap-2">
                                <label for="formFile" class="form-label text-secondary p-0 m-0">Upload completed assignment</label>
                                <input class=" form-control" type="file"/>
                                <button type="submit" class="btn btn-success"><i class="bi bi-upload"/></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Fri Jul 26 2024</h4>
                    <hr/>
                    <div class="d-flex flex-column gap-2">
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item bg-body-secondary">Internet Programming</li>
                            <li class="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                        </ul>
                        <div>
                            <form onSubmit={handleAssignmentSubmission} class="d-flex flex-row w-75 align-items-center gap-2">
                                <label for="formFile" class="form-label text-secondary p-0 m-0">Upload completed assignment</label>
                                <input class=" form-control" type="file"/>
                                <button type="submit" class="btn btn-success"><i class="bi bi-upload"/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Assignments;