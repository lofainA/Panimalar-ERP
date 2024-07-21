import React from "react";
import StudentSidebar from "../../../components/Student/Sidebar/StudentSidebar";

import LimitText from "../../../components/LimitText/LimitText";
import notifications from './notifications.json';

function Notifications() {

    const openMessage = () => {
        console.log("modal reached");
    };  

    return(
        <div className="container">
            <StudentSidebar />
            <div class="d-flex flex-column justify-content-center w-100 m-4 mx-5" style={{height: "fit-content"}}>
                <div class="input-group mb-5 w-75 align-self-center">
                    <input type="text" class="form-control" placeholder="Search keyword ...." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-primary d-flex g-3" style={{gap:".5rem"}} type="button" id="button-addon2">
                        <i class="bi bi-search"></i>
                        Search
                    </button>
                </div>
                <div class="card w-100 h-100">
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action bg-body-secondary">
                            <div class="d-flex w-100 justify-content-between align-items-center">
                                <h4 class="p-1 mb-1">Alerts</h4> 
                            </div>
                        </div>
                        {notifications.notifs.map((notif, index) => (
                            <div class="list-group-item list-group-item-action p-3" 
                                 key={index}
                                 onClick={openMessage}>
                                <div class="d-flex flex-row align-items-center" style={{gap:"1rem"}}>
                                    <h6 class="p-0 m-0">{notif.header}</h6>
                                    <div class="vr"></div>
                                    <div class="text-secondary fs-6"><LimitText text={notif.body}/></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;