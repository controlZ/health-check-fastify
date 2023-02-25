import fastify from 'fastify'
import health_check_route from "./routes/health_check.route";

const server = fastify({
    logger: true
})

console.log(process.uptime())
server.register(health_check_route)

server.listen({port: 3000})