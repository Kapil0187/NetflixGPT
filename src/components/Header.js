import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate,} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch} from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO,SUPPORTED_LANUAES,USERLOGO} from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
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

  const handleGptSearch = ()=>{
    dispatch(toggleGptSearchView());
  }

  const handlerLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between '>
      <img className='w-44 mx-auto md:mx-0'
        src={LOGO}
        alt='logo'
      />
      {user && 
      <div className='flex md:justify-center justify-between p-2'>
        <ul className='text-white flex items-center'>
          <Link to="/browse"><li className='p-4'>Home</li></Link>
          <Link to="/browse/gptSearch" className='p-4'><li>GPT Search</li></Link>
        </ul>
        {showGptSearch && <select className='p-2 m-2 bg-gray-700 text-white' onChange={handlerLanguageChange}>
          {SUPPORTED_LANUAES.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>}
        <button className='py-2 px-4 mx-4 my-2 bg-green-400 rounded-lg hover:opacity-80'
         onClick={handleGptSearch}>{!showGptSearch?"GPT Search":"Home"}</button>
        <img className="hidden md:inline-block m-2 w-12 rounded-lg" src={USERLOGO} alt='userlogo'></img>
        <button onClick={handleSingOut} className='font-bold text-white p-2'>(Sign out)</button>
      </div>}
    </div>
  )
}

export default Header
