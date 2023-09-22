import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    return (
        <div>
            <h2>Job Details of : </h2>
            {
                <p>{jobs.length}</p>
            }

        </div>
    );
};

export default JobDetails;