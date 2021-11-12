const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data.json',
//   'products.json'
);


const getJobFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            cb([]);
            console.log(err)
        } else {
            cb(JSON.parse(fileContent));
            console.log('what what!')
        }
    })
};

module.exports = class Job {
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

    static fetchAll(cb){
        getJobFromFile(cb)
    }

}

// module.exports = getJobFromFile;
// 