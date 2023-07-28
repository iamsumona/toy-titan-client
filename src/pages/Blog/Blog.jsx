import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();

    return (
        <div className='px-8 py-4  font-family: sans-serif;
        text-align: center;'>


            <div >
                <p className='font-bold text-2xl text-center'> Question & Ans</p>

                <p className='font-bold text-2xl '>-- What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p className='text-2xl ml-6'></p>
                <p className='font-bold text-2xl'>-- Compare SQL and NoSQL databases?</p>
                <p className='text-2xl ml-6'></p>
                <p className='font-bold text-2xl'>-- What is express js? What is Nest JS? </p>
                <p className='text-2xl ml-6'></p>
                <p className='font-bold text-2xl'>-- What is MongoDB aggregate and how does it work?</p>
                <p className='text-2xl ml-6'></p>

            </div>


        </div>
    );
};

export default Blog;