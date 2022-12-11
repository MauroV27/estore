import PrismaConnect from '../db/prismaConnect';
const prisma = PrismaConnect.getInstance();

export class ProdutoDAO {

    public async create(description:string, price:number, amount:number, photoURL:string) {

        const {status, message, data} = this.validateDataForCreateProduct(description, price, amount, photoURL);

        if ( status == "ERROR" || data == null ){
            return {status, message, data};
        }

        const createProduct = await prisma.produto.create({ 
            data: {
                descricao : data.descricao, 
                preco : data.preco, 
                foto : data.foto,
                quantidade : data.quantidade,
            }});
        
        return {status:"success", message: "Product created", data: {...createProduct}};
    }
    
    public async update(id:number, description:string, price:number, amount:number, photoURL:string) {
            
        // id can not exist in db [IMPLEMENTED]
        const idExists = await this.idExistsInProducts(id);

        if ( idExists == null ){
            return {status: "Failed", message: `Product with id:${id} not exist.`, data: null};
        }
        
        // Data used to update product is not validate [IMPLEMENTED]
        const {status, message, data} = this.validateDataForCreateProduct(description, price, amount, photoURL);

        if ( status == "ERROR" || data == null ){
            return {status, message, data};
        }
        
        const updateProduct = await prisma.produto.update({ 
            where : {
                id : id,
            },
            data: {
                descricao : data.descricao, 
                preco : data.preco, 
                foto : data.foto,
                quantidade : data.quantidade,
            },
        });
        
        return {status: "success", message: "Product updated", data: {...updateProduct}};
    }

    public async delete(id:number) {

        const idExists = await this.idExistsInProducts(id);

        if ( idExists == null ){
            return {status: "failed", message: `Product with id:${id} not exist.`, data: null};
        }

        const deletedProduct = await prisma.produto.delete({ 
            where : {
                id: id,
            },
        });
        
        return {status: "success", message: "Product deleted", data: {...deletedProduct}};
    }

    public async get(id:number) {

        // const _id = parseInt(id as string);
        // id can not exist in db [IMPLEMENTED]
        const idExists = await this.idExistsInProducts(id);

        if ( idExists == null ){
            return {status: "failed", message: `Product with id:${id} not exist.`, data: null};
        }

        return {status: "success", message: "Get ONE product", data: {...idExists}};
    }

    public async getAll() {

        const products = await prisma.produto.findMany(); // get all prdocuts in database
        
        if ( products == null ){
            return {status: "failed", message: "No existing products.", data:null};
        }

        return {status: "success", message: "Get ALL products", data: [...products]};
    }


    private async idExistsInProducts(id:number){
        return await prisma.produto.findFirst({
            where: {
                id : id
            }
        });
    }


    private validateDataForCreateProduct(descricao:string, preco:number, quantidade:number, foto:string,) {
        // Method that validate data input for create a new product or update product data
        
        descricao = String(descricao).trim();
        foto = String(foto).trim();

        if ( preco <= 0 ){
            return {status:"ERROR", message: "Value of price must be bigger than 0.", data:null};
        }

        if ( quantidade <= 0 || Number.isInteger(quantidade) == false){
            return {status:"ERROR", message: "Value of quantytie must be a positive integer.", data:null};
        }

        return {status: "OK", message:"success", data:{descricao, preco, foto, quantidade}};
    }

}