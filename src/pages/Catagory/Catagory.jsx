import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Rating from 'react-rating';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
const Catagory = () => {
  const { user } = useContext(AuthContext);
  const [alltoys, setAlltoys] = useState([])
  const [cseKits, setCSEKits] = useState([])
  const [CIVILKits, setCIVILKits] = useState([])
  const [EEEKits, setEEEKits] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/`)
      .then((res) => res.json())
      .then((result) => {
        setAlltoys(result);

      });
  }, []);
  // console.log(alltoys)

  const handleCseKits = () => {
    const cseData = alltoys.filter((item) => item.subCategory == "CSE");
    setCSEKits(cseData)
  }


  const handleCivilKits = () => {
    const civilData = alltoys.filter((item) => item.subCategory == "CIVIL");
    setCIVILKits(civilData)
  }
  const handleEeeKits = () => {
    const eeeData = alltoys.filter((item) => item.subCategory == "EEE");
    setEEEKits(eeeData)

  }


  return (
    <div>

      <div><h2 className='font-bold text-2xl text-red-500 text-center mt-2 mb-2'>Visit by Catagory. Click the section </h2></div>

      <Tabs>
        <TabList className="flex items-center gap-10 justify-center cursor-pointer border-red-500 border-2 mb-3">
          <Tab className="p-4" onClick={handleCseKits}>CSE toys</Tab>
          <Tab className="p-4" onClick={handleCivilKits}>CIVIL toys</Tab>
          <Tab className="p-4" onClick={handleEeeKits}>EEE toys</Tab>

        </TabList>

        <TabPanel>
         
          <div className='grid grid-cols-3'>
            {
              cseKits.map((kit) =>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><img src={kit.photoURL} /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Toy Name : {kit.toyName}</h2>
                    <p>Price : {kit.price}</p>
                    <div className='flex items-center'>
                      <p className='text-lg'>Rating:</p>
                      <Rating style={{ maxWidth: 250 }} value={kit.ratings} readOnly />
                      <span className='font-bold'>
                        {kit.ratings}
                      </span>
                    </div>
                    <div className="card-actions justify-start">
                      <Link to={`/${kit._id}`}><button className="btn btn-outline ">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )

            }
          </div>

        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-3'>
            {
              CIVILKits.map((kit) =>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><img src={kit.photoURL} /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Toy Name : {kit.toyName}</h2>
                    <p>Price : {kit.price}</p>

                    <div className='flex items-center'>
                      <p className='text-lg'>Rating:</p>
                      <Rating style={{ maxWidth: 250 }} value={kit.ratings} readOnly />
                      <span className='font-bold'>
                        {kit.ratings}
                      </span>
                    </div>
                    <div className="card-actions justify-start">
                      <Link to={`/${kit._id}`}><button className="btn btn-outline ">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )

            }
          </div>
        </TabPanel>
        <TabPanel>
          {/* <p> eee kits legth : {EEEKits.length}</p> */}
          <div className='grid grid-cols-3'>
            {
              EEEKits.map((kit) =>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><img src={kit.photoURL} /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Toy Name : {kit.toyName}</h2>
                    <p>Price : {kit.price}</p>
                    <div className='flex items-center'>
                      <p className='text-lg'>Rating:</p>
                      <Rating style={{ maxWidth: 250 }} value={kit.ratings} readOnly />
                      <span className='font-bold'>
                        {kit.ratings}
                      </span>
                    </div>
                    <div className="card-actions justify-start">
                      <Link to={`/${kit._id}`}><button className="btn btn-outline ">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )

            }
          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default Catagory;