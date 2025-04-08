import helmet from 'helmet'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import router from './routes/userRoutes.js'
const PORT = process.env.PORT || 3000

app.use(helmet())
app.use(express.json())
app.use('/', router)

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`)
})
