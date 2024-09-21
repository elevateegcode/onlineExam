
import catchError from '../../../middleware/catchError.js';
import { APIFeature } from '../../../utils/ApiFeature.js';
import QuetionModel from '../../../../db/models/question.model.js';
const addQeustion= catchError(async(req,res) =>{    
    let question = new QuetionModel(req.body)
    console.log(req.body,"req.body");
    
    let addedQuestion = await question.save()
    res.json({message:"Done", addedQuestion})
})

const getAllQeustions = catchError(async(req,res) =>{
    if(!req.query.fields) req.query.fields = '-updatedAt,-__v'
    let apiFeature = new APIFeature(QuetionModel.find(),req.query)
    apiFeature.pagination().select()
    let allQeustions = await apiFeature.mongooseQuery
    res.json({message:"Done", allQeustions})
})

const getQeustionById = catchError(async(req,res) =>{
    let Qeustion = await QuetionModel.findById(req.params.id);
    res.json({message:"Done", Qeustion})
})


const updateQeustion= catchError(async(req,res) =>{
    if(req.body.icon)  req.body.icon = req.file.filename
    let updatedQeustion = await QuetionModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    updatedQeustion && res.json({message:"Done", updatedQeustion})
    !updatedQeustion && res.json({message:"not found Qeustion"})
})

const deleteQeustion= catchError(async(req,res) =>{
    let deletedQeustion = await QuetionModel.findByIdAndDelete(req.params.id)
    deletedQeustion && res.json({message:"Done", deletedQeustion})
    !deletedQeustion && res.json({message:"not found Qeustion"})
})

export {
    addQeustion,
    getAllQeustions,
    getQeustionById,
    updateQeustion,
    deleteQeustion
}