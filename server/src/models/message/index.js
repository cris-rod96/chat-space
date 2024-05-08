import { DataTypes } from 'sequelize'

const MessageModel = (sequelize) => {
  sequelize.define(
    'Message',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      sendAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
      },

      //   Foreign Keys
      UserSendId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      UserReceptorId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    },
    { timestamps: false }
  )
}

export default MessageModel
