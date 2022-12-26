

var express = require('express')
var router = express.Router()

// REQUIRE CONTROLLERS //
const activityStreamController = require('./controllers/activityStreams')
const annotationController = require('./controllers/annotations')




router.get(
    '/annotation/:id',
    annotationController.view
)


router.post(
    '/annotation/create',
    annotationController.create
)

router.post(
    '/annotation/delete',
    annotationController.delete
)



module.exports = router