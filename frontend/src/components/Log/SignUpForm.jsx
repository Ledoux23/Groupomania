import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from '../../assets/icon-left-font.png';

function SignUpForm() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
 
    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();
    
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newUser = { ...form };
    
        await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        
        setForm({ email: "", password: "" });
        navigate("/");
    }

    return(
        <div className="container">   
            <div className="row">                 
                <nav className="col navbar navbar-expand-lg navbar-dark bg-danger px-3">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} width="100"  height="80" alt="Groupomania logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">                          
                            <li className="nav-item">
                                <a className="nav-link" href="/">Accueil</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <form onSubmit={onSubmit}>
                    <div className="form-group pt-3">
                        <label htmlFor="email">Email </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email"
                            value={form.email}
                            onChange={(e) => updateForm({ email: e.target.value })}
                        />
                    </div>
                    <div className="form-group pt-3">
                        <label htmlFor="password">Mot de passe </label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password"
                            value={form.password}
                            onChange={(e) => updateForm({ password: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn btn-danger my-3">Inscription</button>
                </form>          
            </div>
        </div> 
    )
};

export default SignUpForm;