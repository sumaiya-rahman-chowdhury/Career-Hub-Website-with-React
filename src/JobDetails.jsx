import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "./utility/LocalStorage";
import { useEffect, useState } from "react";
const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    // console.log(id)
    const [findJob,setFindJob] = useState({})
    console.log(typeof(jobs))
   useEffect(()=>{
    if(jobs){
        const job = jobs.find(job => job.id == id)
        setFindJob(job)
    }
   },[jobs,setFindJob,id])
    const handleApplyJob = () =>{
        saveJobApplication(id)
       toast('Applied Succesfully')
    }
    
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Job Details</h2>
                    <h2>Job Details of: {findJob.job_title}</h2>
                    <p>{findJob.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;