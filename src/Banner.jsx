import React from 'react';

const Banner = () => {
    return (
        <div>
          
           <div className=' lg:flex mb-10'>
             {/* Banner description */}
             <div className=' lg:text-left space-y-5'>
            <h1 className='lg:text-[60px] text-[30px] font-bold'>One Step <br />Closer To Your <br /> <span className='gradient-text lg:text-[60px] text-[30px]' >Dream Job</span></h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='main-btn'>Get Started</button>
            </div>
            {/* Banner Image */}
            <div>
                <img src="../public/images/user.png" alt="" />
            </div>
           </div>
        </div>
    );
};

export default Banner;