const express = require("express")
const router = express.Router()
const PhotoController = require('../controllers/photo.controller')

router.get('/', PhotoController.getAllImages )

router.get("/:id", PhotoController.getImageById)

router.post('/', PhotoController.createImage)

router.put('/:id', PhotoController.updateImage)

router.delete("/:id", PhotoController.deleteImage)


module.exports = router;