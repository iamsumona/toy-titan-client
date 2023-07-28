import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Mytoys = () => {
    const [mytoys, setMyToys] = useState([])
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/alltoys/${user?.email}`)
            .then((res) => res.json())
            .then((result) => {
                setMyToys(result);
            });
    }, [user]);

    const [latestToys,setLatestToys]=useState(mytoys)


    const deletetoy=(_id)=>{
        fetch(`http://localhost:5000/mytoys/${_id}`,{
            method : "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

            if(data.deletedCount>0){
                toast("Deleted Successfuly")
                const reaminingToys=latestToys.filter(toy=>(toy._id !== _id))
                setLatestToys(reaminingToys)
            }
            });

    }




    return (
        <div>
            <div className='flex justify-end mt-2 mb-4'>
                <select className="select select-success w-full max-w-xs">
                    <option disabled selected>Sort by Price</option>
                    <option>Low to High</option>
                    <option>High to low</option>
                </select>
            </div>


            <div className="overflow-x-auto mt-5 mb-5">
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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mytoys.map((toy, index) =>

                            <tr>
                                <th>{index + 1}</th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.subCategory}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>

                                <td>
                                <Link to={`/mytoys/${toy._id}`}><button className="btn ">Update</button>
                                </Link>
                                </td>

                                <td><Link ><button onClick={()=>{deletetoy(toy._id)}} className="btn ">Delete</button>
                                <ToastContainer />
                                </Link></td>

                            </tr>
                        )}


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Mytoys;