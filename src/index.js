import helmet from 'helmet'
import express from 'express'
const app = express()
import userRoutes from './routes/userRoutes.js'
const PORT = process.env.PORT || 3000

app.use(helmet())
app.use(express.json())
app.use('/', userRoutes)

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`)
})
