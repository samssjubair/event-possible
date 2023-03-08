import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Navbar from '../../Home/Navbar/Navbar';
import Footer from '../../Home/Footer/Footer';
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config'
import logo from '../../../Images/logodark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    let history = useHistory();
    let location = useLocation();
    
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
      let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName,email,photoURL} = result.user;
            const newUser={userName: displayName, email,img: photoURL};
            setLoggedInUser(newUser);
            history.replace(from);
            

        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorMessage);
        });

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center mt-5" style={{height: '400px'}}>
                <img src={logo} alt=""/> <br/>
                <h5 className="brand-color mt-5">Login with</h5>
                <button onClick={handleGoogleSignIn} className="btn btn-outline-danger mt-2  py-2"><FontAwesomeIcon style={{fontSize: '1.2rem'}} icon={faGoogle} />&nbsp; <span className="px-5">Continue with Google</span></button>
                <p className="text-secondary mt-3">Don't have an account? <span style={{cursor: 'pointer'}} className="brand-color">Create an account</span></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;