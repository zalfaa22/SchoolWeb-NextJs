import React from "react";
import DokumentasiAll from "../components/dokumentasiAll";

function Galery() {
  return (
    <>
      <div className="bg-white">
        <div
          className="bg-cover h-auto bg-center"
          style={{ backgroundImage: "url('galery/bg.svg')" }}
        >
          <div class="container px-6 py-20 mx-auto lg:px-20">
            <div class="items-center lg:flex">
              <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg text-center md:text-left lg:text-left md:px-6 mt-8 md:mt-10 lg:mt-0">
                  <h1 class="text-3xl font-bold text-white lg:text-5xl">
                    Galeri
                  </h1>

                  <p class="mt-3 text-white lg:text-xl lg:pr-6">
                    Beberapa dokumentasi area sekolah dan kegiatan sekolah
                  </p>
                </div>
              </div>

              <div class="flex items-center justify-center w-full mt-6 lg:mt-1 lg:w-1/2">
                <img
                  class="px-8 md:px-28 lg:px-0 lg:pr-2 h-full lg:max-w-lg"
                  src="galery/hero.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="lg:pb-6"></div>
        </div>

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
