const cloudinary = require("cloudinary").v2;
require('dotenv').config();
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name:"dzjaomrov",
  api_key: "163435635797328",
  api_secret:"iKzbC_eHdGnM1kO0BJvBKnPSFWA",
  secure:true
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowed_formats: ["png", "jpg", "jpeg"], // Correct key name
  },
});

module.exports = { cloudinary, storage };