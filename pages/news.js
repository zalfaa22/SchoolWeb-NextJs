import React from "react";
import Artikel from "../components/news";
import Link from "next/link";

function News() {
  return (
    <>
      <div className="bg-white">
        <div
          className="bg-cover h-auto bg-center"
          style={{ backgroundImage: "url('news/bg.svg')" }}
        >
          <div class="container px-6 py-20 mx-auto lg:px-20">
            <div class="items-center lg:flex">
              <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg text-center md:text-left lg:text-left md:px-6 mt-8 md:mt-10 lg:mt-0">
                  <h1 class="text-3xl font-bold text-white lg:text-5xl">
                    Artikel
                  </h1>

                  <p class="mt-3 text-white lg:text-xl">
                    Artikel menarik seputar pendidikan yang bisa anda baca
                    secara gratis{" "}
                  </p>
                </div>
              </div>

              <div class="flex items-center justify-center w-full mt-6 lg:mt-14 lg:w-1/2">
                <img
                  class="px-8 md:px-28 lg:px-0 h-full lg:max-w-xl"
                  src="news/hero.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="lg:pb-6"></div>
        </div>

        <div class="lg:pt-14 lg:pb-14 ">
          <div class="container px-10 py-16 mx-auto">
            <div class="lg:-mx-6 lg:flex lg:items-center">
              <img
                class=" object-center lg:w-[550px] lg:ml-12 lg:mr-2 w-full h-full"
                src="news/image.png"
                alt=""
              />

              <div class=" lg:w-1/2 lg:px-5">
                <div class="flex flex-col space-y-4 items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-4 lg:mt-1">
                  <a class="mr-auto lg:mr-0 px-3 lg:px-6 py-1 text-sm lg:text-lg bg-purple-500 text-white font-normal  rounded-3xl border-gray-100">
                    12 Desember 2021
                  </a>
                </div>
                <Link href="/article">
                  <h2 class="text-lg lg:text-[32px] font-bold text-blue-950  mt-2 lg:mt-2 leading-tight">
                    Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke
                    Sekolah
                  </h2>
                </Link>
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
