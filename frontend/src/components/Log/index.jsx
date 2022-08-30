// import { useState } from "react";
// import SignInForm from "./SignInForm";
// import SignUpForm from "./SignUpForm";

// // display forms
// function Log( props ) {
//     const [signUpModal, setSignUpModal] = useState(props.signup);
//     const [signInModal, setSignInModal] = useState(props.signin);

//     const handleModals = (e) => {
//         if(e.target.id === "signup") {
//             setSignInModal(false);
//             setSignUpModal(true);        
//         } else if (e.target.id === "login") {
//             setSignInModal(true);
//             setSignUpModal(false);
//         }
//     };

//     return(
//         <div className="connection-form">
//             <div className="form-container">
//                 <ul>
//                     <li onClick={handleModals} id="login" className={signUpModal ? "active-btn" : null}>
//                         Se connecter
//                     </li>
//                     <li onClick={handleModals} id="signup" className={signInModal ? "active-btn" : null}>
//                         S'inscrire
//                     </li>
//                     {signUpModal && <SignUpForm /> }
//                     {signInModal && <SignInForm />}
//                 </ul>
//             </div>
//         </div>
//     )
// };

// export default Log;