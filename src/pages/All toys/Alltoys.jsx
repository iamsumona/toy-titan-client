import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
const Alltoys = () => {
    const [alltoys, setAlltoys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/alltoys`)
            .then((res) => res.json())
            .then((result) => {
                setAlltoys(result);
            });
    }, []);
    // console.log(alltoys);
    const [SearchToy,setSearchToy]=useState('')
    console.log(SearchToy);
    return (
        <div>
            <div className="overflow-x-auto">
                <div className='flex justify-end items-end'>
                    <div className="form-control w-80 mt-3 mb-3 ">
                        
                        <div className="relative">
                            <input onChange={(event)=>setSearchToy(event.target.value)} type="text" placeholder="Type Toy Name Here" className="input input-bordered w-full pr-16" />
                            <button  className="btn btn-outline absolute top-0 right-0 rounded-l-none">Search toy</button>
                        </div>
                    </div>

                </div>

                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th> Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {alltoys.map((toy, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.subCategory}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>

                                <td><Link to={`/alltoys/${toy._id}`}><button className="btn ">Details</button>
                                </Link></td>

                            </tr>
                        )}


                    </tbody>
                </table>
            </div>
            {/* <div className=''>
            {
      alltoys.map((toy)=><ToyCard key={toy._id}
        toy={toy}
         
         ></ToyCard>)
    }

            </div> */}


        </div>
    );
};

export default Alltoys;