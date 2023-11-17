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
            overflowY: "auto",
            height: "145vh ",
          }}
        >
          {/* Headline */}
          <div className="w-72 md:w-2/3 lg:w-7/12 flex flex-row items-center mb-20 px-10 lg:px-[90px]">
            <div>
              <div>
                <h3 className="font-poppins text-white font-bold text-2xl lg:text-5xl leading-[60px] tracking-tighter">
                  Galeri
                </h3>
                <p className="text-lg lg:text-xl text-white font-normal mt-5 pr-5">
                  Beberapa dokumentasi area sekolah dan <br /> kegiatan sekolah
                </p>
              </div>
            </div>
          </div>
        </main>
        <div class="py-6 lg:mt-28 text-center text-gray-800">
          <h2 class="text-blue-400 text-base lg:text-2xl font-normal font-Poppins mb-3">
            Galeri
          </h2>
          <h1 class="mb-3 text-2xl lg:text-5xl font-bold font-SF Pro Rounded text-blue-950">
            Dokumentasi Sekolah
          </h1>
        </div>
        <DokumentasiAll />
      </div>
    </>
  );
}

export default Galery;
