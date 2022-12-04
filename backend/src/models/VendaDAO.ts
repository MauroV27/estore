import PrismaConnect from '../db/prismaConnect';

const prisma = PrismaConnect.getInstance();

export class VendaDAO {
    public async create(userId:number) {
        // id, dateTime, userId, Usuario, VendaProduto[]

        // const getUser = await prisma.usuario.findFirst({
        //     where :{
        //         id: userId,
        //     }
        // })

        // if ( getUser == null ){
        //     return {status: "failed", message:"Erro in create the sale...", data:null};
        // }

        console.log(userId)
        console.log(userId as number)

        try {
            const createVenda = await prisma.venda.create({
                data : {
                    dataHora : new Date(),
                    usuarioId : userId,
                    // usuarioId : getUser.id,
                    // usuario : getUser,
                }
            })

            if ( createVenda == null ){
                return {status: "failed", message:"Erro in create the sale...", data:null};
            }
    
            console.log(createVenda);
            return {status: "success", message:"Sale created...", data: createVenda};
        } catch (err) {
            console.error(err)
            console.log("\n", err)
        }

        return {status: "failed", message:"Erro in create the sale...", data:null};
    }

    public async delete(vendaId:number) {
        
        const {status, message, data} = await this.getOne(vendaId);

        if ( status == "failed" || data == null ){
            return {status, message, data};
        }

    }

    public async getOne(vendaId:number) {
        const getSale = await prisma.venda.findFirst({
            where :{
                id : vendaId,
            }
        })

        if ( getSale == null ){
            return {status: "failed", message:`Sale of id:${vendaId} not exist.`, data: null};    
        }

        return {status: "success", message:"Sale get...", data: getSale};
    }

    public async getMany() {
        
    }
}