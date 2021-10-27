const fs = require('fs');
const { exit } = require('process');

// const jobListSection = document.querySelector('.job-list');


exports.getJobs = (req, res, next) => {
    res.render('../view/index')
    const jobs = loadJobs();
    console.log(newNew)

    // // console.log(jobs)
    // for(x = 0; x < jobs.length; x++) {
    //     // let jobEach = jobs[x];
    //     // let newJob = document.createElement('div');
    //     const newJobs = jobs.toString();
    //     console.log(newJobs.id)

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

