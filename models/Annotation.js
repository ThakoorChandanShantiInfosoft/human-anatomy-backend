const mongoose = require('mongoose');

const annotationSchema = new mongoose.Schema({
  partName: String,
  description: String,
  x: Number,
  y: Number
}, { timestamps: true });

const Annotation = mongoose.model('Annotation', annotationSchema);

module.exports = Annotation;
