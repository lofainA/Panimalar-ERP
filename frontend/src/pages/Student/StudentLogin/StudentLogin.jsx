import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./lstyles.css";

function StudentLogin() {

    const navigate = useNavigate();

    const testCase = {
        reg: "test123",
        pass: "test123"
    }

    const [register, setRegister] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        if (register === testCase.reg && password === testCase.pass) {
            navigate("/student");
        }
        else if(register !== testCase.reg){
            
        }
        else if(register !== testCase.pass){

        }
    };

    const handleRegisterChange = (e) => {
        setRegister(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div className="log-container">
            <div class="card">
                <div class="card-body m-3 mb-5 mt-5"  
                     style={{width: "fitContent"}}>
                    <div style={{paddingBottom: "3rem"}}>
                        <h5 class="card-title fs-1 text-center">Student Login</h5>
                        <p class="card-text text-center">Login and access your dashboard, assignments and more</p>
                    </div>
                    <div className="form-field" 
                         style={{display: "flex", justifyContent:"center"}}>
                        <form class="row g-3 needs-validation" 
                              onSubmit={handleSubmit} novalidate>
                            <div class="col-md">
                                <input type="text" 
                                       class="form-control" 
                                       id="validationCustom01" 
                                       placeholder="Register No." 
                                       value={register} 
                                       onChange={handleRegisterChange} required/>
                                       <div class="valid-tooltip">
                                            Looks good!
                                       </div>
                            </div>
                            
                            <div class="col-md">
                                <input type="text" 
                                       class="form-control" 
                                       id="validationCustom01" 
                                       placeholder="Password"
                                       value={password}
                                       onChange={handlePasswordChange} required/>
                            </div>
                            <button type="submit" 
                                    class="btn btn-primary" 
                                    style={{width: "100px", alignSelf:"center"}}
                                    >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentLogin;