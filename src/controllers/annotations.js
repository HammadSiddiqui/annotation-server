// Models
const mongoose = require('mongoose')
const AnnotationModel = require('../models/annotation-model')



/* view annotation
 * @description This method will return customer details
 * @input annotation ID
 * @return (Object) annotation object
 */
exports.view = async function(request, response) {
    try {
        //TODO: fetch annotation from the DB
        response.status(200).json({
            data: "OK",
        })

    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: error,
        })
    }

}

exports.create = async function(request, response) {
    try {
        //TODO: create annotation from the DB

    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: error,
        })
    }

}

exports.delete = async function(request, response) {
    try {
        //TODO: create annotation from the DB

    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: error,
        })
    }

}