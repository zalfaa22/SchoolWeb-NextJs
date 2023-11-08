import React from "react";
import Keunggulan from "@/components/keunggulan";
import Anggota from "@/components/anggota";

function About() {
  return (
    <>
      <div className="bg-white">
        <main
          className=" bg-background flex "
          style={{
            backgroundImage: "url(about/background.png)",
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
                  Tentang Kami
                </h3>
                <p className="text-xl text-white font-normal mt-5 pr-5">
                  Informasi tentang kami
                </p>
              </div>
            </div>
          </div>
        </main>
        <div class="my-16 ml-16 ">
          <h2 class="text-blue-400 text-2xl font-medium font-Poppins">
            Profil Singkat
          </h2>
          <h1 class="text-blue-950 text-5xl font-bold font-SF Pro Rounded mt-4 mb-4 lg:pr-96 leading-tight">
            Sekolah Alam <br /> Insan Mulia Berkarya
          </h1>
          <p class="text-neutral-700 text-2xl font-medium font-Poppins pr-10">
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

        <div class="py-6 mt-28 text-center text-gray-800">
          <h2 class="text-purple-500 text-2xl font-normal font-Poppins mb-3">
            Kenapa Memilih Kami
          </h2>
          <h1 class="mb-3 text-5xl font-bold font-SF Pro Rounded text-blue-950">
            Keunggulan Sekolah Kami
          </h1>
        </div>
        <Keunggulan />

        <div class=" lg:w-[1263px] lg:h-[650px] pt-5 bg-indigo-50 ">
          <div class="mt-16 mb-5 ml-28 ">
            <h2 class="text-purple-500 text-2xl font-medium font-Poppins">
              Perkenalkan Anggota Sekolah
            </h2>
            <div class="text-blue-950 text-5xl font-bold font-SF Pro Rounded mt-4 inline-flex">
              <h1>Guru & Staff Sekolah</h1>
              <div class="px-4 py-3 absolute right-28 bg-amber-400 rounded-lg flex-col justify-start items-start gap-1 ">
                <div class="text-white text-xl font-medium font-Poppins">
                  Lihat Semua
                </div>
              </div>
            </div>
          </div>
          <div class="px-28">
            <Anggota />
          </div>
        </div>

        <div class="py-6 mt-28 text-center text-gray-800">
          <h2 class="text-blue-400 text-2xl font-normal font-Poppins mb-3">
            Cuplikan Sekolah
          </h2>
          <h1 class="mb-3 text-5xl font-bold font-SF Pro Rounded text-blue-950">
            Video Profil
          </h1>
          <div class="w-[1100px]  bg-blue-400 bg-opacity-25 rounded-3xl justify-center items-center inline-flex">
            <img src="about/video.png"></img>
            <div class="w-[120px] h-[120px] relative bg-blue-400 rounded-[100px] shadow flex-col justify-start items-start flex"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
