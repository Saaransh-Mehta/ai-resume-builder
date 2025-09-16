import fp from 'fastify-plugin'
import fastifyJwt from '@fastify/jwt'

export default fp(async function (fastify, opts) {
  fastify.register(fastifyJwt, {
    secret: process.env.JWT_SECRET_KEY,
    cookie: {
      cookieName: 'token',
      signed: false
    }
  })

  fastify.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.code(401).send({ error: 'Unauthorized' })
    }
  })
})
