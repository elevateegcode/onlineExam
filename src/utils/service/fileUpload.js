
import mongoose from "mongoose"
import multer from "multer";
import AppError from "../appError.js";


export const fileUpload =(folderName) =>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, `uploads/${folderName}/`)
        },
        filename: function (req, file, cb) {
            console.log(file);
          cb(null, new mongoose.Types.ObjectId + '-' + file.originalname)
        }
      });
      function fileFilter (req, file, cb) {
        console.log(file,"asda");
        if(file.mimetype.startsWith("image")) {
            cb(null, true)
        }else {
            cb(new AppError("invalid format", 401), false)
        }
      
      }
      
      const upload = multer({ storage });
    
      return upload;
}


export const uploadSingleFile = (fieldName,folderName) => fileUpload(folderName).single(fieldName)
export const uploadArrayFile =  (fieldName,folderName) => fileUpload(folderName).array(fieldName,10)
export const uploadFields =  (fieldsName,folderName) => fileUpload(folderName).fields(fieldsName)
