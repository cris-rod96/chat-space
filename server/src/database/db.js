import { Sequelize } from 'sequelize'
import { POSTGRES_URI } from '../config/envs.js'
import { FriendshipModel, UserModel, MessageModel } from '../models/index.js'

const sequelize = new Sequelize(POSTGRES_URI, { logging: false, native: false })

UserModel(sequelize)
MessageModel(sequelize)
FriendshipModel(sequelize)

const { User, Friendship, Message } = sequelize.models

User.hasMany(Message)
Message.belongsTo(User)

User.hasMany(Friendship)
Friendship.belongsTo(User)

export { sequelize, User, Friendship, Message }
