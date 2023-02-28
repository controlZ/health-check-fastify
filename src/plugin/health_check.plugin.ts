import {FastifyPluginAsync} from "fastify";

const health_check_plugin: FastifyPluginAsync = async (fastify) => {
    fastify.get('/health', async (request, reply) => {
        const ok = {
            status: 'ok'
        }

        const down = {
            status: 'down'
        }
        try{
            reply.code(200).send(ok)
        } catch (error) {
            reply.code(503).send(down)
        }
    })
}
export default health_check_plugin