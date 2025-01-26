import {FastifyRequest, FastifyReply} from "fastify"
import {deleteCustumerService} from "../services/deleteCustumerService"

class deleteCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id: string}
        const customerService = new deleteCustumerService()

        const customer = await customerService.execute({id})

        reply.send(customer)
    }
}

export {deleteCustomerController}