import React, { useState, useEffect } from "react";
import data from "../data/anggota.json"; // Impor data dari file JSON
import Image from "next/image";
// import Card from './Card';

function Anggota() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); // Menggunakan data dari artikelbaru.json
  }, []);

  return (
      <div class="mx-auto max-w-2xl lg:pt-4 lg:pb-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-1">
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {jsonData.map((item, anggota) => (
            <a key={anggota} href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={item.image}
                  alt="Person using a pen to cross a task off a productivity paper card."
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-2xl text-center font-semibold text-blue-950 font-Poppins">{item.name}</h3>
              <p class="mt-1 text-base font-normal text-center text-slate-700 font-Poppins">
                {item.position}
              </p>
            </a>
          ))}
        </div>
      </div>
  );
}

export default Anggota;
