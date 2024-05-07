import express from 'express'
import cors from 'cors'
import logger from 'morgan'

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

// app.use('/api/v1')

export default app
