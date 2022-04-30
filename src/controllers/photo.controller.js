const PhotoSchema = require('../models/photos')

class PhotoController {
  async getAllImages(req, res) {
    const photos = await PhotoSchema.find();
    res.send("<h1>All photos</h1>")
    /* res.json(photos); */
  }

  async getImageById(req, res) {
    const photo = await PhotoSchema.findById(req.params.id)
    res.json(photo)
  }

  async createImage(req, res) {
      const photo = new PhotoSchema(req.body) 
    const photoSave = await photo.save()
    res.json({
        message: "Photo saved successfully",
    })
  }
  async updateImage(req, res) {
    const {id} = req.params
    console.log(id)
    const photo = await PhotoSchema.findById(id)    
    if(!photo) return res.status(404).send("Photo not found")
    const updatePhoto = await PhotoSchema.findByIdAndUpdate(id, req.body)
    res.json({
        message: `Photo with id ${updatePhoto.id}  updated successfully`,
    }) 
  }

  async deleteImage(req, res) {
    const {id} = req.params
    const photo = await PhotoSchema.findById(id)
    if(!photo) return res.status(404).send("Photo not found")
    const photoDelete = await PhotoSchema.findByIdAndDelete(id)
    res.json({
        message: `Photo with id ${photoDelete.label} deleted successfully`,
    })
  }
}

module.exports =new PhotoController();
