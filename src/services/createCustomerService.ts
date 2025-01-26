import prismaClient from "../prisma";

interface createCostumerProps{
    name: string
    email: string
}

class createCustomerService{
    async execute({name, email}: createCostumerProps){

        if(!name || !email){
             throw new Error("preencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })

        return customer
    }
}

export {createCustomerService}