import React, {useState} from 'react'
import { SiApostrophe } from "react-icons/si";
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import CreatePostModel from './Models/CreatePostModel';
import { getUser, logout } from '../redux/action';
import { imgLink } from '../CommonUrl/URL';
import { ToastContainer, toast } from 'react-toastify';


const NavBar = ({user}) => {
  const dispatch = useDispatch()
  const [isopen,setIsOpen] = useState(false)
  
 /** logout function */
const userLogout = async() =>{
  dispatch(logout)
  toast('Logout Successfully')
  window.localStorage.clear()
 window.location.reload(false)
}

  return (
    <>
<div className='container-fluid m-0 p-0'>
<div className='d-flex flex-row bg-primary justify-content-evenly'>
   <div className='d-flex flex-row'>
   <h1 className='text-white '>{user.user.fullName}</h1>
    <img className='m-2' src={`${imgLink}${user.user.image}`} alt='User Profile Pic' style={{borderRadius:"50%", height:"45px", width:'45px'}}/>

   </div>
       <h2 className='text-black mt-1'>Daily Though</h2>
    <h3 className='addPost' title='Add Post' onClick={() => setIsOpen(true)}><SiApostrophe  title='Add a new Post'  className='mt-3 text-white m-3'/></h3>
    <button className='text-black border-0  p-2' onClick={() => userLogout()}>Logout</button>
 </div>
    <ToastContainer/>
</div>

<CreatePostModel isopen={isopen} setIsOpen={setIsOpen}/>
</>
  )

}

export default NavBar
