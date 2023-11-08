import React from "react";
import DokumentasiAll from "../components/dokumentasiAll";

function Galery() {
  return (
    <>
      <div className="bg-white">
        <main
          className=" bg-background flex "
          style={{
            backgroundImage: "url(galery/background.png)",
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
                  Galeri
                </h3>
                <p className="text-xl text-white font-normal mt-5 pr-5">
                  Beberapa dokumentasi area sekolah dan <br /> kegiatan sekolah
                </p>
              </div>
            </div>
          </div>
        </main>
        <div class="py-6 mt-28 text-center text-gray-800">
          <h2 class="text-blue-400 text-2xl font-normal font-Poppins mb-3">
            Galeri
          </h2>
          <h1 class="mb-3 text-5xl font-bold font-SF Pro Rounded text-blue-950">
            Dokumentasi Sekolah
          </h1>
        </div>
        <DokumentasiAll />
      </div>
    </>
  );
}

export default Galery;