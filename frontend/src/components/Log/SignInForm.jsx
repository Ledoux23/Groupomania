import React, { useState, useEffect } from "react";   
import { useNavigate } from "react-router";
import Logo from '../../assets/icon-left-font.png';

function SignInForm() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
   
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {        
            await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",    
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then(function(res) {
                console.log(res);
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(data) {
                console.log("OK")
                if(data !== undefined) {                        
                    // document.location = "./" 
                   navigate("/");
                } else {                                                                
                    alert("Identifiez-vous !")
                }
            })
            .catch(function(err) {
                alert("Une erreur est survenue lors de la requête :" + err);
            });
        }
      
        fetchData();
      
        return;
    }, [navigate]);

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();
        
        // Sent a post request to the login url to check user's presence in the database.
        const user = { ...form };

        await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then((res) => {
            console.log(res);
        })
        .catch(error => {
            window.alert(error);
            return;
        });
    };

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
                        <label htmlFor="email">Email :</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email"
                            value={form.email}
                            onChange={(e) => updateForm({ email: e.target.value })}
                        />
                    </div>
                    <div className="form-group pt-3">
                        <label htmlFor="password">Mot de passe :</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password"
                            value={form.password}
                            onChange={(e) => updateForm({ password: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn btn-danger my-3">Connexion</button>
                </form>                
            </div>
        </div> 
    )
};

export default SignInForm;