import React, { useState, useEffect } from "react";
import data from "../data/artikelterbaru.json"; // Impor data dari file JSON
// import Card from './Card';

function Artikelbaru() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); // Menggunakan data dari artikelbaru.json
  }, []);

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      {jsonData.map((item, index) => (
        <a key={index} className="group relative">
          {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg relative xl:aspect-h-8 xl:aspect-w-7">
          <img src={item.image} alt="" className="h-full w-full object-cover object-center group-hover:opacity-75" />
          <div className="absolute w-full flex justify-center bottom-[-20px]">
            <div className="w-[140px] lg:w-[194px] py-1 lg:py-2 bg-purple-500 rounded-3xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-sm font-normal ">
                {item.date}
              </div>
            </div>
          </div>
        </div> */}

          <div className="px-10">
            <div class="w-full h-32 lg:h-56 relative">
              <img
                class="w-[340px]  left-0 top-0 absolute rounded-lg"
                src={item.image}
              />
              <div class="lg:w-[194.90px] h-8 lg:h-10 px-4 py-2 left-[40px] lg:left-[75px] top-[130px] lg:top-[200px] absolute bg-purple-500 rounded-3xl justify-center items-center gap-2.5 inline-flex">
                <div class="text-white text-sm lg:text-base font-normal ">
                  12 Desember 2021
                </div>
              </div>
            </div>

            <h3 className="mt-10 lg:mt-12 text-base lg:text-xl text-gray-900  font-semibold">
              {item.tittle}
            </h3>
            <p className="mt-1 lg:mt-3 text-sm lg:text-base text-gray-500  font-normal">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Artikelbaru;
