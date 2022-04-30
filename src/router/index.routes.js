const express = require("express")
const router = express.Router()
router.get('/', (req, res)=> {

    res.send('Hello World')
})

/* router.get("/:id", PhotoController.getImageById)

router.post('/', PhotoController.createImage)

router.put('/:id', PhotoController.updateImage)

router.delete("/:id", PhotoController.deleteImage)

 */
module.exports = router;