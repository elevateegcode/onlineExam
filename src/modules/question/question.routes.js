


import express from 'express';
import { uploadSingleFile } from '../../utils/service/fileUpload.js';
import { protectedRoutes } from '../auth/controller/auth.controller.js';
import { validation } from '../../middleware/validation.js';
import { addQeustion, deleteQeustion, getAllQeustions, getQeustionById, updateQeustion } from './controller/question.controller.js';
import { addQuestionSchema, QuestionQueryIdSchema, updateQuestionSchema } from './question.validation.js';

const questionRoutes = express.Router();



questionRoutes.route("/")
    .post(uploadSingleFile('icon','questions')  , protectedRoutes,validation(addQuestionSchema), addQeustion)
    .get(getAllQeustions)

questionRoutes.route("/:id")
.get(validation(QuestionQueryIdSchema),getQeustionById)
.patch(validation(updateQuestionSchema),updateQeustion)
.delete(validation(QuestionQueryIdSchema),deleteQeustion)


export default questionRoutes;