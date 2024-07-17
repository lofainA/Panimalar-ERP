import { useState } from "react";
import "./styles.css";

function StudentLogin() {

    const [register, setRegister] = useState();
    const [password, setPassword] = useState();

    return(
        <div className="container">
            <div class="card w-50">
                <div class="card-body m-3 mb-5 mt-5"  style={{width: "fitContent"}}>
                    <h5 class="card-title fs-1 text-center">Student Login</h5>
                    <p class="card-text text-center">Login and access your materials and assignments</p>
                    <div className="form-field" style={{display: "flex", justifyContent:"center"}}>
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md">
                                <label for="validationCustom01" class="form-label">Register No</label>
                                <input type="text" class="form-control" id="validationCustom01" required/>
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <div class="col-md">
                                <label for="validationCustom01" class="form-label">Password</label>
                                <input type="text" class="form-control" id="validationCustom01" required/>
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary" style={{width: "100px", alignSelf:"center"}}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentLogin;