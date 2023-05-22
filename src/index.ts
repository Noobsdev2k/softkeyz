import express from 'express'
import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT

const prisma = new PrismaClient()

app.use(express.json())

app.get('/', (req, res) => {
  res.json('hello there')
})

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    console.log('user:::', users)

    res.json(users)
  } catch (err) {
    console.log(err)
  }
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
