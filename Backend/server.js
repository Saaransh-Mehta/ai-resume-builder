import Fastify from 'fastify'
import 'dotenv/config'
import prismaPlugin from './plugin/prismaPlugin.js'





const fastify = Fastify({logger:true})

// plugins register
fastify.register(prismaPlugin)



const start = async()=>{
    try{
        await fastify.listen({port:process.env.PORT || 3000})

    }catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}
start()