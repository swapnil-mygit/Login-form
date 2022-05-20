import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode : 'onTouched'
  });

  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data); 
    navigate("/logindemo")
  }

  return (
    <>
      <div className="loginContainer">
        <div className="titleBar">
          <h4>Ascension Online Care</h4>
        </div>
        <div className='loginForm'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/"><p className='back'><i className="fa-solid fa-arrow-left"></i>Home</p></Link>
            <h1>Log in</h1>
            <div className='inputFields'>
              <p>Email address *</p>
              <input {...register('email', {required: true})} type="email" /><br />
              {errors.email && <p><small className='errorMsg'>*Email address is required</small></p>}
              <a href="/">Forgot your email?</a>
            </div>
            <div className='inputFields'>
              <p>Password *</p>
              <input {...register('password', {required: true})} type="password"/><br />
              {errors.password && <p><small className='errorMsg'>*Password is required</small></p>}
              <a href="/">Forgot password?</a>
            </div>
            <button>LOG IN</button>
            <input {...register('check')} type="checkbox" />
            <span>Remember my username.</span>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
