import { PrismaClient } from '@prisma/client'

class PrismaConnect {
    // Singleton class to manager all acess btw models and PrismaClient

    public prisma: PrismaClient
    private static instance: PrismaConnect

    constructor() {
        this.prisma = new PrismaClient()
    }

    public static getInstance() : PrismaClient {
        if (!PrismaConnect.instance) {
            this.instance = new PrismaConnect()
        }
        
        return PrismaConnect.instance.prisma;
    }
}

export default PrismaConnect;