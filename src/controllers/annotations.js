// Models
const mongoose = require('mongoose')
const AnnotationModel = require('../models/annotation-model')


exports.viewAllOrFilter = async function(request, response) {
    let query = request.query
    let creator = query.creator
    let source = query.source
    console.log("creator: " + creator)
    console.log("source: " + source)
    if (query != null) {
        if (creator != null) {
            let annotation  = await AnnotationModel.find({'content.creator' : creator});
            response.json({data : annotation})
        } else if (source != null) {
            let annotation  = await AnnotationModel.find({'content.target.source' : source});
            response.json({data : annotation})
        }

    }
    else {
        let annotation  = await AnnotationModel.find();
         console.log(annotation)
        response.json({data: annotation})
    }
}


/* view annotation
 * @description This method will return customer details
 * @input annotation ID
 * @return (Object) annotation object
 */
exports.view = async function(request, response) {
    try {

        if(request.params.id != null) {
            let annotation  = await AnnotationModel.findById(
                request.params.id);

            response.json({
                "data" : annotation.content
            })
        } else {
            throw "No Params were passed to the Annotation Server"
        }


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
        await annotation.save()

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



