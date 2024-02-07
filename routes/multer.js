const multer = require('multer');
const {v4: uuidv4} = require('uuid')
const path = require("path");   //package for file extension



const storage = multer.diskStorage( {
  destination: function(req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function(req, file, cb) {
    const uniqueFilename = uuidv4();
    cb(null, uniqueFilename+path.extname(file.originalname)) //path.extname(file.originalname) - code for adding extension in file name
  }
})

const upload = multer({ storage: storage});

module.exports = upload;