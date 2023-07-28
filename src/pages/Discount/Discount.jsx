import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Discount = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    })
    return (
        <div>
            <div>
                <div className=" mt-5">
                    <div className=" text-center">
                        <div className="" data-aos="flip-up">
                            <h1 className="text-5xl font-bold">15% Discount
                                On <br /> All Kid's Education Toys</h1>
                        </div>
                        <div data-aos="flip-down">
                            <h1 className='font-bold text-3xl mt-5'>Offer Expires on 05 days</h1>
                        </div>

                    </div>
                    <div className='flex items-center justify-center ' data-aos="zoom-in-up">
                        <div className="form-control w-80 mb-5 mt-5">
                            <button className='btn btn-outline'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;