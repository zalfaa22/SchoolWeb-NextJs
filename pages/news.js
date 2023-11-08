import React from "react";
import Artikel from "../components/news";

function News() {
  return (
    <>
      <div className="bg-white">
        <main
          className=" bg-background flex "
          style={{
            backgroundImage: "url(news/background.png)",
            backgroundSize: "cover",
            overflowY: "auto", // Mengizinkan konten digulir jika melebihi tinggi layar
            height: "117vh",
          }}
        >
          {/* Headline */}
          <div className="w-7/12 flex flex-row items-center mb-20 px-[90px]">
            <div>
              <div>
                <h3 className="font-poppins text-white font-bold text-5xl leading-[60px] tracking-tighter">
                  Artikel
                </h3>
                <p className="text-xl text-white font-normal mt-5 pr-5">
                  Artikel menarik seputar pendidikan yang bisa anda <br /> baca
                  secara gratis
                </p>
              </div>
            </div>
          </div>
        </main>
        <div class="pt-14 pb-14 ">
          <div class="container px-10 py-16 mx-auto">
            <div class="lg:-mx-6 lg:flex lg:items-center">
              <img
                class=" object-center lg:w-[550px] lg:ml-12 lg:mr-2 w-full h-full"
                src="news/image.png"
                alt=""
              />

              <div class=" lg:w-1/2 lg:px-5">
                <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-1">
                  <a
                    rel=""
                    href="#"
                    class="px-6 py-1 text-lg bg-purple-500 text-white font-normal font-Poppins rounded-3xl border-gray-100"
                  >
                    12 Desember 2021
                  </a>
                </div>
                <h2 class="lg:text-[32px] font-bold text-blue-950 font-Poppins lg:mt-2 leading-tight">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                </h2>

                <p class="max-w-lg mt-3 text-neutral-700 text-xl font-normal font-Poppins tracking-tight" style={{ textAlign: "justify" }}>
                  Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                  kembali belajar di sekolah. Saya ingin bertemu dengan
                  teman-teman sekelas saya. begitupun sebagian besar orang tua,
                  mimpi mereka adalah melihat anaknya kembali ke aktivitas
                  sekolah secara langsung. Orang tua selama ini banyak yang
                  mengaku lelah karena anak-anaknya selama pandemi lebih banyak
                  menghabiskan waktu di. . .
                </p>
                <p class="text-neutral-700 text-base font-normal font-Poppins my-1">Penulis : Shinta A.P</p>
                <p class="text-blue-400 text-base font-semibold font-Poppins my-1">Baca selengkapnya</p>
              </div>
            </div>
          </div>
        </div><Artikel />
      </div>
    </>
  );
}

export default News;
