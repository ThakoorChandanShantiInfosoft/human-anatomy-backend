const Annotation = require('../models/Annotation');

exports.getAnnotations = async (req, res) => {
  try {
    const annotations = await Annotation.find();
    res.status(200).json(annotations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createAnnotation = async (req, res) => {
  try {
    const newAnnotation = await Annotation.create(req.body);
    res.status(201).json(newAnnotation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAnnotation = async (req, res) => {
  try {
    const deletedAnnotation = await Annotation.findByIdAndDelete(req.params.id);
    if (!deletedAnnotation) {
      return res.status(404).json({ message: 'Annotation not found' });
    }
    res.status(200).json({ message: 'Annotation deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};