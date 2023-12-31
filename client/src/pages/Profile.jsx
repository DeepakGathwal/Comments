import React,{useContext, useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Postes from './Posts';
import Empty from './empty';
import { getUser } from '../CommonUrl/apis';

const Profile = () => {
 const [users, setuser] = useState([])
  const already = window.localStorage.getItem('Login')


  useEffect(() =>{
    const userData = async() =>{
     const data = await  getUser()
     setuser(data)
   }
    if(already == "true") userData();


  },[already])


  if(users && users.status){
  return (
    <>
    <NavBar  user={users}/>
   <div className='container-fluid bg-light m-0 p-0'>
      <div className='row'>
    <Postes/>
    </div>
    </div>
    </>
  )
}else{
  return (
    <>
    <div className='container-fluid m-0 p-0'>

<div className='d-flex flex-row bg-primary justify-content-evenly'>
<h1 className='text-white'>To add a post you have to ...</h1>
     <div className="div m-3 ">
     <a href='/register' className='text-white p-1 text-decoration-none'>
      Register        
      </a>  
      <small className='p-2'> <b>Or</b> </small>
      <a href='/login' className='text-white p-1 text-decoration-none'>
      Login        
      </a>  
     </div>
   </div>

<Empty/>
</div>
  
    </>
  )
}
}

export default Profile

