import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../../config/envs.js'
const { sign } = jwt

const generateToken = (payload) =>
  sign(payload, SECRET_KEY, { expiresIn: '1h' })

export default { generateToken }
