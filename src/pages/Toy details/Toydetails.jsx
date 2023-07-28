import React from 'react';
import { useContext } from 'react';
import Rating from 'react-rating';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';

const Toydetails = () => {

    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
        return <LoadingSpinner />
    }
    const { user } = useContext(AuthContext);
    const toyDetails = useLoaderData()
    console.log(toyDetails);
    const id = useParams()
    console.log(id);

    const [a,seta]=useState()
    useEffect(() => {
        fetch(`http://localhost:5000/alltoys/6467161f5e1c263ba293b6c5`)
            .then((res) => res.json())
            .then((result) => {
                seta(result);
            });
    }, []);
    console.log(a);

    // const { description, photoURL, price, quantity, ratings, sellerName, subCatagory, toyName, _id } = toyDetails

    return (
        <div>
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photoURL} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    {
                        user ? <p>{sellerName}</p> : <></>
                    }
                    <p>Sub-Catagory : {subCatagory}</p>
                    <p>Price : {price}</p>
                    <p>Available Quantity : {quantity}</p>
                    <p>Description : {description}</p>
                    <div className='flex items-center'>
                        <p className='text-lg'>Rating:</p>
                        <Rating style={{ maxWidth: 250 }} value={ratings} readOnly />
                        <span className='font-bold'>
                            {ratings}
                        </span>
                    </div>
                    <div className="card-actions justify-end">


                    </div>
                </div>
            </div> */}
            <p>lorem</p>
        </div>
    );
};

export default Toydetails;