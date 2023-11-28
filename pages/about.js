import React, { useState } from "react";
import Link from "next/link";
import Keunggulan from "/components/keunggulan";
import Anggota from "/components/anggota";

function About() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="bg-white">
        <div
          className="bg-cover h-auto bg-center"
          style={{ backgroundImage: "url('about/bg.svg')" }}
        >
          <div class="container px-6 py-20 mx-auto lg:px-20">
            <div class="items-center lg:flex">
              <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg text-center md:text-left lg:text-left md:px-6 mt-8 md:mt-10 lg:mt-0">
                  <h1 class="text-3xl font-bold text-white lg:text-5xl">
                    Tentang Kami
                  </h1>

                  <p class="mt-3 text-white lg:text-xl">
                    Informasi tentang kami
                  </p>
                </div>
              </div>

              <div class="flex items-center justify-center w-full mt-6 lg:mt-14 lg:w-1/2">
                <img
                  class="px-8 md:px-20 lg:px-0 lg:pr-24 h-full lg:max-w-2xl"
                  src="about/hero.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="lg:pb-24"></div>
        </div>

        <div class="my-16 ml-7 lg:ml-16 ">
          <h2 class="text-blue-400 text-base lg:text-2xl font-medium ">
            Profil Singkat
          </h2>
          <h1 class="text-blue-950 text-2xl lg:text-5xl font-bold font-SF Pro Rounded mt-4 mb-4 lg:pr-96 leading-tight">
            Sekolah Alam <br /> Insan Mulia Berkarya
          </h1>
          <p class="text-neutral-700 lg:text-2xl font-medium  pr-10 lg:leading-normal">
            Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu
            anak mengembangkan bakat dan kemampuannya. Dengan memberikan
            kurikulum terbaik agar anak bisa memilih minat nya dan fokus
            mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989
            dan terus berkembang hingga saat ini. berlokasikan di jl.
            SoekarnoHatta Blok J No. 245, Lowokwaru, Blimbing, Kota Malang.
            Sejak berdirinya sekolah ini, sudah lebih dari 250.000 siswa lulus
            dari sekolah kami. Dengan menjunjung tinggi kejujuran, kedisiplinan
            dan semangat belajar yang tinggi kami berharap bisa terus
            meghasilkan siswa-siswa lulusan terbaik dari sekolah ini.
          </p>
        </div>

        <div class="lg:py-6 lg:mt-28 text-center text-gray-800">
          <h2 class="text-purple-500 text-base lg:text-2xl font-normal  mb-3">
            Kenapa Memilih Kami
          </h2>
          <h1 class="mb-3 text-2xl lg:text-5xl font-bold font-SF Pro Rounded text-blue-950">
            Keunggulan Sekolah Kami
          </h1>
        </div>
        <div class="mb-28">
          <Keunggulan />
        </div>

        <div class=" pb-12 lg:pb-0 pt-5 bg-indigo-50 ">
          <div class="mt-3 lg:mt-16 mb-5 lg:ml-28 ml-10">
            <h2 class="text-purple-500 text-base lg:text-2xl font-medium mb-5 md:mb-0 lg:md-0">
              Perkenalkan Anggota Sekolah
            </h2>
            <div class="text-blue-950 text-2xl lg:text-5xl font-bold font-SF Pro Rounded lg:mt-4 flex justify-between items-center">
              <h1 class="mr-2">Guru & Staff Sekolah</h1>
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
          <div class="px-20 g:px-28 mt-16 lg:mt-0">
            <Anggota />
          </div>
        </div>

        <div class="py-6 mt-10 pb-20 lg:pb-0 md:mt-20 md:pb-28 lg:mt-28 text-center text-gray-800">
          <h2 class="text-blue-400 text-base lg:text-2xl font-normal  mb-3">
            Cuplikan Sekolah
          </h2>
          <h1 class="mb-3 text-2xl lg:text-5xl font-bold font-SF Pro Rounded text-blue-950">
            Video Profil
          </h1>
          <div className="px-10 md:px-14 lg:px-20 lg:pb-24">
            <img
              src="about/video.png"
              alt="Video Thumbnail"
              onClick={openModal}
              style={{ cursor: "pointer" }}
            />
            {isModalOpen && (
              <div className="fixed inset-0 z-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="z-20">
                  <iframe
                    className="w-[15rem] h-[7rem] md:w-[40rem] md:h-[20rem] lg:w-[60rem] lg:h-[30rem]"
                    src="https://www.youtube.com/embed/VbEy--QW2KA?si=woDu1LqHlSCqStWu"
                    title="YouTube Video"
                    allowFullScreen
                  ></iframe>
                  <button
                    className="absolute top-8 right-8 text-white text-5xl"
                    onClick={closeModal}
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
