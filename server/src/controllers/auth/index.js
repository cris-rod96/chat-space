import { User } from '../../database/db.js'
import { bcrypt, jwt } from '../../libs/index.js'

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({
      where: {
        email
      }
    })
    const isValid = await bcrypt.comparePassword(password, user.password)
    if (isValid) {
      const token = jwt.generateToken({
        id: user.id,
        email: user.email
      })
      return res.status(200).json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image
        },
        token
      })
    }
    return res.status(401).json({
      message: 'Credenciales incorrectas'
    })
  } catch (error) {
    return res.status(401).json({
      message: 'Credenciales incorrectas'
    })
  }
}

export default { login }
