import { Sidebar } from '../../components'
import { FaPaperclip } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegSmile } from 'react-icons/fa'
import { MdKeyboardVoice } from 'react-icons/md'

import chatSVG from '/chat_image.svg'

const Home = () => {
  const user = {
    name: 'Eve Davis',
    email: 'eve@example.com',
    password: 'zxcvb',
    image:
      'https://reductress.com/wp-content/uploads/2019/06/petite-woman-1-820x500.jpg',
    status: true
  }
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
          <div className="my-[90px] h-full w-full px-10 mx-auto overflow-y-auto flex flex-col gap-2">
            <div className="flex justify-end">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-600 ">
                <p className="">Hola</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-800 ">
                <p className="">Hola, ¿Cómo estas?</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-600 ">
                <p className="">Hola</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-800 ">
                <p className="">Hola, ¿Cómo estas?</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-600 ">
                <p className="">Hola</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-600 ">
                <p className="">Hola</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-600 ">
                <p className="">Hola</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-600 ">
                <p className="">Hola</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-800 ">
                <p className="">Hola, ¿Cómo estas?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-800 ">
                <p className="">Hola, ¿Cómo estas?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-800 ">
                <p className="">Hola, ¿Cómo estas?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-800 ">
                <p className="">Hola, ¿Cómo estas?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-800 ">
                <p className="">Hola, ¿Cómo estas?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-800 ">
                <p className="">Hola, ¿Cómo estas?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="pl-2 pr-7 py-3 border border-gray-500/20 w-max rounded-lg bg-gray-800 ">
                <p className="">Hola, ¿Cómo estas?</p>
              </div>
            </div>
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
