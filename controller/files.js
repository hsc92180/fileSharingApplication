const path = require("path");
const multer = require("multer");
const { error } = require("console");

const uploadDirectoryPath = path.join(__dirname, "..", "files");
// console.log(uploadDirectoryPath)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectoryPath);
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);

        const filename = "resume"+path.extname(file.originalname);
        cb(null, filename);
  }
})
const upload = multer({
    storage: storage,
}).single("resume");

const uploadfile = async (req, res) => {
    console.log(req.body);
    upload(req, res, (error) => {
        if (error) {
            console.log("Error while uploading file", error);
            return;
        } else {
            console.log("file uploaded succesfully");
            res.json({
                success: true,
        message:"upload file api generated"
            })
        }
    })
    
}

const generatefile = async (req, res) => {
    res.json({
        success: true,
        message:"generate file api generated"
    })
}

const downloadfile = async (req, res) => {
    res.json({
        success: true,
        message:"download file api generated"
    })
}

const sendfile = async (req, res) => {
    res.json({
        success: true,
        message:"send file api generated"
    })
}

const controllers = {
    uploadfile,generatefile,downloadfile,sendfile
}

module.exports = controllers;