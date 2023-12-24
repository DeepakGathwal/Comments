import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { getUser, login } from '../../CommonUrl/apis'

const Login = () => {
    const navigate = useNavigate()
    const [inpots, setInputs] = useState({
     email: "",  password: ""
    })
    const already = window.localStorage.getItem('Login')
/** condition to show login page */
  useEffect(() =>{
 if(already == true)
    navigate('/')

  },[already])
    

   
    const handelChange = async (e) => {
        setInputs({ ...inpots, [e.target.name]: e.target.value })
    }
    // Login Function
    const userLogin = async (e) => {
        e.preventDefault()
        const data = await login(inpots)
        if(data.success == true){
            toast(data.message)
          await getUser()
            navigate('/')
           return window.localStorage.setItem("Login",data.success)
        }else  if(data.success == false){
            toast(data.message)
        }
    
    }
   
    // If Login or Regsitation Success then it will navigate on nextPage
  
const relocate =() => {
    navigate('/register')
}
    return (
        <div className='container-fluid bg-primary p-3'>
        <div className='d-flex justify-content-center flex-row bg-white m-5 p-5 rounded'>
            <h1 className='text-black text-center p-5'>Login</h1>
            <form onSubmit={userLogin}>
                <input
                    className='form-control border border-warning  mt-4 p-2'
                    type="email"
                    placeholder='Enter Your Email'
                    name='email'
                  
                    aria-describedby="emailHelp"
                    value={inpots.email}
                    onChange={handelChange} />
                <input
                    className='form-control border border-warning mt-4 p-2 '
                    type="password"
                    aria-describedby="passwordHelpBlock"
                    placeholder='Enter Your Password'
            
                    name='password'
                    value={inpots.password}
                    onChange={handelChange}
                />
                <input className=" blockquote m-5 p-3 rounded-pill toast-header text-white bg-primary ms-auto hover-zoom" type='submit' value="Login" />

            </form>
        <ToastContainer/>
        </div>
        <button className='pe-auto text-black border-0 rounded-pill bg-white text-center p-2' onClick={() => relocate()} >Create Profile</button>
        </div>
    )
}

export default Login