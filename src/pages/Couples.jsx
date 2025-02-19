import Navbar from '../components/Navbar'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'

const Couples = () => {
  return (
    <div className="w-screen bg-doa bg-repeat bg-inherit bg-center">
      <div className="w-full min-h-screen bg-black bg-opacity-20 flex flex-col gap-5 items-center justify-center p-5">
        <Navbar />
        {/* Salam Card */}
        <div className="flex flex-col items-center justify-center gap-5 h-[500px] text-third text-base max-w-xl mx-auto rounded-xl p-8 bg-opacity-10 border-2 border-primary">
          <h1 className="text-center">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ
          </h1>
          <h2 className="text-center font-Bree">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </h2>
          <p className="text-center font-light">
            Maha suci Allah SWT yang telah menciptakan makhluk-Nya
            berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami
            bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara
            pernikahan kami
          </p>
        </div>

        <h1 className="text-white font-Bree text-3xl">Mempelai</h1>
        {/* Mempelai Card */}
        <div className="max-w-xl  w-full min-h-screen flex flex-col md:max-w-4xl md:flex-row gap-10 justify-center mb-24 items-center">
          <div className="w-full h-[500px] md:h-[700px] md:justify-center md:gap-4 bg-primary rounded-xl border-[3px] border-whites shadow-lg p-12 flex flex-col items-center justify-start gap-2">
            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src="./mempelai.webp"
                alt="Pria"
                className="w-24 h-28 top-0"
              />
              <h1 className="font-rochester text-5xl text-lime-300">Bagas</h1>
              <h1 className="font-Bree text-lg text-white">
                Bagas Satria Nugroho
              </h1>
              <p className="font-Poppins text-white text-center">
                Putra Pertama <br /> Bapak Sujarwono dan Ibu Sukarsih
              </p>
              <AiOutlineInstagram size={60} color="white" />
              <a
                href="https://www.instagram.com/bagassatria.n/"
                target="_blank"
              >
                <small className="font-Bree text-xl text-white">
                  @bagassatria.n
                </small>
              </a>
            </AnimationOnScroll>
          </div>

          <div
            className="w-full h-[500px] md:h-[700px] md:justify-center mnpm start
          d:gap-4 bg-primary rounded-xl border-[3px] border-whites shadow-lg p-12 flex flex-col items-center justify-start gap-2"
          >
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src="./mempelai.webp"
                alt="Pria"
                className="w-24 h-28 top-0"
              />
              <h1 className="font-rochester text-5xl text-lime-300">Berida</h1>
              <h1 className="font-Bree text-lg text-white">
                Berida Kholiffatun Afiffah
              </h1>
              <p className="font-Poppins text-white text-center">
                Putri Pertama <br /> Bapak Sadiran dan Ibu Emi Tririyaningsih
              </p>
              <AiOutlineInstagram size={60} color="white" />
              <a href="https://www.instagram.com/beridaaf/" target="_blank">
                <small className="font-Bree text-xl text-white">
                  @beridaaf
                </small>
              </a>
            </AnimationOnScroll>
          </div>
        </div>

        {/* <section className="py-6 bg-third/30 rounded-xl mb-20">
          <h1 className="text-white text-3xl font-Bree text-center">Gallery</h1>
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src="https://source.unsplash.com/random/301x301/"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?0"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?1"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?2"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?3"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?4"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?5"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?6"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?7"
            />
            <img
              src="https://source.unsplash.com/random/302x302/"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
            />
          </div>
        </section> */}
      </div>
    </div>
  )
}

export default Couples
