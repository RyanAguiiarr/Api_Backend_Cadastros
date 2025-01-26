import {FastifyRequest, FastifyReply} from "fastify"
import {listCustomersServices} from "../services/listCustomersServices"

class listCustumersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listiCustumerSer = new listCustomersServices()

        const customer = await listiCustumerSer.execute()

        reply.send(customer)
    }
}

export {listCustumersController}