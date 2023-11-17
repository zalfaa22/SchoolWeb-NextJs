import React from "react";
import Link from "next/link";
import Artikelbaru from "../components/artikelbaru";
import Dokumentasi from "../components/dokumentasi";
import Keunggulan from "../components/keunggulan";

function Index() {
  return (
    <>
      <div className="bg-white">
        <main
          className="bg-background flex h-[40rem] md:h[50rem] lg:h-[50rem]"
          style={{
            backgroundImage: "url(home/background.png)",
            backgroundSize: "cover",
            overflowY: "auto",
          }}
        >
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

          {/* Headline */}
        </main>
        <div className="absolute top-36 md:top-44 lg:top-40 text-center lg:text-left md:text-left md:w-2/3 lg:w-7/12 lg:flex lg:flex-row items-center mb-20 px-10 md:px-10 lg:px-[90px]">
          <div>
            <div>
              <h3 className=" text-white font-bold text-2xl md:text-4xl lg:text-5xl lg:leading-[60px] tracking-tighter">
                Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
              </h3>
              <p className="text-lg lg:text-xl text-white font-normal mt-5 lg:pr-5">
                jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
                untuk kehidupan yang lebih bermanfaat
              </p>
            </div>
            <div class=" mt-6 lg:mt-9 h-9 lg:h-12 px-6 py-3 bg-purple-500 rounded-3xl justify-center items-center gap-2.5 inline-flex">
              <button class="text-white text-base font-normal">
                Daftar Sekarang
              </button>
            </div>
          </div>
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
                    class="px-3 lg:px-5 py-2 mr-20 md:mr-0 lg:mr-0 lg:py-2 text-base lg:text-lg bg-purple-500 text-white font-normal rounded-3xl border-gray-100"
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
              <div class="text-blue-950 text-2xl lg:text-5xl font-bold font-SF Pro Rounded lg:mt-4 lg:inline-flex">
                <h1>Dokumentasi Sekolah</h1>
                <Link href="/galery">
                  <div class="px-2 py-1 lg:px-4 lg:py-3 absolute lg:right-28 bg-amber-400 hover:bg-amber-500 rounded-lg flex-col justify-start items-start gap-1 ">
                    <div class="text-white text-sm lg:text-xl font-medium ">
                      Lihat Semua
                    </div>
                  </div>
                </Link>
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
