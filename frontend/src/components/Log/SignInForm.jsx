// import React, { useState } from "react";    // , useEffect
// import axios from "axios";

function SignInForm() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // useEffect(() => {
    //     fetch(`http://localhost:5000/api/user/login`, {
    //         method: "POST",    
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(email, password),
    //     })
    //     .then(function(res) {
    //         console.log(res);
    //         if (res.ok) {
    //             return res.json();
    //         }
    //     })
    //     .then(function(data) {
    //         console.log("OK")
    //         if(data !== undefined) {                        
    //             document.location = "./" 
    //         } else {                                                                
    //             alert("Identifiez-vous !")
    //         }
    //     })
    //     .catch(function(err) {
    //         alert("Une erreur est survenue lors de la requête :" + err);
    //     });
    // }, []);

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     const emailError = document.querySelector(".email.error");
    //     const passwordError = document.querySelector(".password.error");
    
    //     axios({
    //         method: "post",
    //         url: `${process.env.REACT_APP_API_URL}api/user/login`,
    //         // url: `http://localhost:5000/api/user/login`,
    //         withCredentials: true,
    //         data: {
    //             email,
    //             password,
    //         },
    //     })
    //       .then((res) => {
    //         console.log(res);
    //         if (res.data.errors) {
    //             emailError.innerHTML = res.data.errors.email;
    //             passwordError.innerHTML = res.data.errors.password;
    //         } else {
    //             window.location = "/";
    //         }
    //       })
    //       .catch((err) => {
    //             console.log(err);
    //       });
    // };

    return(
        // <form action="" onSubmit={handleLogin} id="sign-up-form">
        //     <label htmlFor="email">Email</label>
        //     <br />
        //     <input
        //         type="text"
        //         name="email"
        //         id="email"
        //         onChange={(e) => setEmail(e.target.value)}
        //         value={email}
        //     />
        //     <div className="email error"></div>
        //     <br />
        //     <label htmlFor="password">Mot de passe</label>
        //     <br />
        //     <input
        //         type="password"
        //         name="password"
        //         id="password"
        //         onChange={(e) => setPassword(e.target.value)}
        //         value={password}
        //     />
        //     <div className="password error"></div>
        //     <br />
        //     <input type="submit" value="Se connecter" />
        // </form>
        <div className="container">   
            <div className="row"> 
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label for="email">Email :</label>
                            <input type="text" className="form-control" id="email"/>
                        </div>
                        <div className="form-group">
                            <label for="password">Mot de passe :</label>
                            <input type="password" className="form-control" id="password"/>
                        </div>
                        <button type="submit" className="btn btn-secondary">Valider</button>
                    </form>
                </div>
            </div>
        </div> 
    )
};

export default SignInForm;