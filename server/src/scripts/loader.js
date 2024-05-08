import { User } from '../database/db.js'
import { bcrypt } from '../libs/index.js'
import { readJSON } from '../utils/require.js'
const uri = process.cwd() + '/api/users.json'
const users = readJSON(uri)

export const loader = async () => {
  try {
    const usersDB = await User.findAll({})
    if (usersDB.length < users.length) {
      const usersMap = await Promise.all(
        users.map(async (user) => {
          return {
            ...user,
            password: await bcrypt.hashPassword(user.password)
          }
        })
      )
      await User.bulkCreate(usersMap)
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
