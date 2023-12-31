import React,{useState, useEffect} from 'react'
import {Form} from  'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getUser, register } from '../../CommonUrl/apis'
import { ToastContainer, toast } from 'react-toastify';


const Registration = () => {
    const navigate = useNavigate()
    
    const [inpots, setInputs] = useState({
        fullName: "",  email: "",  password: "",  phone: ""
    })
    const already = window.localStorage.getItem('Login')
/** condition to show register page */
    useEffect(() =>{
        if(already == true)
           navigate('/')
       
         },[already])
  
    const [img,setImg] = useState([])
 
    
    const handelChange = async (e) => {
        setInputs({ ...inpots, [e.target.name]: e.target.value })
    }
  const handelImage = async(e) =>{
        setImg(e.target.files[0])
    }

    /** handel form */
    const userData = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append ("fullName",inpots.fullName)
        formData.append ("phone",inpots.phone)
        formData.append("email",inpots.email)
        formData.append ("password",inpots.password)
        formData.append ("photo",img)
        const data = await register(formData)
        if(data.success == true){
            toast(data.message)
          await getUser()
            navigate('/')
           return window.localStorage.setItem("Login",data.success)
        }
    }

  
const relocate =() => {
    navigate('/login')
}

    return (
        <div className='container-fluid bg-primary p-3'>
        <div className='d-flex justify-content-center flex-column bg-white m-5 p-5 rounded'>
            <h1 className='text-black text-center p-2'>Register</h1>
            <form onSubmit={userData}>
                <Form.Control
                    className='form-control border border-warning  mt-4 p-3 '
                    type="file"
                    placeholder='Photo'
                    name='photo'
                    onChange={(e) => handelImage(e)} />
                <Form.Control
                    className='form-control  border border-warning  mt-4 p-3 '
                    type="text"
                    placeholder='Enter Your Full Name'
                    name='fullName'
                    value={inpots.fullName}
                    onChange={handelChange} />
               
                <Form.Control
                    className='form-control border border-warning mt-4 p-3'
                    type="email"
                    placeholder='Enter Your Email'
                    name='email'
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    aria-describedby="emailHelp"
                    value={inpots.email}
                    onChange={handelChange} />
                <Form.Control
                    className='form-control border border-warning  mt-4 p-3 '
                    type="password"
                    aria-describedby="passwordHelpBlock"
                    placeholder='Enter Your Password'
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                    name='password'
                    value={inpots.password}
                    onChange={handelChange}
                />
                <Form.Control
                    className='form-control border border-warning  mt-4 p-3 '
                    type="num"
                    placeholder='Enter Phone Number'
                    // pattern='[0-9]{10}'
                    name='phone'
                    value={inpots.phone}
                    onChange={handelChange}
                />
                <Form.Control className="blockquote m-5 p-3  text-white text-center bg-primary ms-auto hover-zoom" type='submit' value="Register" />
            </form>
            <button className=' text-white border-0 rounded-pill bg-primary text-center p-2' onClick={() => relocate()} >A have Already a <b>Account</b> </button>


        </div>
        <ToastContainer/>
        </div>
    )
}

export default Registration
