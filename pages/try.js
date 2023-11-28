import React from "react";
import Link from "next/link";
import Keunggulan from "/components/keunggulan";
import Anggota from "/components/anggota";

function About() {
  return (
    <>
      <div className="bg-white">
        {/* <main
          className=" bg-background flex "
          style={{
            backgroundImage: "url(about/background.png)",
            backgroundSize: "cover",
            overflowY: "auto",
            height: "145vh",
          }}
        > */}
          {/* Headline */}
          {/* <div className="w-72 md:w-2/3 lg:w-7/12 flex flex-row items-center mb-20 px-10 lg:px-[90px]">
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl lg:text-5xl lg:leading-[60px] tracking-tighter">
                  Tentang Kami
                </h3>
                <p className="text-lg lg:text-xl text-white font-normal mt-5 pr-5">
                  Informasi tentang kami
                </p>
              </div>
            </div>
          </div>
        </main> */}

<div className="bg-cover h-auto bg-center" style={{ backgroundImage: "url('about/bg.svg')" }}>
<div class="container px-6 py-20 mx-auto lg:px-20">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h2 class="text-3xl font-bold text-white lg:text-5xl">Tentang Kami</h2>
                    
                    <p class="mt-3 text-white text-xl">Informasi tentang kami</p>
                    
                    {/* <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button> */}
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-14 lg:w-1/2">
                <img class=" lg:pr-24 h-full lg:max-w-3xl" src="about/hero.svg" alt="Catalogue-pana.svg"/>
            </div>
        </div>
    </div>
    <div className="lg:pb-4"></div>
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
        <Keunggulan /></div>

        <div class=" pb-12 lg:pb-0 pt-5 bg-indigo-50 ">
          <div class=" md:mt-10 lg:mt-16 mb-5 ml-7 md:ml-20 lg:ml-28 ">
            <h2 class="text-purple-500 text-base lg:text-2xl font-medium ">
              Perkenalkan Anggota Sekolah
            </h2>
            <div class="text-blue-950 text-2xl lg:text-5xl font-bold font-SF Pro Rounded mt-1 lg:mt-4 lg:inline-flex">
              <h1>Guru & Staff Sekolah</h1>
              <Link href="#">
                <div class="px-2 py-1 lg:px-4 lg:py-3 absolute lg:right-28 bg-amber-400 hover:bg-amber-500 rounded-lg flex-col justify-start items-start gap-1 ">
                  <div class="text-white text-sm lg:text-xl font-medium ">
                    Lihat Semua
                  </div>
                </div>
              </Link>
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
          {/* <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            frameborder="0"
            allowfullscreen
            class="mx-auto rounded-xl md:w-[650px] lg:w-[1100px] md:h-[300px] lg:h-[500px]"
          ></iframe> */}
          <div className="px-10 md:px-14 lg:px-20 lg:pb-24">
            <img src="about/video.png"/>
</div>
        </div>
      </div>
    </>
  );
}

export default About;
