import Fastify from 'fastify'
import 'dotenv/config'
import prismaPlugin from './plugin/prismaPlugin.js'
import { userRoutes } from './routes/userRoutes.js'
import fastifyCookie from '@fastify/cookie'
import jwtPlugin from './plugin/jwt.js'
import cors from '@fastify/cors'



const fastify = Fastify({logger:true})

// plugins register
fastify.register(cors)
fastify.register(prismaPlugin)
fastify.register(fastifyCookie)
fastify.register(jwtPlugin, {
  secret: process.env.JWT_SECRET_KEY,
  cookie: {
    cookieName: 'token',
    signed: false
  }
})



// register routes
fastify.register(userRoutes,{prefix:'/api/user'})



const start = async()=>{
    try{
        await fastify.listen({port:process.env.PORT || 3000})

    }catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}
start()