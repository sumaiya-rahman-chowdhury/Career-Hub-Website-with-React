/* eslint-disable react/prop-types */
import { GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';
const Job = ({job}) => {
    console.log(job)
    return (
        <div>
            <div className='space-y-4 lg:w-[500px] w-full  shadow-lg p-5 mx-auto my-5 rounded bg-gray-50'>
            <img src={job.logo} alt=""/>
            <h2 className=' font-bold'>{job.job_title}</h2>
            <p>{job.company_name}</p>
            <div className='flex gap-x-3'>
                <button className=' border-[#7E90FE] border-2 py-2 px-7 text-[#7E90FE]'>{job.remote_or_onsite}</button>
                <button className='border-2 py-2 px-7  border-[#7E90FE] text-[#7E90FE]'>{job.job_type}</button>
            </div>
            {/*  */}
           <div className=' flex  gap-x-3'>
           <p className=' flex items-center' >
            <GrLocation></GrLocation>
            {job.location}</p>
            <p> Salary :{job.salary}</p>
           </div>
           {/*  */}
           <Link to={`/job/${job.id}`}> <button className='main-btn px-[18px] py-[11px]'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Job;