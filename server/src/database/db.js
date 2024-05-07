import { Sequelize } from 'sequelize'
import { POSTGRES_URI } from '../config/envs.js'

const sequelize = new Sequelize(POSTGRES_URI, { logging: false, native: false })

export { sequelize }
