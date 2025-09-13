import fp from 'fastify-plugin'
import { PrismaClient } from '@prisma/client'


export default fp(async(fastify,opts)=>{
    const prisma = new PrismaClient()

    try{
        await prisma.$connect()
        fastify.decorate('prisma',prisma)
        fastify.log.info('Prisma connected')
    }catch(err){
        fastify.log.error(err)
    }

    fastify.addHook('onClose',async(fastify)=>{
        await prisma.$disconnect()
        fastify.log.info('Prisma disconnected')
    })
})