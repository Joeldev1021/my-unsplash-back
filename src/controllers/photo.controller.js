const PhotoSchema = require("../models/photos");

class PhotoController {
  async getAllImages(req, res) {
    try {
      const photos = await PhotoSchema.find().sort({ createdAt: -1 });
      res.json(photos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getImageById(req, res) {
    try {
      const photo = await PhotoSchema.findById(req.params.id);
      res.json(photo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createImage(req, res) {
    try {
      if (!req.body.label || !req.body.url)
        return res.status(400).json({ message: "Label is required" });
      const photo = new PhotoSchema(req.body);
      const photoSave = await photo.save();
      res.json({
      message: `Photo with id ${photoSave.label} created successfully`,
      photo: photoSave
    });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateImage(req, res) {
    const { id } = req.params;
    try {
      if (!req.body.label || !req.body.url)
        return res.status(400).json({ message: "Label is required" });

      const photo = await PhotoSchema.findById(id);
      if (!photo) return res.status(404).send("Photo not found");

      const updatePhoto = await PhotoSchema.findByIdAndUpdate(id, req.body);
      res.json({
        message: `Photo with id ${updatePhoto.id}  updated successfully`,
        photo: updatePhoto
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  }

  async deleteImage(req, res) {
    const { id } = req.params;
    const photo = await PhotoSchema.findById(id);
    if (!photo) return res.status(404).json({ message: "Photo not found" });
    const photoDelete = await PhotoSchema.findByIdAndDelete(id);
    res.json({
      message: `Photo with id ${photoDelete.label} deleted successfully`,
      photo: photoDelete
    });
  }
}

module.exports = new PhotoController();
