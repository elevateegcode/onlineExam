

import Joi from 'joi';

const addQuestionSchema = Joi.object({
    title:Joi.string().min(3).max(20).alphanum().required(),
    icon:Joi.object({
        fieldname: Joi.string().required(),
        originalname: Joi.string().required(),
        encoding: Joi.string().required(),
        mimetype: Joi.string().valid('image/jpeg','image/png','image/jpg').required(),
        destination: Joi.string().required(),
        filename: Joi.string().required(),
        path: Joi.string().required(),
        size: Joi.number().max(5242880).required()
    }),
    type:Joi.string().hex().length(24).required(),
    exam:Joi.string().length(24).required(),
    a1:Joi.string().required(),
    a2:Joi.string().required(),
    a3:Joi.string().required(),
    a4:Joi.string().required(),
    correctAns:Joi.array().required(),


});


const QuestionQueryIdSchema = Joi.object({
    id:Joi.string().hex().length(24).required()
});

const updateQuestionSchema = Joi.object({
    id:Joi.string().hex().length(24).required(),
    title:Joi.string().min(3),
    icon:Joi.object({
        fieldname: Joi.string().required(),
        originalname: Joi.string().required(),
        encoding: Joi.string().required(),
        mimetype: Joi.string().valid('image/jpeg','image/png','image/jpg').required(),
        destination: Joi.string().required(),
        filename: Joi.string().required(),
        path: Joi.string().required(),
        size: Joi.number().max(5242880).required()
    }),
    type:Joi.string().hex().length(24),
    exam:Joi.string().length(24),
    choices:Joi.array(),
});
export {
    addQuestionSchema,
    QuestionQueryIdSchema,
    updateQuestionSchema
}



/*

fieldname:Joi. string(). required(),
originalname: Joi.string(). required(), 
encoding: Joi. string(). required(), 
mimetype: Joi string(). valid( 'image/jpeg’,’image/png’).required(),
 size: Joi.number().max(5242880).required(), 
destination: Joi. string(). required(), 
filename: Joi. string(). required(), 
path: Joi. string(). required()



*/