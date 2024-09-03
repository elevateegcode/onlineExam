
import slugify from 'slugify';
import catchError from '../../../middleware/catchError.js';
import { APIFeature } from '../../../utils/ApiFeature.js';
import examModel from '../../../../db/models/exam.model.js';
const addExam= catchError(async(req,res) =>{    
    req.body.icon = req.file.filename
    let exam = new examModel(req.body)
    let addedExam = await exam.save()
    res.json({message:"Done", addedExam})
})

const getAllExams = catchError(async(req,res) =>{
    if(!req.query.fields) req.query.fields = '-updatedAt,-__v'
    let apiFeature = new APIFeature(examModel.find(),req.query)
    apiFeature.pagination().select()
    let allExams = await apiFeature.mongooseQuery
    res.json({message:"Done", allExams})
})

const getExamById = catchError(async(req,res) =>{
    let exam = await examModel.findById(req.params.id);
    res.json({message:"Done", exam})
})


const updateExam= catchError(async(req,res) =>{
    if(req.body.icon)  req.body.icon = req.file.filename
    let updatedExam = await examModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    updatedExam && res.json({message:"Done", updatedExam})
    !updatedExam && res.json({message:"not found Exam"})
})

const deleteExam= catchError(async(req,res) =>{
    let deletedExam = await examModel.findByIdAndDelete(req.params.id)
    deletedExam && res.json({message:"Done", deletedExam})
    !deletedExam && res.json({message:"not found Exam"})
})

export {
    addExam,
    getAllExams,
    getExamById,
    updateExam,
    deleteExam
}