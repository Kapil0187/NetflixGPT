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
import { toggleGptSearchView } from '../utils/gptSlice';
import { Link } from 'react-router-dom';

const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

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
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between '>
      <Link to="/browse"><img className='w-44 mx-auto md:mx-0'
        src={LOGO}
        alt='logo'
      /></Link>
      {user && 
      <div className='flex font-bold md:justify-center justify-between p-2'>
        <ul className='text-white flex items-center'>
          <Link to="/browse" className='p-4'><li>Home</li></Link>
          <Link to="/browse/gptSearch" className='p-4'><li>GPT Search</li></Link>
          <Link to="/browse/Movies" className='p-4'>Movies</Link>
        </ul>
        <img className="hidden md:inline-block m-2 w-12 rounded-lg" src={USERLOGO} alt='userlogo'></img>
        <button onClick={handleSingOut} className='font-bold text-white p-2'>(Sign out)</button>
      </div>}
    </div>
  )
}

export default Header
