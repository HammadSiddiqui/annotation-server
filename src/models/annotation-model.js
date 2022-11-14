const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

// define schema for Annotation model
const annotationSchema = new Schema({
    id: {
        type: ObjectId,
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

annotationSchema.set('toJSON', { virtuals: true })
module.exports = mongoose.model('Annotations', annotationSchema, 'annotations')
