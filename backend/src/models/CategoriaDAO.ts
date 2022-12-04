import PrismaConnect from '../db/prismaConnect';
const prisma = PrismaConnect.getInstance();


export class CategoriaDAO {

    public async create(description:string) {

        if (description == "" || description == undefined ){
            return {status:"failed", message: "error in descriptions", data: null}
        }

        // check if description already exists
        const descriptionAlreadyExist = await this.checkIfDescriptionAlreadyExists(description);

        if ( descriptionAlreadyExist != null ){
            return {status:"failed", message: `Description: ${description}, already exist.`, data: null}
        }

        const createCategory = await prisma.categoria.create({ 
            data: {
                descricao : description
            }});
    
        
        return {status:"success", message: "Category created", data: createCategory}
        
    }
    
    public async update(id:number, description:string) {

        const {status, message, data} = await this.get(id);

        if ( status == 'failed' || data == null ){
            return {status, message, data};
        }

        // check if description already exists
        const descriptionAlreadyExist = await this.checkIfDescriptionAlreadyExists(description);

        if ( descriptionAlreadyExist != null ){
            return {status:"failed", message: `Description: ${description}, already exist.`, data: null}
        }

        const updateCategory = await prisma.categoria.update({
            where: {
                id,
            },
            data : {
                descricao : description,
            }
        })

        return {status:"success", message: "Category updated", data: updateCategory}
        
    }

    public async delete(id:number) {

        const {status, message, data} = await this.get(id);

        if ( status == 'failed' || data == null ){
            return {status, message, data};
        }

        const deleteCategory = await prisma.categoria.delete({ 
            where : {
                id: id,
            },
        });
        
        return {status:"success", message: "Category deleted", data: deleteCategory}
    }

    public async get(id:number) {

        // const _id = parseInt(id as string);

        const getCategory = await prisma.categoria.findFirst({
          where: {
            id : id,
          },
        });

        if ( getCategory == null ) {
            return {status: "failed", message: "Category not exist.", data: null}
        }

        return {status:"success", message: "Category created", data: getCategory}
    }

    public async getAll() {
        //get all categorys

        const getAllCategorys = await prisma.categoria.findMany();

        if ( getAllCategorys == null ) {
            return {status: "failed", message: "Category not exist.", data: null}
        }

        return {status:"success", message: "Category created", data: getAllCategorys}
    }

    private async checkIfDescriptionAlreadyExists(description:string) {
        return await prisma.categoria.findFirst({
            where : {
                descricao : description,
            }
        })
    }

}