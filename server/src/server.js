import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import rootRouter from './routes/index.js'
const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/api/v1', rootRouter)

export default app
