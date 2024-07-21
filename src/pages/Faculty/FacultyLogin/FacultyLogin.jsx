import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./lstyles.css";

function FacultyLogin() {

    const navigate = useNavigate();

    const testCase = {
        id: "test123",
        pass: "test123"
    }

    const [id, setId] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        if (id === testCase.id && password === testCase.pass) {
            navigate("/faculty-dashboard");
        }
        else if(id !== testCase.id){
            
        }
        else if(id !== testCase.pass){

        }
    };

    const handleRegisterChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div className="log-container">
            <div class="card">
                <div class="card-body m-3 mb-5 mt-5"  
                     style={{width: "fitContent"}}>
                    <div class="d-flex flex-column align-items-center mb-5">
                        <h5 class="card-title fs-1 text-center">Faculty Login</h5>
                        <p class="card-text text-center w-75">Login to access your dashboard and manage your classes</p>
                    </div>
                    <div className="form-field" 
                         style={{display: "flex", justifyContent:"center"}}>
                        <form class="row g-3 needs-validation" 
                              onSubmit={handleSubmit} novalidate>
                            <div class="col-md">
                                <input type="text" 
                                       class="form-control" 
                                       id="validationCustom01" 
                                       placeholder="Staff Id" 
                                       value={id} 
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

export default FacultyLogin;