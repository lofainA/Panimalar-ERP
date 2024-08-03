import { useState } from "react";
import StudentSidebar from "../../../components/Student/Sidebar/StudentSidebar";

import LimitText from "../../../assets/LimitText/LimitText";
import notifications from './notifications.json';

function Notifications() {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredNotifications = notifications.notifs.filter((notif) =>
        notif.header.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notif.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notif.date.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const openMessage = () => {
        console.log("modal reached");
    };  

    return(
        <div className="container">
            <div class="d-flex flex-column justify-content-center w-100 m-4 mx-5" style={{height: "fit-content"}}>
                <div class="input-group mb-5 w-75 align-self-center">
                    <input type="text" class="form-control" 
                           placeholder="Search keyword ...." 
                           aria-label="Search"
                           onChange={handleSearchChange} />
                    <button class="btn btn-primary d-flex g-3" style={{gap:".5rem"}} type="button" id="button-addon2">
                        <i class="bi bi-search"/>
                    </button>
                </div>
                <div class="card w-100 h-100">
                    <div class="list-group">
                        <div class="list-group-item list-group-item-action bg-body-secondary">
                            <div class="d-flex w-100 justify-content-between align-items-center">
                                <h4 class="p-1 mb-1">Messages</h4> 
                            </div>
                        </div>
                        {filteredNotifications.map((notif, index) => (
                            <div>
                                <div class="list-group-item list-group-item-action p-2 px-3" 
                                     data-bs-toggle="modal" data-bs-target={`#`+ index}
                                     key={index}
                                     onClick={openMessage}>
                                    <div class="d-flex flex-row justify-content-between align-items-center" style={{gap:"1rem"}}>
                                        <h6 class="p-0 m-0">{notif.header}</h6>
                                        
                                        <LimitText text={notif.body}/>
                                        
                                        <div class="text-body-tertiary">{notif.date}</div>
                                    </div>
                                </div>
                                <div class="modal fade" id={index} tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">{notif.header}</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            {notif.body}
                                        </div>
                                        <div class="modal-footer d-flex justify-content-between">
                                            <div class="text-secondary ps-2">{notif.date}</div>
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
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