import Navbar from '../components/Navbar'
import { SiHandshake } from 'react-icons/si'
import { RiCalendarEventLine } from 'react-icons/ri'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GiEternalLove } from 'react-icons/gi'
import Iframe from 'react-iframe'

const Event = () => {
  return (
    <div className="w-full min-h-screen bg-secondary bg-cover bg-center ">
      <Navbar />
      <div className="max-w-5xl w-full mx-auto items-center p-5 flex flex-col gap-5">
        <h1 className="font-rochester text-primary text-5xl text-center">
          Susunan Acara & Lokasi
        </h1>
        {/* Card */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="w-full h-full flex flex-col md:flex-row">
            <div className="w-full h-full border-[8px] border-third bg-text bg-cover bg-top flex flex-col items-center justify-center p-3 rounded-3xl gap-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <SiHandshake color="white" size={40} />
              </div>
              <h1 className="font-Bree text-3xl text-third">AKAD NIKAH</h1>
              <div
                className="flex flex-col items-center justify-center text-third font-Open
               text-center"
              >
                <h2>Bertempat Di</h2>
                <p>
                  Balai Desa Pemerintah Kalurahan Ambarketawang, Patukan,
                  Ambarketawang, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa
                  Yogyakarta 55294
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <RiCalendarEventLine color="white" size={40} />
                </div>
                <p>
                  Minggu <br />
                  29 January 2023
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <AiOutlineClockCircle color="white" size={40} />
                </div>
                <p>08.00 WIB</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col md:flex-row">
            <div className="w-full h-full border-[8px] border-third bg-text bg-cover bg-top flex flex-col items-center justify-center p-3 rounded-3xl gap-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <GiEternalLove color="white" size={40} />
              </div>
              <h1 className="font-Bree text-3xl text-third">RESEPSI</h1>
              <div
                className="flex flex-col items-center justify-center text-third font-Open
               text-center"
              >
                <h2>Bertempat Di</h2>
                <p>
                  Balai Desa Pemerintah Kalurahan Ambarketawang, Patukan,
                  Ambarketawang, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa
                  Yogyakarta 55294
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <RiCalendarEventLine color="white" size={40} />
                </div>
                <p>
                  Minggu <br />
                  29 January 2023
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <AiOutlineClockCircle color="white" size={40} />
                </div>
                <p>10.30 WIB - 11.30 WIB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row mb-24">
          <div className="w-full h-full border-[8px] border-third bg-text bg-cover bg-top flex flex-col items-center justify-center p-3 rounded-3xl gap-2">
            <h1 className="font-Bree text-3xl text-third">LOKASI</h1>
            <Iframe
              url="/"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15811.614246166266!2d110.3202671!3d-7.8000342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0dd6fc814595192!2sPemerintah%20Kalurahan%20Ambarketawang!5e0!3m2!1sen!2sid!4v1673825755744!5m2!1sen!2sid"
              className="rounded-xl w-full h-96"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
