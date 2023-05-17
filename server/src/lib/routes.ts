import { FastifyInstance } from 'fastify'
import { prisma } from './prisma'
import * as dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid'

export async function appRoutes(app: FastifyInstance) {
    app.post('/gains', async () => {
        const gains = await prisma.gain.create({
            data: {
                id: uuidv4(),
                amount: 1000,
                description: 'Internet',
                frenquecy: 'Recorrente',
                type: 'Despesa',
                date: new Date().toISOString(),
                user_id: "2bab60d2-a91f-4080-bdbb-9ebee8cbb28f",
            }
        })
    })


    app.get('/gains', async () => {
        const gains = await prisma.gain.findMany({
            where: {
                user_id: "2bab60d2-a91f-4080-bdbb-9ebee8cbb28f",
            }
        })
        return gains
    })

    app.get('/gains/:date', async (req) => {
        const date = req.params

        const gains = await prisma.gain.findMany({
            where: {
                date: String(date),
            }
        })
        return gains
    })
    
    app.patch('/gains/:id', async (req) => {
        const id = req.params

        const gains = await prisma.gain.findUnique({
            where: {
                id: String(id),
            }
        })
        return gains
    })

    app.delete('/gains/:id', async (req) => {
        const id = req.params

        const gains = await prisma.gain.findUnique({
            where: {
                id: String(id),
            }
        })
        return gains
    })

}