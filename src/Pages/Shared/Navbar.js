import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CarMLogo from "../Home/images/CarMLogo.webp"
import userImg from "../Home/images/userImg.jpg"
import Loading from './Loading';


const Navbar = () => {

    const [user,loading] = useAuthState(auth);
    if(loading){
        <Loading></Loading>
    }

     const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }; 

    const menuItems = <>
        <li><Link to="/"><button className="font-semibold hover:text-orange-800 ">Home</button></Link></li>
        <li><Link to="/carPartsItems"><button className="font-semibold hover:text-orange-800">Purchase</button></Link></li>
       
        <li><Link to="/blog"><button className="font-semibold hover:text-orange-800">Blogs</button></Link></li>
        <li><Link to="/my_portfolio"><button className="font-semibold hover:text-orange-800">My_Portfolio</button></Link></li>
        {
            user && <li><Link to="/dashboard"> <button className="font-semibold hover:text-orange-800">Dashboard</button> </Link></li>
        }    
        <li>{user ? <button className="btn btn-ghost font-semibold  hover:text-orange-800 " onClick={logout} >Sign Out</button> : <Link to="/Login"><button className="font-semibold hover:text-orange-800">Login</button></Link>}</li>    
        {
           
            user && <li><button className="font-bold text-orange-900 "><img style={{width:"24px",
            height:"24px"}} src={userImg} alt="" />{user?.displayName}</button></li>
        }
          
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className="w-10 rounded mr-4" src={CarMLogo} alt="" /> <span className=" text-purple-800 font-bold "> Car <span className=" text-orange-800 ">Parts</span> Manufacturer</span>
                   </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;