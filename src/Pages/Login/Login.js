import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import googleIcon from "../Home/images/googleIcone.png"
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser)
    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

      useEffect( () =>{
        if ( token ) {
            navigate(from, { replace: true });
        }
    }, [ token,  from, navigate])
     if ( loading || gLoading) {
        return <Loading></Loading>
    } 
    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }
     const onSubmit = data => {
         console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    } 
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl text-orange-800 font-bold">Login</h2>
                    <form  onSubmit={handleSubmit(onSubmit)} >

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full input-accent max-w-xs"
                                 {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })} 
                            />
                            <label className="label">
                                 {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} 
                                 {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} 
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full input-accent max-w-xs"
                                 {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} 
                            />
                            <label className="label">
                                 {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>} 
                            </label>
                        </div>

                        {signInError}
                        <input className='btn btn-accent font-bold text-orange-800  w-full max-w-xs ' type="submit" value="Login" />
                    </form>
                    <p><small>New to Car Parts Manufacturer? <Link className=' text-purple-700 hover:underline font-semibold' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline font-bold "
                    >
                       <img style={{ width: '30px', marginRight:"5px" }} src={googleIcon} alt="" /> 
                        Continue with Google</button>
                </div>
            </div>
        </div >
    );
};

export default Login;