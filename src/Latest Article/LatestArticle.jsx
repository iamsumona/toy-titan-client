import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const LatestArticle = () => {
    useEffect(()=>{
        Aos.init({duration : 2000});
    })
    return (
        <div>
            <div className='articles'>
                <div className='text-center font-mono font-bold text-5xl mt-5 '><p>Read Our Latest Articles</p></div>
                <div className='text-center text-xl mb-5'><p>More Articles? <span className='text-green-600'>Visits our Blog</span> </p></div>
                <div className='lg:grid grid-cols-3 lg:ml-10 mb-5'>
                    <div className="card w-96 bg-base-100 shadow-xl" data-aos="zoom-in-up">
                        <figure><img src="https://demo2.madrasthemes.com/uneno/wp-content/uploads/2018/10/Free-To-Be-Kids-Kind-Like-Daddy-credit-Agnes-Teo-370x230.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Fashion for Kids: How Soon Is Too Soon?
                            </h2>
                            <p>In March, Vogue published an article titled “Do Seoul’s Toddlers Have the World’s Most Stylish Hair?” that featured nine street style photographs of the three-feet</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">admin</div>
                                <div className="badge badge-outline">October 11, 2018</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl" data-aos="zoom-in-down">
                        <figure><img src="https://demo2.madrasthemes.com/uneno/wp-content/uploads/2018/10/1148857_658101764200104_1422163820_n-370x230.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                I Want a Peanut Butter and Chocolate Chip Sandwich
                            </h2>
                            <p>When I was a kid, I used to go home after school and have some good ol’ fashioned alone time. I’d call mom, let her know I was safe, and then do kid things.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">admin</div>
                                <div className="badge badge-outline">October 11, 2018</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl" data-aos="zoom-in-left">
                        <figure><img src="https://demo2.madrasthemes.com/uneno/wp-content/uploads/2018/09/D2348-370x230.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                These Impressive Kid Fashion Designers Will Blow You Away
                            </h2>
                            <p>If you think your New Year’s resolutions are lofty, we invite you to meet these young fashion designers. Quietly but confidently, several teens and tweens over</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">admin</div>
                                <div className="badge badge-outline">October 11, 2018</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LatestArticle;