import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Welcome() {
    return(
        <div style={{maxWidth: "100%", height: "100%", margin: "0", padding:"0", }}>  
            <Navbar />
            <div class="px-4 py-5 my-5 text-center" style={{width: "100%"}}>
                <img class="d-block mx-auto mb-4" src="./src/assets/logo.png" alt="" width="100" />
                <h1 class="display-5 fw-bold text-body-emphasis">Welcome to Panimalar's ERP</h1>
                <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Log in to your appropriate accounts</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a href=""><button type="button" class="btn btn-primary">Admin</button></a>
                    <a href=""><button type="button" class="btn btn-success">HOD</button></a>
                    <a href=""><button type="button" class="btn btn-danger">Faculty</button></a>
                    <a href="/student-login"><button type="button" class="btn btn-warning">Student</button></a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;