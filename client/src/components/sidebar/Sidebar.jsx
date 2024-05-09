import { RiSearchLine } from 'react-icons/ri'
const Sidebar = () => {
  const user = {
    name: 'Eve Davis',
    email: 'eve@example.com',
    password: 'zxcvb',
    image:
      'https://reductress.com/wp-content/uploads/2019/06/petite-woman-1-820x500.jpg',
    status: true
  }
  return (
    <aside className="w-[24vw]  h-full fixed border-r border-gray-500/20 bg-gray-500/10 flex flex-col">
      {/* Section perfil user */}
      <section className="p-10 flex flex-col justify-center items-center gap-3 border-b border-gray-500/10">
        <div className="relative w-36 h-36 rounded-full border-4 border-gray-500/20">
          <img
            src={user.image}
            alt=""
            className="absolute w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-xl text-gray-300">{user.name}</h3>
      </section>

      {/* Section Search */}
      <section className="px-5 flex border-b border-gray-500/20 group">
        <div className="flex justify-center items-center px-3">
          <RiSearchLine
            size={20}
            className="text-gray-500/50 group-focus-within:text-gray-300"
          />
        </div>
        <input
          type="text"
          className="px-2 py-5 bg-transparent outline-none text-gray-300 w-full placeholder:text-gray-500/50"
          placeholder="Buscar o empezar un chat nuevo"
        />
      </section>

      {/* Section Chats */}

      <section className="overflow-y-auto">
        <article className="px-5 py-7 border-b border-gray-500/20 flex gap-3 items-center hover:bg-gray-500/10 cursor-pointer transition-colors duration-300">
          <div className="w-14 h-14 relative rounded-full">
            <img
              src={user.image}
              alt=""
              className="absolute w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between  h-full">
              <h3 className="text-gray-300 font-bold text-sm">{user.name}</h3>
              <h5 className="text-gray-400 text-sm">22:30</h5>
            </div>
            <p className="text-gray-400 text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, omnis.
            </p>
          </div>
        </article>
        <article className="px-5 py-7 border-b border-gray-500/20 flex gap-3 items-center">
          <div className="w-14 h-14 relative rounded-full">
            <img
              src={user.image}
              alt=""
              className="absolute w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between  h-full">
              <h3 className="text-gray-300 font-bold text-sm">{user.name}</h3>
              <h5 className="text-gray-400 text-sm">22:30</h5>
            </div>
            <p className="text-gray-400 text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, omnis.
            </p>
          </div>
        </article>
        <article className="px-5 py-7 border-b border-gray-500/20 flex gap-3 items-center">
          <div className="w-14 h-14 relative rounded-full">
            <img
              src={user.image}
              alt=""
              className="absolute w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between  h-full">
              <h3 className="text-gray-300 font-bold text-sm">{user.name}</h3>
              <h5 className="text-gray-400 text-sm">22:30</h5>
            </div>
            <p className="text-gray-400 text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, omnis.
            </p>
          </div>
        </article>
        <article className="px-5 py-7 border-b border-gray-500/20 flex gap-3 items-center hover:bg-gray-500/10 cursor-pointer transition-colors duration-300">
          <div className="w-14 h-14 relative rounded-full">
            <img
              src={user.image}
              alt=""
              className="absolute w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between  h-full">
              <h3 className="text-gray-300 font-bold text-sm">{user.name}</h3>
              <h5 className="text-gray-400 text-sm">22:30</h5>
            </div>
            <p className="text-gray-400 text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, omnis.
            </p>
          </div>
        </article>
        <article className="px-5 py-7 border-b border-gray-500/20 flex gap-3 items-center">
          <div className="w-14 h-14 relative rounded-full">
            <img
              src={user.image}
              alt=""
              className="absolute w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between  h-full">
              <h3 className="text-gray-300 font-bold text-sm">{user.name}</h3>
              <h5 className="text-gray-400 text-sm">22:30</h5>
            </div>
            <p className="text-gray-400 text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, omnis.
            </p>
          </div>
        </article>
        <article className="px-5 py-7 border-b border-gray-500/20 flex gap-3 items-center">
          <div className="w-14 h-14 relative rounded-full">
            <img
              src={user.image}
              alt=""
              className="absolute w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between  h-full">
              <h3 className="text-gray-300 font-bold text-sm">{user.name}</h3>
              <h5 className="text-gray-400 text-sm">22:30</h5>
            </div>
            <p className="text-gray-400 text-sm font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, omnis.
            </p>
          </div>
        </article>
      </section>
    </aside>
  )
}

export default Sidebar
