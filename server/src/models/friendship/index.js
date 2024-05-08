import { DataTypes } from 'sequelize'

const FriendshipModel = (sequelize) => {
  sequelize.define(
    'Friendship',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      friendAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
      },

      //   Foreign Keys
      UserdId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      FriendId: {
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

export default FriendshipModel
