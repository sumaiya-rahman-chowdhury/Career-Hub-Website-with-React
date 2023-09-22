const getStoredOne = () =>{
    const storedOne =  localStorage.getItem('job-applications');
    if(storedOne){
        return JSON.parse(storedOne)
    }
    return []
}

const saveJobApplication = id =>{
    const storedApplication = getStoredOne();
    const exist = storedApplication.find(jobId=>jobId == id)
    if(!exist){
        storedApplication.push(parseInt(id))
        localStorage.setItem('job-applications',JSON.stringify(storedApplication));
    }
}


export {saveJobApplication,getStoredOne}