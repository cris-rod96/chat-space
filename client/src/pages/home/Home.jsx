import { Sidebar } from '../../components'
import { FaPaperclip } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegSmile } from 'react-icons/fa'
import { MdKeyboardVoice } from 'react-icons/md'

import chatSVG from '/chat_image.svg'

const Home = () => {
  const user = {
    id: 'afna',
    name: 'Eve Davis',
    email: 'eve@example.com',
    password: 'zxcvb',
    image:
      'https://reductress.com/wp-content/uploads/2019/06/petite-woman-1-820x500.jpg',
    status: true
  }

  const messages = [
    {
      id: '123',
      content: 'Hola, ¿Cómo estás?',
      UserSendId: 'afna'
    },
    {
      id: '345',
      content: '¡Hola! Estoy bien, ¿Y tú?',
      UserSendId: 'rezna'
    },
    {
      id: '567',
      content: 'Estoy bien también, gracias por preguntar.',
      UserSendId: 'afna'
    },
    {
      id: '789',
      content: '¿Qué has estado haciendo últimamente?',
      UserSendId: 'afna'
    },
    {
      id: '901',
      content:
        'He estado ocupada con el trabajo y también he estado leyendo mucho. ¿Y tú?',
      UserSendId: 'rezna'
    },
    {
      id: '234',
      content:
        '¡Vaya! Suena interesante. Yo he estado trabajando en un proyecto personal y también he estado saliendo más a caminar.',
      UserSendId: 'afna'
    },
    {
      id: '456',
      content: 'Eso suena genial. ¿En qué consiste tu proyecto personal?',
      UserSendId: 'rezna'
    },
    {
      id: '678',
      content:
        'Es un proyecto de arte digital. Estoy explorando diferentes estilos y técnicas.',
      UserSendId: 'afna'
    },
    {
      id: '910',
      content: '¡Eso suena emocionante! ¿Puedo ver algo de tu trabajo?',
      UserSendId: 'rezna'
    },
    {
      id: '111',
      content: 'Claro, ¡te enviaré algunas muestras pronto!',
      UserSendId: 'afna'
    },
    {
      id: '222',
      content: '¡Estoy deseando verlo!',
      UserSendId: 'rezna'
    }
  ]

  return (
    <main className="w-full h-screen overflow-hidden">
      <Sidebar />
      <section className="ml-[24vw] w-[calc(100%-24vw)] h-full text-gray-50">
        {/* <div className="w-full h-full flex justify-center items-center flex-col gap-3">
          <div className="w-64 h-64 relative">
            <img src={chatSVG} alt="" className="absolute w-full h-full" />
          </div>
          <div className="max-w-4xl">
            <p className="text-gray-400 text-lg text-center font-light tracking-wide">
              Para comenzar a chatear, por favor selecciona un contacto de tu
              lista de amigos conectados. Una vez que hayas elegido un contacto,
              podrás iniciar una conversación y enviar mensajes en tiempo real.
              ¡Esperamos que disfrutes chateando!
            </p>
          </div>
        </div> */}
        <div className="relative flex flex-col w-full h-full gap-2">
          {/* Header */}
          <header className="absolute top-0 h-20 bg-gray-500/10 w-full px-5 flex items-center gap-3 py-3">
            <div className="w-12 h-12 relative rounded-full">
              <img
                src={user.image}
                alt=""
                className="absolute w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col h-full justify-between w-full">
              <h3 className="text-lg text-white font-bold">{user.name}</h3>
              <h5 className="text-sm text-gray-400 font-light">
                últ. vez hoy a las 20:44
              </h5>
            </div>
            <div className="px-5 flex items-center gap-10">
              <FaPaperclip size={24} />
              <BsThreeDotsVertical size={24} />
            </div>
          </header>
          {/* Chat */}
          <div className="my-[90px] h-full w-full px-10 mx-auto overflow-y-auto flex flex-col gap-4">
            {messages.map((message) => {
              if (message.UserSendId === user.id) {
                return (
                  <div className="flex justify-end " key={message.id}>
                    <div className="pl-2 pr-7 py-3 border border-gray-500/20 max-w-xl rounded-lg bg-gray-600 ">
                      <p className="">{message.content}</p>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="flex justify-start" key={message.id}>
                    <div className="pl-2 pr-7 py-3 border border-gray-500/20 max-w-xl rounded-lg bg-gray-800 ">
                      <p className="">{message.content}</p>
                    </div>
                  </div>
                )
              }
            })}
          </div>
          {/* Footer */}
          <footer className="absolute bottom-0 h-20 bg-gray-500/10 w-full px-5 py-2 flex items-center">
            <div className="px-5">
              <FaRegSmile size={30} />
            </div>
            <div className="w-full">
              <input
                type="text"
                name=""
                id=""
                className="h-12 w-full outline-none rounded-lg pl-2 text-black placeholder:text-gray-600"
                placeholder="Escribe un mensaje"
              />
            </div>
            <div className="px-5">
              <MdKeyboardVoice size={30} />
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}

export default Home
