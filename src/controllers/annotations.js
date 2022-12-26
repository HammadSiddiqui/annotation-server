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
        console.log(request.query)
        let annotation  = await AnnotationModel.findById(
            request.query.id);

        response.json({
            "status" : "success",
            "data" : annotation
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

        let annotation = new AnnotationModel
        annotation.content = request.body.data
        annotation.save()
        // await annotation.save(request.body.data, function(err, data) {
        //     if (err)
        //         console.log(err)
        //     // console.log(data.id)
        //     // annotation = data.id.toString()
        // })
        console.log(annotation)
        response.json({
            "status" : "success",
            "data" : annotation
        })



    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: "error : " + error,
        })
    }

}

exports.delete = async function(request, response) {
    try {
        //TODO: create annotation from the DB
        let data = request.body.data;
        


    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: error
        })
    }
}



