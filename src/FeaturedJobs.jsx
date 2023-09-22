import React, { useEffect, useState } from 'react';
import Job from './Job';

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);

    const [dataLength,setDataLength] = useState(4)



    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
  
    return (
        <div>
              <div className=' text-center mb-6 space-y-5 mt-22'>
                <h2 className=' font-bold text-5xl'>Featured Jobs </h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=' '>
            <div className=' grid lg:grid-cols-2 gap-6 grid-cols-1 w-11/12 mx-auto'>
                {  
                    jobs.slice(0,dataLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`flex justify-center my-10 ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={()=>setDataLength(jobs.length)} className='main-btn py-[19px] px-[28px]'>See All Jobs</button>
            </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;