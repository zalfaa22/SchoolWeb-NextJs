import React from "react";
import DokumentasiAll from "../components/dokumentasiAll";

function Galery() {
  return (
    <>
      <div className="bg-white">
        {/* <main
          className=" bg-background flex "
          style={{
            backgroundImage: "url(galery/background.png)",
            backgroundSize: "cover",
            overflowY: "auto",
            height: "145vh ",
          }}
        > */}
          {/* Headline */}
          {/* <div className="w-72 md:w-2/3 lg:w-7/12 flex flex-row items-center mb-20 px-10 lg:px-[90px]">
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
        </main> */}


<div className="bg-cover h-auto bg-center" style={{ backgroundImage: "url('galery/bg.svg')" }}>
<div class="container px-6 py-20 mx-auto lg:px-20">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg text-center md:text-left lg:text-left md:px-6 mt-8 md:mt-10 lg:mt-0">
                    <h1 class="text-3xl font-bold text-white lg:text-5xl">Galeri</h1>
                    
                    <p class="mt-3 text-white lg:text-xl lg:pr-6">Beberapa dokumentasi area sekolah dan kegiatan sekolah</p>
                    
                    {/* <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button> */}
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-1 lg:w-1/2">
                <img class="px-8 md:px-28 lg:px-0 lg:pr-2 h-full lg:max-w-lg" src="galery/hero.svg" alt="Catalogue-pana.svg"/>
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
