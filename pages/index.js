import React from "react";
import Link from "next/link";
import Artikelbaru from "../components/artikelbaru";
import Dokumentasi from "../components/dokumentasi";
import Keunggulan from "../components/keunggulan";

function Index() {
  return (
    <>
      <div className="bg-white">
        <img
          class="hidden lg:flex lg:absolute lg:right-0 lg:top-[1100px]"
          src="home/side1.png"
        />
        <img
          class="hidden lg:flex lg:absolute lg:left-0 lg:top-[1680px]"
          src="home/side2.png"
        />
        <img
          class="hidden lg:flex lg:absolute lg:right-0 lg:top-[3100px]"
          src="home/side3.png"
        />

        <div
          className="bg-cover h-auto bg-center"
          style={{ backgroundImage: "url('home/bg.svg')" }}
        >
          <div class="container px-6 py-20 lg:py-0 mx-auto lg:px-20">
            <div class="items-center lg:flex">
              <div class="w-full lg:w-4/5 ">
                <div class="lg:max-w-lg text-center md:text-left lg:text-left md:px-6 mt-8 md:mt-10 lg:mt-0">
                  <h2 class="text-3xl font-bold text-white lg:text-5xl lg:-mr-[20rem] lg:leading-[60px]">
                    Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
                  </h2>

                  <p class="mt-3 text-white lg:text-xl lg:-mr-[15rem]">
                    jelajahi semua pengetahuan dan ilmu yang berguna bersama
                    kami, untuk kehidupan yang lebih bermanfaat
                  </p>

                  <button class="w-auto px-5  py-2 mt-6 text-base tracking-wider text-white transition-colors duration-300 transform bg-purple-500 rounded-3xl lg:w-auto hover:bg-purple-400 focus:outline-none focus:bg-blue-500 lg:-mr-[10rem]">
                    Daftar Sekarang
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-center w-full mt-6 lg:mt-5 lg:w-">
                <img
                  class="md:px-20 lg:pr-5 h-full lg:max-w-3xl"
                  src="home/hero.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="lg:pb-40"></div>
        </div>

        <div class="mt-7 lg:my-16 ml-4 md:ml-10 lg:ml-16 ">
          <h2 class="text-purple-500 text-base md:text-lg lg:text-2xl font-medium ">
            Kenapa Memilih Kami
          </h2>
          <h1 class="text-blue-950 text-2xl lg:text-5xl font-bold font-SF Pro Rounded lg:mt-4">
            Keunggulan Sekolah Kami
          </h1>
        </div>

        <Keunggulan />

        <div class="lg:my-14 pb-1 lg:pb-14">
          <div class="container px-7 lg:px-32 py-16 mx-auto">
            <div class="lg:-mx-6 lg:flex lg:items-center">
              <img
                class=" object-center md:w-3/5 lg:w-1/3 md:ml-28 lg:mx-12 w-full h-full"
                src="home/tentang kami.png"
                alt=""
              />

              <div class="mt-8 lg:w-1/2 lg:px-6 md:px-16 lg:mt-0">
                <h1 class="font-bold text-blue-950  text-lg lg:text-4xl lg:w-96">
                  Tentang Kami
                </h1>

                <p class="max-w-lg mt-2 lg:mt-6 lg:text-lg text-blue-950  ">
                  Sekolah Kami merupakan sekolah informal yang dikelola untuk
                  membantu anak mengembangkan bakat dan kemampuannya. Dengan
                  memberikan kurikulum terbaik agar anak bisa memilih minat nya
                  dan fokus mengembangkan minat tersebut. Sekolah ini didirikan
                  sejak tahun 1989 dan terus berkembang hingga saat ini.
                </p>

                <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-5 lg:mt-8">
                  <a
                    rel=""
                    href="#"
                    class="block px-3 lg:px-5 py-2 mr-auto md:mr-auto lg:mr-0 lg:py-2 text-base lg:text-lg bg-purple-500 text-white font-normal rounded-3xl border-gray-100"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div class="   pt-5 pb-16 bg-indigo-50 ">
            <div class="mt-3 lg:mt-16 mb-5 lg:ml-28 ml-10">
              <h2 class="text-purple-500 text-base lg:text-2xl font-medium ">
                Galeri
              </h2>
              <div class="text-blue-950 text-2xl lg:text-5xl font-bold font-SF Pro Rounded lg:mt-4 flex justify-between items-center">
                <h1 class="mr-2">Dokumentasi Sekolah</h1>
                <div class="flex items-center pr-10 lg:pr-28 ">
                  <Link href="/galery">
                    <div class="block px-2 py-1 lg:px-4 lg:py-3 bg-amber-400 hover:bg-amber-500 rounded-lg  items-center">
                      <div class="text-white text-sm lg:text-xl font-medium text-right">
                        Lihat Semua
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div class="px-16 mt-14 lg:mt-0 lg:px-28">
              <Dokumentasi />
            </div>
          </div>
        </div>

        <div class="py-6 mt-9 lg:mt-28 text-center">
          <h2 class="text-blue-400 text-base lg:text-2xl font-normal  mb-3">
            Artikel seputar pendidikan
          </h2>
          <h1 class="mb-3 text-2xl lg:text-5xl font-bold font-SF Pro Rounded text-blue-950">
            Artikel Terbaru
          </h1>
        </div>

        <div class="px-14 lg:px-20">
          <Artikelbaru />
        </div>
        <div class="pb-10 lg:pb-28"></div>
      </div>
    </>
  );
}

export default Index;
