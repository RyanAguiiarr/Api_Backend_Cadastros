import prismaClient from "../prisma";

class listCustomersServices{
    async execute(){
        const custumers = await prismaClient.customer.findMany()

        return custumers
    }
}

export {listCustomersServices}