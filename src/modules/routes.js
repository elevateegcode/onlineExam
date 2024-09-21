import authRoutes from "./auth/auth.routes.js"
import categoryRoutes from "./category/catgory.routes.js"
import examRoutes from "./exam/exam.routes.js"
import questionRoutes from "./question/question.routes.js"
import userRoutes from "./user/user.routes.js"



export const allRoutes = (app) =>{
    app.use('/api/v1/category',categoryRoutes)
    app.use('/api/v1/user',userRoutes)
    app.use('/api/v1/auth',authRoutes)
    app.use('/api/v1/exam',examRoutes)
    app.use('/api/v1/question',questionRoutes)


    

}