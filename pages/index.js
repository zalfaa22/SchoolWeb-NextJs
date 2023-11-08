import React from "react";
import Artikelbaru from "../components/artikelbaru";
import Dokumentasi from "../components/dokumentasi";
import Keunggulan from "../components/keunggulan";

function Index() {
  return (
    <>
      <div className="bg-white">
        <main
          className=" bg-background flex "
          style={{
            backgroundImage: "url(home/background.png)",
            backgroundSize: "cover",
            overflowY: "auto", // Mengizinkan konten digulir jika melebihi tinggi layar
            height: "122vh",
          }}
        >
          <img class="absolute right-0 lg:top-[1100px]" src="home/side1.png" />
          <img class="absolute left-0 lg:top-[1680px]" src="home/side2.png" />
          <img class=" absolute right-0  lg:top-[3100px]" src="home/side3.png" />

          {/* Headline */}
          <div className="w-7/12 flex flex-row items-center mb-20 px-[90px]">
            <div>
              <div>
                <h3 className="font-poppins text-white font-bold text-5xl leading-[60px] tracking-tighter">
                  Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
                </h3>
                <p className="text-xl text-white font-normal mt-5 pr-5">
                  jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
                  untuk kehidupan yang lebih bermanfaat
                </p>
              </div>
              <div class="mt-9 h-12 px-6 py-3 bg-purple-500 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                <button class="text-white text-base font-normal font-Poppins">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        </main>

        <div class="my-16 ml-28 ">
          <h2 class="text-purple-500 text-2xl font-medium font-Poppins">
            Kenapa Memilih Kami
          </h2>
          <h1 class="text-blue-950 text-5xl font-bold font-SF Pro Rounded mt-4">
            Keunggulan Sekolah Kami
          </h1>
        </div>

        <Keunggulan />

        <div class="lg:my-14 pb-14">
          <div class="container px-32 py-16 mx-auto">
            <div class="lg:-mx-6 lg:flex lg:items-center">
              <img
                class=" object-center lg:w-1/3 lg:mx-12 w-full h-full"
                src="home/tentang kami.png"
                alt=""
              />

              <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <h1 class="text-4xl font-bold text-gray-800 dark:text-white lg:text-4xl lg:w-96">
                  Tentang Kami
                </h1>

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                  Sekolah Kami merupakan sekolah informal yang dikelola untuk
                  membantu anak mengembangkan bakat dan kemampuannya. Dengan
                  memberikan kurikulum terbaik agar anak bisa memilih minat nya
                  dan fokus mengembangkan minat tersebut. Sekolah ini didirikan
                  sejak tahun 1989 dan terus berkembang hingga saat ini.
                </p>

                <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-10">
                  <a
                    rel=""
                    href="#"
                    class="px-8 py-3 text-lg bg-purple-500 text-white font-normal rounded-3xl border-gray-100"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" lg:w-[1263px] lg:h-[650px] pt-5 bg-indigo-50 ">
          <div class="mt-16 mb-5 ml-28 ">
            <h2 class="text-purple-500 text-2xl font-medium font-Poppins">
              Galeri
            </h2>
            <div class="text-blue-950 text-5xl font-bold font-SF Pro Rounded mt-4 inline-flex">
              <h1>Dokumentasi Sekolah</h1>
              <div class="px-4 py-3 absolute right-28 bg-amber-400 rounded-lg flex-col justify-start items-start gap-1 ">
                <div class="text-white text-xl font-medium font-Poppins">
                  Lihat Semua
                </div>
              </div>
            </div>
          </div>
          <div class="px-28">
            <Dokumentasi />
          </div>
        </div>

        <div class="py-6 mt-28 text-center text-gray-800">
          <h2 class="text-blue-400 text-2xl font-normal font-Poppins mb-3">
            Artikel seputar pendidikan
          </h2>
          <h1 class="mb-3 text-5xl font-bold font-SF Pro Rounded">
            Artikel Terbaru
          </h1>
        </div>

        <div class="px-20">
          <Artikelbaru />
        </div>
        <div class="mb-28"></div>
      </div>
    </>
  );
}

export default Index;
