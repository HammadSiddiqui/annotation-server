const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// TODO: define schema for Annotation model
const annotationSchema = new Schema({
    content: {type : Object},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

annotationSchema.set('toJSON', { virtuals: true })
module.exports = mongoose.model('Annotations', annotationSchema, 'annotations')
