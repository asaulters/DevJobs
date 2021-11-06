const fs = require('fs');
const path = require('path')
const { exit } = require('process');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data.json'
);

// const jobListSection = document.querySelector('.job-list');

class Job {
    constructor (id, company, logo, logoBackground, position, postedAt, contract, location, website, apply, description, requirements, role){
        this.id =  id,
        this.company = company,
        this.logo = logo,
        this.logoBackground = logoBackground, 
        this.position = position, 
        this.postedAt = postedAt,
        this.contract = contract,
        this.location = location,
        this.website = website, 
        this.apply = apply, 
        this.description= description,
        this.requirements = requirements,
        this.role = role
    }
}




// 


// id =  id,
// company = company,
// logo = logo,
// logoBackground = logoBackground, 
// position = position, 
// postedAt = postedAt,
// contract = contract,
// location = location,
// website = website, 
// apply = apply, 
// description= description,
// requirements = requirements,
// role = role

exports.getJobs = (req, res, next) => {
    const jobs = loadJobs();
    res.render('../view/index', {

    })

    for (x = 0; x < jobs.length; x++) {
        // console.log(jobs[x].position)

            let newJob =new Job(jobs[x].id, jobs[x].company, jobs[x].logo, jobs[x].logoBackground, jobs[x].position, jobs[x].postedAt, jobs[x].contract, jobs[x].location, jobs[x].website, jobs[x].apply, jobs[x].description, jobs[x].requirements, jobs[x].role )
            console.log(newJob)
    }
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
};

