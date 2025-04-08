import helmet from 'helmet'
import express from 'express'

const app = express()

app.use(helmet())

app.listen(3000, () => {
  console.log('rodando na porta 3000')
})
