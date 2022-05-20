import React from 'react'
import './Signup.css'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode : 'onTouched'
  });

  let navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    navigate("/signupdemo")
  }
  return (
    <>
      <div className="signupContainer">
        <div className="titleBar">
          <h4>Ascension Online Care</h4>
        </div>
        <div className='signupForm'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/"><p className='back'><i className="fa-solid fa-arrow-left"></i>Home</p></Link>
            <h1>Sign up</h1>
            <div className='signupInputFields'>
              <p>First Name *</p>
              <input {...register('firstname', { required: "*First Name is required" })} type="text" /><br />
              {errors.firstname && <p><small className='errorMsg'>{errors.firstname.message}</small></p>}
            </div>
            <div className='signupInputFields'>
              <p>Middle Name *</p>
              <input {...register('middlename', { required: "*Midlle Name is required" })} type="text" /><br />
              {errors.middlename && <p><small className='errorMsg'>{errors.middlename.message}</small></p>}
            </div>
            <div className='signupInputFields'>
              <p>Last Name *</p>
              <input {...register('lastname', { required: "*Last Name is required" })} type="text" /><br />
              {errors.lastname && <p><small className='errorMsg'>{errors.lastname.message}</small></p>}
            </div>
            <div className='signupInputFields'>
              <p>Date of Birth *</p>
              <input {...register('dob', { required: "*Date of Birth is required" })} type="date" /><br />
              {errors.dob && <p><small className='errorMsg'>{errors.dob.message}</small></p>}
            </div>
            <div className='sexInputFields'>
              <p>Biological sex *</p>
              <p><small>Sex assigned at birth</small></p>
              <div className="genders">
                <input {...register('gender', { required: "*Biological sex is required" })} type="radio" id="female" name='gender' value="female" />
                <label htmlFor="female">Female</label><br />
                <input {...register('gender', { required: "*Biological sex is required" })} type="radio" id="male" name='gender' value="male"/>
                <label htmlFor="male">Male</label><br />
                <input {...register('gender', { required: "*Biological sex is required" })} type="radio" id="other" name='gender' value="other"/>
                <label htmlFor="other">Other or unknown</label>
                {errors.gender && <p><small className='errorMsg'>{errors.gender.message}</small></p>}
              </div>
            </div>
            <div className='signupInputFields'>
              <p>Gender (Optional)</p>
              <select {...register('genderOptional')} id="dsd">
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='signupInputFields'>
              <p>State *</p>
              <select  {...register('state', { required: "*State is required" })} name="state" id="state">
                <option value=""></option>
                <option value="maharashtra">Maharashtra</option>
                <option value="haryana">Haryana</option>
                <option value="madhyapradesh">Madhya Pradesh</option>
              </select>
              {errors.state && <p><small className='errorMsg'>{errors.state.message}</small></p>}
            </div>
            <div className='signupInputFields'>
              <p>Zip code *</p>
              <input {...register('zipCode', { required: "*Zip code is required" })} type="number" /><br />
              {errors.zipCode && <p><small className='errorMsg'>{errors.zipCode.message}</small></p>}
            </div>
            <div className='signupInputFields'>
              <p>Email address *</p>
              <input {...register('email', { required: "*Email address is required" })} type="email" /><br />
              {errors.email && <p><small className='errorMsg'>{errors.email.message}</small></p>}
            </div>
            <div className='signupInputFields'>
              <p>Password *</p>
              <input {...register('password', { required: "*Password is required",maxLength:{
                value: 32,
                message : "Maximum 32 characters long"
              },minLength:{
                value: 7,
                message : "At least 7 characters long"
              },
              pattern:{
                value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                message : "*Must have !@#$%^&*()_-, 1 letter and 1 number"
              } })} type="password" /><br />
              {errors.password && <p><small className='errorMsg'>{errors.password.message}</small></p>}
            </div>
            <div className="conditions">
              <p><i className="fa-solid fa-circle-check"></i>At least 7 characters long</p>
              <p><i className="fa-solid fa-circle-check"></i>Maximum 32 characters long</p>
              <p><i className="fa-solid fa-circle-check"></i>Can only have !@#$%^&*()_-</p>
              <p><i className="fa-solid fa-circle-check"></i>Must have 1 letter</p>
              <p><i className="fa-solid fa-circle-check"></i>Must have 1 number</p>
            </div>
            <div className='chekckbox'>
              <input {...register('check', { required: "*Please check and confirm" })} type="checkbox" />
              <span>I agree to the <a href="/">Terms of Use</a>.</span>
              {errors.check && <p><small className='errorMsg'>{errors.check.message}</small></p>}
            </div>
            <button>SIGN UP</button>
            <a href="/"><small>Have an account?</small></a>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
