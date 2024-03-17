import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react'
import { checkValidaData } from '../utils/Validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = ()=>{
        
        const message = checkValidaData(email.current.value,password.current.value);
        setErrorMessage(message);

        if(message)
            return;

        if(!isSignInForm){
            // Sign Up 
            createUserWithEmailAndPassword(
                auth, 
                email.current.value,
                password.current.value
            )
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, 
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    const {uid,email,displayName,photoURL }= auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                    navigate("/browse");
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage)
            });
        }
        else{
            // Sign In
            signInWithEmailAndPassword(
                auth, 
                email.current.value,
                password.current.value
            )
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage)
            });
        }
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='bgImage'></img>
        </div>
        <form onSubmit={(e)=>e.preventDefault()}className='w-4/12 absolute p-12 bg-black my-28 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input 
                ref={name}
                type='text'
                placeholder='Full Name' 
                className='p-4 my-4 w-full bg-gray-700'
            />}
            <input 
                ref={email}
                type='text'
                placeholder='Email Addres' 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <input 
                ref={password}
                type='password' 
                placeholder='Password' 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <p className='text-red-700 font-bold text-lg py-2'>{errorMessage}</p>
            <button 
                className='p-4 my-6 bg-red-700 w-full'
                onClick={handleButtonClick}>
                {isSignInForm?"Sign In":"Sign Up"}
            </button>
            <p 
                className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm?"New to Netflix ? Sign Up Now.":"Already registered ? Sign In Now."}
            </p>
        </form>
    </div>
  )
}

export default Login
