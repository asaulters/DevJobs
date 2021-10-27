const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const router = express.Router();

const jobsController = require('../controller/jobs')

router.get('/', jobsController.getJobs)

module.exports = router