import React, { useContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/Firebase.init';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {
    const { registerUser, displayURl } = useContext(AuthContext);
    const auth = getAuth(app)
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [photourl, setPhotoURL] = useState("");
    // const [displayname, setDisplayname] = useState("");

    const handleRegistration = (event) => {

        console.log('Clicked on Sin up');

        event.preventDefault();

        if ((name, email, password, photourl)) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    displayURl(photourl, name)
                        .then(() => {
                            console.log("profile updated")
                        })
                        .catch((error) => {
                            console.log(error.message);
                            setError(error.message)
                        })
                    setSuccess('User created Successfuly')
                    setError('')

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    setError(errorMessage)

                });
        }

    };


    return (
        <div className='flex items-center justify-center mt-5 mb-5'>
            <div className="flex items-center justify-center">
                <div className="m-auto w-96">

                    <form className="bg-white rounded-lg px-8 py-10 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="useremail">
                                User Name
                            </label>
                            <input onChange={(e) => setName(e.target.value)}
                                className=" form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" name='name'
                                type="text"
                                placeholder="Enter your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="useremail">
                                User Email
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)}
                                className=" form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" name='email'
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input onChange={(e) => setPassword(e.target.value)}
                                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" password='password'
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Photo Url
                            </label>
                            <input onChange={(event) => setPhotoURL(event.target.value)}
                                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="url" password='url' value={photourl}
                                type="url"
                                placeholder="Enter your Photo URL"
                            />
                        </div>
                        <p className='mt-2 mb-2 text-orange-500'>{error}</p>
                        <p className='mt-2 mb-2 text-green-500'>{success}</p>
                        <div className="flex items-center justify-between">
                            <button onClick={handleRegistration}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign Up
                            </button>


                            <Link className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
                                Forgot Password?
                            </Link>
                        </div>
                        <p className='mt-2 mb-2 text-green-500'>{success}</p>
                    </form>
                    <p className="text-center text-lg">
                        Already have an account?{' '}
                        <Link to='/signIn' className="font-bold hover:underline" href="#">
                            Sign in
                        </Link>
                    </p>
                </div>
                <div className="text-center lg:text-left px-10">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="text-5xl font-bold">Save Toy!</p>
                </div>
            </div>
        </div>
    );
};


export default Register;