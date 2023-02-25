import {FastifyPluginAsync} from "fastify";

const health_check_plugin: FastifyPluginAsync = async (fastify) => {
    fastify.get('/health_check', async (request, reply) => {
        const server_up = {
            uptime: process.uptime(),
            message: 'server up',
            timestamp: Date.now()
        }

        const server_down = {
            uptime: process.uptime(),
            message: 'server down',
            timestamp: Date.now()
        }
        try{
            reply.code(200).send(server_up)
        } catch (error) {

            reply.code(500).send(server_down)
        }
    })
}
export default health_check_plugin