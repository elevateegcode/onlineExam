import Joi from 'joi';

const signUpSchema = Joi.object({
    userName:Joi.string().min(3).required(),
    firstName:Joi.string().min(3).pattern(/^[a-zA-Z]+$/).required(),
    lastName:Joi.string().min(3).pattern(/^[a-zA-Z]+$/).required(),
    email:Joi.string().email().required(),
    password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/).required(),
    rePassword: Joi.string().valid(Joi.ref('password')).required(),
    phone:Joi.string().pattern(/^01[0125][0-9]{8}$/).required() 
});

const signInSchema = Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Z][a-z0-9]{3,8}$/).required(),
});

export {
    signUpSchema,
    signInSchema
}
