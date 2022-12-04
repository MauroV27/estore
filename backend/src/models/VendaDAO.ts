import PrismaConnect from '../db/prismaConnect';

const prisma = PrismaConnect.getInstance();

export class VendaDAO {
    public async create(userId:number) {
        // id, dateTime, userId, Usuario, VendaProduto[]

        const getUser = await prisma.usuario.findFirst({
            where :{
                id: userId,
            }
        })

        if ( getUser == null ){
            return {status: "failed", message:"Erro, user not found", data:null};
        }

        const createVenda = await prisma.venda.create({
            data : {
                dataHora : new Date(),
                usuarioId : userId,
            }
        })

        if ( createVenda == null ){
            return {status: "failed", message:"Erro in create the sale...", data:null};
        }

        return {status: "success", message:"Sale created...", data: {...createVenda}};
    }

    public async delete(vendaId:number) {
        
        const {status, message, data} = await this.getOne(vendaId);

        if ( status == "failed" || data == null ){
            return {status, message, data};
        }

        const deleteSale = await prisma.venda.delete({
            where: {
                id : vendaId,
            }
        });

        if ( deleteSale == null ){
            return {status: "failed", message:`Erro in delete the sale with id:${vendaId}`, data:null};
        }

        return {status: "success", message:"Sale deleted...", data: {...deleteSale}};
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

        return {status: "success", message:"Sale get...", data: {...getSale}};
    }

    public async getSalesFromUser(userId:number) {
        const salesFromuser = await prisma.venda.findMany({
            where :{
                usuarioId : userId,
            }
        });

        if ( salesFromuser == null ){
            return {status: "failed", message:`Sale of id:${userId} not exist.`, data: null};    
        }

        return {status: "success", message:"Sales get...", data: {...salesFromuser}};
    }
}