import  { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredOne } from './utility/LocalStorage';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(x => x.remote_or_onsite === 'Remote'
            )
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onSiteJobs = appliedJobs.filter(x => x.remote_or_onsite === 'Onsite'
            )
            setDisplayJobs(onSiteJobs)
        }
    }


    
    useEffect(() => {
        const stroredJobsId = getStoredOne();
        console.log((stroredJobsId))
    if( jobs.length > 0){
       
            const jobsApplied = [];
            for (const id of stroredJobsId) {
                console.log(typeof(jobs))
                const job = jobs.find((job) => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
       
    }
    }, [jobs])
    return (
        <div>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a onClick={()=>handleJobsFilter('all')}>All</a></li>
                    <li><a onClick={()=>handleJobsFilter('remote')}>Remote</a></li>
                    <li><a onClick={()=>handleJobsFilter('onsite')}>Onsite</a></li>
                </ul>
            </details>

            {
                displayJobs.map(x => <li key={x.id}>{x.job_title}  {x.remote_or_onsite
                }</li>)
            }
        </div>
    );
};

export default AppliedJobs;