import React, { useState, useEffect } from "react";
import data from "../data/anggota.json";

function Anggota() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div class="mx-auto max-w-2xl md:pt-0 lg:pt-4 md:pb-0 lg:pb-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-1">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {jsonData.map((item, index) => (
          <a key={index} href="#" class="group">
            <div class=" w-full overflow-hidden rounded-3xl bg-gray-200 ">
              <img
                src={item.image}
                alt="Person using a pen to cross a task off a productivity paper card."
                class="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-base md:text-lg lg:text-2xl text-center font-semibold text-blue-950 font-Poppins">
              {item.name}
            </h3>
            <p class="mt-1 text-sm md:text-base lg:text-base font-normal text-center text-slate-700 font-Poppins">
              {item.position}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Anggota;
