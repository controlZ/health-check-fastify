import {FastifyPluginAsync} from "fastify";
import health_check_plugin from "../plugin/health_check.plugin";

const health_check_route: FastifyPluginAsync = async (fastify) =>{
    fastify.register(health_check_plugin, {prefix: '/'})
}

export default health_check_route