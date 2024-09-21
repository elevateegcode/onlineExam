


import express from 'express';
import { uploadSingleFile } from '../../utils/service/fileUpload.js';
import { protectedRoutes } from '../auth/controller/auth.controller.js';
import { addExam, deleteExam, getAllExams, getExamWithQuestion, updateExam } from './controller/exam.controller.js';
import { validation } from '../../middleware/validation.js';
import { addExamSchema, examQueryIdSchema, updateExamSchema } from './exam.validation.js';

const examRoutes = express.Router();



examRoutes.route("/")
    .post(uploadSingleFile('icon','exams')  , protectedRoutes,validation(addExamSchema), addExam)
    .get(getAllExams)

examRoutes.route("/:id")
.get(validation(examQueryIdSchema),getExamWithQuestion)
.patch(validation(updateExamSchema),updateExam)
.delete(validation(examQueryIdSchema),deleteExam)


export default examRoutes;