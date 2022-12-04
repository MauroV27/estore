import { Produto, Venda, VendaProduto } from '@prisma/client';
import PrismaConnect from '../db/prismaConnect';

const prisma = PrismaConnect.getInstance();

export class VendaProdutoDAO {
    public async create(sale:Venda, product:Produto, amount:number) {
        
        const validate = this.valdateInput(sale, product, amount);

        if ( validate.status == 'failed' || validate.data == null ) {
            return {status: validate.status, message: validate.message, data:null};
        }

        const quantity = validate.data;

        const createVendaProduto = await prisma.vendaProduto.create({
            data : {
                produtoId : product.id,
                vendaId : sale.id,
                quantidade : quantity
            }
        });

        if ( createVendaProduto == null ){
            return {status:"failed", message:"erro in create connection btw sale and product", data: null};
        }

        return {status:'success', message:'create connection btw sale and product', data: {...createVendaProduto}};

    }

    public async update(sale:Venda, product:Produto, amount:number) {
        const validate = this.valdateInput(sale, product, amount);

        if ( validate.status == 'failed' || validate.data == null ) {
            return {status: validate.status, message: validate.message, data:null};
        }

        const quantity = validate.data; // get amount

        const updateVendaProduto = await prisma.vendaProduto.update({
            where: {
                vendaId_produtoId : {
                    vendaId: sale.id,
                    produtoId: product.id
                },
            },
            data : {
                quantidade : quantity,
            }
        });

        if ( updateVendaProduto == null ){
            return {status:"failed", message:"erro in update connection btw sale and product", data: null};
        }

        return {status:'success', message:'update connection btw sale and product', data: {...updateVendaProduto}};

    }

    public async delete(saleId:number, productId:number) {
        const findToDelete = await this.getOne(saleId, productId);

        if ( findToDelete.status == "failed" || findToDelete.data == null ){
            return {...findToDelete};
        }

        const deleteVendaProduto = await prisma.vendaProduto.delete({
            where : {
                vendaId_produtoId : {
                    vendaId: saleId,
                    produtoId: productId
                }
            }
        });

        if ( deleteVendaProduto == null ){
            return {status:"failed", message:"sale-product not deleted.", data:null};
        }

        return {status:"success", message:"sale-product deleted.", data:{...deleteVendaProduto}};
    }

    public async getOne(saleId:number, productId:number) {
        const find = await prisma.vendaProduto.findFirst({
            where: {
                vendaId : saleId,
                produtoId : productId
            }
        })

        if ( find == null ){
            return {status:"failed", message:"sale-product not find.", data:null};
        }

        return {status:"success", message:"sale-product get", data:{...find}};
    }

    public async getProductInSale(saleId:number) {

        const find = await prisma.vendaProduto.findMany({
            where: {
                vendaId : saleId,
            }
        })

        if ( find == null ){
            return {status:"failed", message:"sale-product not find.", data:null};
        }

        return {status:"success", message:"sale-product get", data:{...find}};
    }

    public async getSalesWithProduct(productId:number) {

        const find = await prisma.vendaProduto.findMany({
            where: {
                produtoId : productId,
            }
        })

        if ( find == null ){
            return {status:"failed", message:"sale-product not find.", data:null};
        }

        return {status:"success", message:"sale-product get", data:{...find}};
    }

    private valdateInput(sale:Venda, product:Produto, quantidade:number) {
        if ( sale == null || product == null ){
            return {status:"failed", message:"failed in get data", data:null};
        }

        if ( quantidade < 0 || Number.isInteger(quantidade) == false ){
            return {status:"failed", message:"amount must be a positive integer", data:null};
        }

        if ( quantidade > product.quantidade ){
            quantidade = product.quantidade
        }

        return {status:"success", message:`Product:${product.id} added to sale:${sale.id}..`, data: quantidade};
    }
}