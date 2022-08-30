function SignUpForm() {
    return(
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

export default SignUpForm;