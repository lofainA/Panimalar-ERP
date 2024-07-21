import React from "react";
import FacultySidebar from "../../../components/Faculty/Sidebar/FacultySidebar";


function FacultyDashboard() {

    const faculDetails = {
        FirstName: "Robert",
        LastName: "Downey",
        Department: "CSE",
        Joined: "2022",
        Mentor: "CSE-A",
        Position: "Math Professor",
        Education: "MSC. Mathematics"
    };

    const entries = Object.entries(faculDetails).slice(2);

    return(
        <div className="container">
            <FacultySidebar />
            <div className="dashboard-page d-flex flex-wrap">
                <div className="heading">
                    <img src="src/res/avatar.jpg" class="rounded-circle mx me-4 img-fluid" width="70" height="70" alt="profile picture"/>
                    <div class="fs-1">{ faculDetails.FirstName } {faculDetails.LastName}</div>
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
                </div>
            </div>
        </div>
    )
}

export default FacultyDashboard;