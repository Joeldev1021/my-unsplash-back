const express = require("express")
const router = express.Router()
router.get('/', (req, res)=> {
    res.send('<h1>Hello World</h1>')
})

/* router.get("/:id", PhotoController.getImageById)

router.post('/', PhotoController.createImage)

router.put('/:id', PhotoController.updateImage)

router.delete("/:id", PhotoController.deleteImage)

 */
module.exports = router;