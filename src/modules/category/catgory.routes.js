


import express from 'express';
import { addCategory, getAllCategories, getCategoryById, updateCategory } from './controller/category.controller.js';
import { validation } from '../../middleware/validation.js';
import { addCategorySchema,categoryQueryIdSchema,updateCategorySchema } from './category.validation.js';
import { uploadSingleFile } from '../../utils/service/fileUpload.js';
import { allowTo, protectedRoutes } from '../auth/controller/auth.controller.js';

const categoryRoutes = express.Router();



categoryRoutes.route("/")
    .post(uploadSingleFile('icon','categories')  , protectedRoutes,validation(addCategorySchema), addCategory)
    .get(getAllCategories)

categoryRoutes.route("/:id")
.get(validation(categoryQueryIdSchema),getCategoryById)
.patch(validation(updateCategorySchema),updateCategory)
// .delete(validation(categoryQueryIdSchema),deleteCategory)


export default categoryRoutes;