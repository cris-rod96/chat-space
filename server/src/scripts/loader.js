import { User } from '../database/db.js'
import { readJSON } from '../../utils/require.js'
const uri = process.cwd() + '/api/users.json'
const users = readJSON(uri)

export const loader = async () => {
  try {
    const usersDB = await User.findAll({})
    if (usersDB.length < users.length) {
      await User.bulkCreate(users)
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
