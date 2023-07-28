import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [userName, setUserName] = useState('');
    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error.message);
            });
    }

    const onMouseOver = () => {
        console.log(user.displayName);
        setUserName(user.displayName)
    }

    return (

        <div>

            <div className="navbar bg-orange-300 px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Home</NavLink></li>
                            <li><NavLink to='/alltoys' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>All Toys</NavLink></li>
                            <li tabIndex={0}>
                                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Blog</NavLink>
                            </li>
                            {
                                user ?
                                    <>
                                        <li><NavLink to='/mytoys' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>My Toys</NavLink></li>
                                        <li><NavLink to='/addatoy' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Add a Toy</NavLink></li>
                                    </>
                                    : <></>
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Toy-Titans.</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Home</NavLink></li>
                        <li><NavLink to='/alltoys' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>All Toys</NavLink></li>
                        <li tabIndex={0}>
                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Blog</NavLink>
                        </li>

                    </ul>
                </div>
                <div >
                    {
                        user ? <>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                    <li><NavLink to='/mytoys' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>My Toys</NavLink></li>
                                    <li><NavLink to='/addatoy' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Add a Toy</NavLink></li>

                                </ul>
                            </div>


                            <div className="dropdown dropdown-end navbar-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div onMouseOver={onMouseOver} className="w-10 rounded-full">
                                        <img src={user?.photoURL} title={userName} />

                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                    <li><Link onClick={handleLogout}>Logout</Link></li>
                                </ul>
                            </div></> : <> <Link to='/signIn'><button className="btn btn-outline btn-success">Sign in</button></Link></>
                    }



                </div>
            </div>


        </div>



    );
};

export default Header;