

var express = require('express')
var router = express.Router()

// REQUIRE CONTROLLERS //
const activityStreamController = require('./controllers/activityStreams')
const annotationController = require('./controllers/annotations')




router.get(
    '/annotation/:idenfoId',
    annotationController.view
)



module.exports = router