const express = require('express');
const router = express.Router();
const annotationController = require('../controllers/annotationController');

router.get('/annotations', annotationController.getAnnotations);
router.post('/annotations', annotationController.createAnnotation);
router.delete('/annotations/:id', annotationController.deleteAnnotation);


module.exports = router;
