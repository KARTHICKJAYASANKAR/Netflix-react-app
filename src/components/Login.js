import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';
import { BG_PIC } from '../utils/constants';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSignInForm , setIsSignInForm] = useState(true)
    const [errorMessage , setErrorMessage] = useState(null)
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm) 
  }

  const handleButtonClick=()=>{

    //validate form data
    //for this i will use a utility (Validate.js)
    const message = checkValidData(email.current.value , password.current.value);
    console.log(message);
    setErrorMessage(message);
    // after validation proceed with sign in sign up

    if(message) return; // getting err msg

    if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    updateProfile(auth.currentUser, {
        displayName: name.current.value, photoURL: USER_AVATAR
      }).then(() => {
        // Profile updated! --- we should update in store also
        // ...
        const {uid , email , displayName , photoURL} = auth.currentUser;
        dispatch(
            addUser({ 
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL,
            })
        );
      }).catch((error) => {
        // An error occurred
        // ...
        setErrorMessage(error.message)
      });
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage("Give valid credentials")
    // ..
  });
    }
    else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("User not found")
        });
    }

  };



  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='filter brightness-50' src={BG_PIC} alt="bg-image"/>
        </div>
        <form  onSubmit={(e)=> e.preventDefault()} className=' absolute my-24 mx-auto right-0 left-0 p-12 bg-black w-3/12 h-3/12 text-white rounded-lg bg-opacity-90'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In" : "Sign Up"}</h1>

{         !isSignInForm?(   <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800 rounded-lg' />):(<></>) }          
         
           <input ref={email} type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-800 rounded-lg' />
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800 rounded-lg' />
            <p className='text-red-500'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 hover:bg-red-800 w-full rounded-md' onClick={handleButtonClick}>{isSignInForm?"Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up" : "Already registered? Sign In"}</p>
        </form>
    </div>
  ) 
}

export default Login