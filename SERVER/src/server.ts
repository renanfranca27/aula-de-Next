import fastify from "fastify";
import { Prisma, PrismaClient } from "@prisma/client";
import { AsyncLocalStorage } from "async_hooks";

const app = fastify()
const prisma = new PrismaClient()


app.get('/users', async () =>{
    const users = await Prisma.user.finMany()
    return'HELLO World'
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server estar onn BB! htpp://localhost:3333')
} )