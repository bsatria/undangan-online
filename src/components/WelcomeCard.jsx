import { MdOutlineInsertInvitation } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'

const WelcomeCard = () => {
  const { nama } = useParams()
  return (
    <div className="w-screen h-screen bg-home bg-no-repeat bg-cover bg-center mix-blend-darken">
      <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
        <div className="max-w-3xl w-full flex flex-col gap-4 items-center mx-auto">
          <img src="mempelai.webp" alt="Mempelai" className="w-36" />
          <h1 className="font-rochester font-bold text-5xl">
            <span className="text-white">Bagas</span> &{' '}
            <span className="text-white">Berida</span>
          </h1>
          <p className="text-white font-Poppins">Kepada Bapak/Ibu/Saudara/I</p>
          <h1 className="text-white text-lg font-Bree">{nama}</h1>
          <p className="text-white font-Poppins text-center ">
            Kami mengundang anda untuk menghadiri ke pernikahan kami
          </p>
          <Link
            to="/home"
            className="bg-slate-300 hover:bg-slate-200 transition-all duration-300 px-7 py-2 rounded-full font-Bree flex items-center gap-1"
          >
            <MdOutlineInsertInvitation />
            Buka Undangan
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WelcomeCard
