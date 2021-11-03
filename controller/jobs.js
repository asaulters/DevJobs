const fs = require('fs');
const { exit } = require('process');

// const jobListSection = document.querySelector('.job-list');


exports.getJobs = (req, res, next) => {
    res.render('../view/index')
    const jobs = loadJobs();
    jobs.forEach(jobs => {
        // console.log(jobs.position)
        let jobDiv = document.createElement('div');
        let newJobDiv = 
    });
    // console.log(strJob.company)
    // // console.log(jobs)
    // for(x = 0; x < jobs.length; x++) {
        // let jobEach = jobs;
    //     // let newJob = document.createElement('div');
    //     // const newJobs = jobs.toString();
    //     // console.log(newJobs)

    // }
}




const loadJobs = function(res) {
    try{
        const databuffer = fs.readFileSync('data.json');
        const dataJSON = databuffer.toString();
        // console.log(dataJSON)
        return JSON.parse(dataJSON);
        
    } catch(e) {
        res.redirect('../view/404.ejs');
        console.log(e) 

    }
}

