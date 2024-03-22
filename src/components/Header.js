import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate,} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch} from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO,USERLOGO} from '../utils/constants';


const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSingOut = ()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email,displayName,photoURL }= user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    // Unsubscribe when compponent unmounts
    return () => unsubscribe();
  },[])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img className='w-44'
        src={LOGO}
        alt='logo'
      />
      {user && <div className='flex p-2'>
        <img className="w-12" src={USERLOGO} alt='userlogo'></img>
        <button onClick={handleSingOut} className='font-bold text-white p-2'>(Sign out)</button>
      </div>}
    </div>
  )
}

export default Header
