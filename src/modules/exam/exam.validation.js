

import Joi from 'joi';

const addExamSchema = Joi.object({
    title:Joi.string().min(3).max(20).pattern(/^[a-zA-Z ]*$/).required(),
    icon:Joi.object({
        fieldname: Joi.string().required(),
        originalname: Joi.string().required(),
        encoding: Joi.string().required(),
        mimetype: Joi.string().valid('image/jpeg','image/png','image/jpg').required(),
        destination: Joi.string().required(),
        filename: Joi.string().required(),
        path: Joi.string().required(),
        size: Joi.number().max(5242880).required()
    }).required(),
    category:Joi.string().hex().length(24).required(),
    startDate:Joi.date().timestamp().greater('now').required(),
    endDate:Joi.date().timestamp().min(Joi.ref('startDate')).required(),
    duration: Joi.number().min(20).max(180).required()


});


const examQueryIdSchema = Joi.object({
    id:Joi.string().hex().length(24).required()
});

const updateExamSchema = Joi.object({
    id:Joi.string().hex().length(24).required(),
    title:Joi.string().min(3).required()
});
export {
    addExamSchema,
    examQueryIdSchema,
    updateExamSchema
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