import { loginUser, registerUser } from "../controller/userController.js"

export const userRoutes = (fastify,opts)=>{
    fastify.post('/register',registerUser)
    fastify.post('/login',loginUser)
}