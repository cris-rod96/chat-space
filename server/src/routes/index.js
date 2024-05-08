import { Router } from 'express'
import authRouter from './auth/auth.js'

const rootRouter = Router()

rootRouter.use('/auth', authRouter)

export default rootRouter
