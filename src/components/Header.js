import React ,{useEffect}from 'react'
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { addUser , removeUser } from "../utils/userSlice";
import { LOGO } from '../utils/constants';
import {USER_AVATAR} from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptslice';
import { changeLanguage } from '../utils/configSlice';



const Header = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const searchGpt = useSelector(store=>store.gpt.showGptSearch)

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid , email , displayName , photoURL} = user;
              // ...update store here
                dispatch(addUser({uid: uid , email: email , displayName: displayName , photoURL : photoURL}));
                navigate("/browse");
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/")
            }
          });

          // unSubscribe when component unmount
          return ()=> unsubscribe();
    },[])

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
          }).catch((error) => {
            // An error happened.
            navigate('/errorpage')
          });
        }

     const handleGptSearchClick = ()=>{
        dispatch(toggleGptSearchView());
     }   

     const handleLanguageChange = (e) =>{
        console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
     }

  return (
    <div className='absolute w-screen overflow-x-hidden px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className="w-44 bg-gradient-to-b from-black" src={LOGO} alt="logo"/>
        {user && (<div className='flex p-3'>
            {
            searchGpt?(<select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
                <option value="en" >English</option>
                <option value="hindi" >Hindi</option>
                <option value="tamil" >Tamil</option>
                <option value="malayalam" >Malayalam</option>
                <option value="telugu" >Telugu</option>
                <option value="marati" >Marati</option>
                <option value="kannada" >Kannada</option>
            </select>):(<></>)
           }
            <button className='text-white bg-red-700 rounded-lg p-4 mr-3 hover:bg-red-800' onClick={handleGptSearchClick}>{searchGpt?"Homepage":"Search"}</button>
            <img className='w-12 h-12' src={USER_AVATAR}/>
            <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>)
        }
    </div>
  )
}

export default Header;
