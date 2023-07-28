import React from 'react';

const Notify = () => {
    return (
        <div>
            <div className='notify me '>
                <div className='text-center'>
                    <p className='font-bold text-3xl'>left <span className='font-bold text-green-600 text-9xl'>09</span> days </p>
                    <p className='mt-7 font-bold font-serif mb-5'>We’re working on a new and exciting product that we think you’ll really like! <br></br> Enter your email address to be the fisrt to know when we lauch it..</p>
                </div>
                <div className='flex items-center justify-center '>
                    <div className="form-control w-80 mb-5">
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Notify me</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Notify;