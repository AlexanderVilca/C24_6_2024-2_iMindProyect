import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../config'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthContext.jsx'
import  HashLoader  from 'react-spinners/HashLoader.js'

const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext)

  const handleInputChange = e => {
    setFormData({...formData, [e.target.name]:e.target.value});
  }

  const submitHandler = async event => {
    event.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await res.json()

      if(!res.ok){
        throw new Error(result.message);
      }

      dispatch({
        type:'LOGIN_SUCCESS',
        payload:{
          user:result.data,
          token:result.token,
          role: result.role,
        }
      })

      console.log(result, "login data")

      setLoading(false)
      toast.success(result.message)
      navigate('/home')



    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }

  return (
    <section className='px-5 lg:px-0'>
    <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md
     md:p-10'>
      <h3 className='text-headingColor text-[22px] leading-9
      font-bold mb-10 text-center'>Hola!
      <span className='text-primaryColor'> Bienvenido </span></h3>
      <form className='py-4 md:py-0' onSubmit={submitHandler}>
        <div className='mb-5'>
          <input type="email" name="email" placeholder='Correo Electronico'
          value={formData.email} onChange={handleInputChange} required
          className='w-full py-3 border-b border-solid border-[#0066FF61]
          focus:outline-none focus:border-b-primaryColor text-[16px] leading-7
          text-headingColor placeholder:text-textColor rounded-md cursor-pointer'/>
        </div>

        <div className='mb-5'>
          <input type="password" name="password" placeholder='Contraseña'
          value={formData.password} onChange={handleInputChange} required
          className='w-full py-3 border-b border-solid border-[#0066FF61]
          focus:outline-none focus:border-b-primaryColor text-[16px] leading-7
          text-headingColor placeholder:text-textColor rounded-md cursor-pointer'/>
        </div>

        <div className="mt-7">
          <button type='submit' className='w-full bg-primaryColor text-white text-[18px]
          leading-[30px] rounded-lg px-4 py-3'>{ loading ? <HashLoader size={25} color="#fff" /> : 'Iniciar Sesión'}</button>
        </div>

        <p className='mt-5 text-textColor text-center'>
          ¿No tienes una cuenta? <Link to='/register' className='text-primaryColor
          font-medium ml-1'>Resgistrate</Link>
        </p>

      </form>
    </div>
  </section>
  )
}

export default Login