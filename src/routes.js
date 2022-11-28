

var express = require('express')
var router = express.Router()

// REQUIRE CONTROLLERS //
const activityStreamController = require('./controllers/activityStreams')
const annotationController = require('./controllers/annotations')




router.get(
    '/annotation/:idenfoId',
    annotationController.view
)

// GET Check if Identity Document number exists
router.get('/'
)

module.exports = router