import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"
import {createCustomerController} from "./controllers/createcustomerController"
import { listCustumersController } from "./controllers/listCustumersController"
import { deleteCustomerController } from "./controllers/deleteCustomerController"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/costumer", async(request: FastifyRequest, reply: FastifyReply) => {
        return new createCustomerController().handle(request, reply)
    })
    fastify.get("/costumers", async(request: FastifyRequest, reply: FastifyReply) => {
        return new listCustumersController().handle(request, reply)
    })
    fastify.delete("/costumer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new deleteCustomerController().handle(request, reply)
    })
}