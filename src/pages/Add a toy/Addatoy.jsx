import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../provider/AuthProvider';

const Addatoy = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = (data) => {


        fetch("http://localhost:5000/addatoy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
        console.log(data);
    };


    return (
        <div className='flex justify-center items-center w-full bg-orange-400'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='lg:flex gap-4' >
                    <div className='flex gap-4 mt-5'>
                        <label className="block text-gray-700 font-bold mb-2 " htmlFor="Toy Name">
                            Toy Name
                        </label>

                        <input className=' text-input w-full max-w-xs bg-white  rounded' defaultValue="" {...register("toyName", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className='flex gap-4 mt-5'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="Seller Name">
                            Seller Name
                        </label>
                        <input
                            className="text-input w-full max-w-xs bg-white rounded"
                            defaultValue={"oit"}
                            value={user?.displayName}
                            {...register("sellerName")}
                            placeholder="Your Name"
                            type="text"
                        />
                    </div>
                </div>

                <div className='lg:flex gap-4'>
                    <div className='flex gap-4 mt-5'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="rounded text-input w-full max-w-xs bg-white"
                            defaultValue={user?.email}
                            value={user?.email}
                            {...register("sellerEmail")}
                            placeholder="your email"
                            type="email"
                        />
                    </div>
                    <div className='flex gap-4 mt-5'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="details">
                            Details
                        </label>
                        <input className='rounded w-full max-w-xs bg-white' defaultValue="" {...register("description", { required: true })} />
                    </div>
                </div>

                <div className='lg:flex gap-4'>
                    <div className='flex gap-4 mt-5'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                            Quantity
                        </label>
                        <input className='w-full max-w-xs bg-white rounded' defaultValue="" {...register("quantity", { required: true })} />
                    </div>
                    <div className='flex gap-4 mt-5'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
                            Price
                        </label>
                        <input className='w-full max-w-xs bg-white rounded' defaultValue="" {...register("price", { required: true })} />
                    </div>
                </div>
                <div className='lg:flex gap-4'>
                    <div className='flex gap-4 mt-5'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                            Ratings
                        </label>
                        <input className='text-input w-full max-w-xs bg-white rounded' defaultValue="" {...register("ratings", { required: true })} />
                    </div>
                    <div className='flex gap-4 mt-5'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="ratings">
                            Image Url
                        </label>
                        <input
                            className="text-input w-full max-w-xs bg-white rounded"
                            {...register("photoURL", { required: true })}
                            placeholder="image link"
                            type="url"
                            defaultValue=""
                        />
                    </div>
                </div>
                <div className='flex gap-4 mt-5'>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="                    Catagory">
                        Catagory
                    </label>
                    <select {...register("subCatagory", { required: true })}>
                        <option className='w-full max-w-xs bg-white' value="CSE">CSE</option>
                        <option className='w-full max-w-xs bg-white' value="CIVIL">CIVIL</option>
                        <option className='w-full max-w-xs bg-white' value="EEE">EEE</option>
                        <option className='w-full max-w-xs bg-white' value="MECHANICAL">MECHANICAL</option>

                    </select>
                </div>
                <div className=' mt-5 mb-3'>

                    <input className='cursor-pointer w-full max-w-xs bg-white rounded-t p-2' type="submit" />
                </div>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}



            </form>

        </div>
    );
};

export default Addatoy;