import { Message } from '../../database/db.js'

const createMessage = async (req, res) => {
  try {
    const { id: UserSendId } = req.user
    const { content, user_id: UserReceptorId } = req.body
    await Message.create({
      content,
      UserSendId,
      UserReceptorId
    })
    return res.status(201).json({
      message: 'Mensaje enviado'
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export default createMessage
