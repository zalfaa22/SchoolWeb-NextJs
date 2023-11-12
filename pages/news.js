import React from "react";
import Artikel from "../components/news";
import Link from "next/link";

function News() {
  return (
    <>
      <div className="bg-white">
        <main
          className=" bg-background flex "
          style={{
            backgroundImage: "url(news/background.png)",
            backgroundSize: "cover",
            overflowY: "auto", 
            height: "117vh",
          }}
        >
          {/* Headline */}
          <div className="w-72 md:w-2/3 lg:w-7/12 flex flex-row items-center mb-20 px-10 lg:px-[90px]">
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl lg:text-5xl leading-[60px] tracking-tighter">
                  Artikel
                </h3>
                <p className="text-lg lg:text-xl text-white font-normal mt-5 pr-5 lg:line-clamp-2">
                  Artikel menarik seputar pendidikan yang bisa anda baca secara
                  gratis
                </p>
              </div>
            </div>
          </div>
        </main>
        <div class="lg:pt-14 lg:pb-14 ">
          <div class="container px-10 py-16 mx-auto">
            <div class="lg:-mx-6 lg:flex lg:items-center">
              <img
                class=" object-center lg:w-[550px] lg:ml-12 lg:mr-2 w-full h-full"
                src="news/image.png"
                alt=""
              />

              <div class=" lg:w-1/2 lg:px-5">
                <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-4 lg:mt-1">
                  <a class="mr-20 lg:mr-0 px-3 lg:px-6 py-1 text-sm lg:text-lg bg-purple-500 text-white font-normal  rounded-3xl border-gray-100">
                    12 Desember 2021
                  </a>
                </div>
                <h2 class="text-lg lg:text-[32px] font-bold text-blue-950  mt-2 lg:mt-2 leading-tight">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                </h2>

                <p
                  class="max-w-lg md:max-w-3xl mt-3 text-neutral-700 text-base lg:text-xl font-normal  tracking-tight"
                  style={{ textAlign: "justify" }}
                >
                  Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                  kembali belajar di sekolah. Saya ingin bertemu dengan
                  teman-teman sekelas saya. begitupun sebagian besar orang tua,
                  mimpi mereka adalah melihat anaknya kembali ke aktivitas
                  sekolah secara langsung. Orang tua selama ini banyak yang
                  mengaku lelah karena anak-anaknya selama pandemi lebih banyak
                  menghabiskan waktu di. . .
                </p>
                <p class="text-neutral-700 text-sm font-normal  my-1">
                  Penulis : Shinta A.P
                </p>
                <Link href="/article">
                  <p class="text-blue-400 text-sm font-semibold hover:underline my-1">
                    Baca selengkapnya
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Artikel />
      </div>
    </>
  );
}

export default News;
