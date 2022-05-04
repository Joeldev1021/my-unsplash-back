const express = require("express");
const PhotoController = require("../controllers/photo.controller");
const router = express.Router()

router.get('/', PhotoController.getAllImages)

router.get("/:id", PhotoController.getImageById)

router.post('/', PhotoController.createImage)

router.put('/:id', PhotoController.updateImage)

router.delete("/:id", PhotoController.deleteImage)

module.exports = router;