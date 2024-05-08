import { Router } from 'express'
import { authControllers } from '../../controllers/index.js'

const authRouter = Router()

authRouter.post('/login', authControllers.login)

export default authRouter
