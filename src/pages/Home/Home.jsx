import React from 'react';
import { Link } from 'react-router-dom';
import LatestArticle from '../../Latest Article/LatestArticle';
import Catagory from '../Catagory/Catagory';
import Contact from '../Contact/Contact';
import Notify from '../Notify/Notify';
import Discount from '../Discount/Discount';

const Home = () => {
  
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg?t=st=1684388659~exp=1684389259~hmac=03d9be1ff6aa7195fcffc691e113219b4bc15c9beeb80a099f6d6277a7e4d8b2")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <div data-aos="fade-right">
              <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
            </div>
            <div data-aos="fade-left">
              <p className="mb-5 text-white">Welcome to Delish Food, your ultimate destination for all things delicious! We are a food website dedicated to providing you with mouth-watering recipes, cooking tips, food news, and everything in between. Our team of passionate food lovers is constantly scouring the culinary world to bring you the most scrumptious and innovative recipes, as well as the latest food trends and cooking techniques.</p>
            </div>
            
            <div className='mb-5 text-white data-aos="fade-down"'>
            <h2 className='text-5xl font-bold'>Get Your desire toy easily</h2>
            </div>

          </div>
        </div>
      </div>
      <Catagory></Catagory>
      <LatestArticle></LatestArticle>
      <Notify></Notify>
      <Discount></Discount>
      <Contact></Contact>

    </div>
  );
};

export default Home;