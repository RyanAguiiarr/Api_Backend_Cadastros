import prismaClient from "../prisma"

interface deleteCustumerProps{
    id: string
}

class deleteCustumerService{
    async execute({id}: deleteCustumerProps){
        if(!id){
            throw new Error("solicitação invalida")
        }

        const findCustumer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!findCustumer){
            throw new Error("cliente não existe")
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustumer.id
            }
        })

        return {message: "deletado com sucesso!"}
    }
}

export {deleteCustumerService}