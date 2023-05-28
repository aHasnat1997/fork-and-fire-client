import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contextProvider/AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { registerUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    // console.log(data);
    const { name, photo, email, password } = data;
    registerUser(email, password)
      .then(result => {
        const createdUser = result.user;
        updateUser(createdUser, name, photo)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Register 🎉',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/login');
        console.log(result);
      })
      .catch(error => console.log(error))
  };

  return (
    <div className='bg-base-200 min-h-screen'>
      <Link to='/' className="py-6 text-2xl md:text-4xl flex justify-center items-center font-extrabold">
        <img className='w-6 md:w-8' src={logo} alt="logo" />
        <span className='text-white'>
          Fork<span className='text-primary'>&</span>Fire
        </span>
      </Link>
      <div className="max-w mt-4">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input {...register("name")} type="text" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input {...register("photo")} type="url" placeholder="photo url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <span>Already have any account? <Link to='/login' className='underline text-accent'>Log In</Link></span>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='Login' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
