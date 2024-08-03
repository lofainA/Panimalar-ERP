import React, { useState, useRef, useEffect } from "react";

import FacultySidebar from "../../../components/Faculty/Sidebar/FacultySidebar";
//import './styles.css';

function Attendance () {

    const [fetchUserId, setFetchUserId] = useState("");

    const tableHeader = "";

    const classroom = {
        dept: "CSE",
        section: "A"
    };

    useEffect(() => {
        console.log(fetchUserId)
    },[fetchUserId])

    const fetchRecords = async () => {
        console.log("entered fetchRecords");
        
        fetch(`/attendance_records/${fetchUserId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(records => {
            console.log(records);
            console.log("entered then");
            const table = document.getElementById('records-table');
            table.innerHTML = '<tr><th>User ID</th><th>Date</th><th>Status</th><th>Remarks</th></tr>';
            records.forEach(record => {
                const row = table.insertRow();
                row.insertCell(0).textContent = record.user_id;  // Use user_id instead of id
                row.insertCell(1).textContent = record.date;
                row.insertCell(2).textContent = record.status;
                row.insertCell(3).textContent = record.remarks;
            });
            })
        .catch(error => console.error('Error:', error));
    };

    return(
        <div class="d-flex justify-content-start margin-0 padding-0 w-100">
            <div class="w-100 d-flex flex-column align-items-center w-100 h-100 p-4">
                <div class="align-self-start w-100 px-2 mb-3">
                    <h2 class="">{classroom.dept}-{classroom.section} Attendance</h2>
                    <hr/>
                </div>
                <form id="attendance-form">
                    <div class="mb-2">
                        <label for="user-id" class="form-label">User ID:</label>
                        <input type="text" 
                               class="form-control" 
                               id="user-id" 
                               required pattern="[A-Za-z0-9]+"
                               />
                    </div>
                    <div class="mb-2">
                        <label for="date" class="form-label">Date:</label>
                        <input type="date" class="form-control" id="date" required/>
                    </div>
                    <div class="mb-2">
                        <label for="status" class="form-label">Status:</label>
                        <select id="status" class="form-select">
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                            <option value="late">Late</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label for="remarks" class="form-label">Remarks:</label>
                        <input type="text" id="remarks" class="form-control"/>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </form>
                <div class="mt-4 d-flex flex-column justify-content-center align-items-center w-100" style={{gap: "3rem"}}>
                    <div class="input-group my-3 w-50" style={{maxWidth: "30rem"}}>
                        <input type="text" 
                               class="form-control" 
                               placeholder="User Id" 
                               onChange={(e) => setFetchUserId(e.target.value)}/>
                        <button class="btn btn-success" onClick={fetchRecords}>Fetch Records</button>
                    </div>
                    <table id="records-table" class="table">
                        
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Attendance;