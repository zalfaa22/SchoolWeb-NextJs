import React, { useState, useEffect } from "react";
import data from "../data/dokumentasiAll.json";

function DokumentasiAll() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div class="px-14 lg:px-20 pb-12 lg:pb-32">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {jsonData.map((item, index) => (
          <a key={index} href="#" class="group">
            <div class=" w-full overflow-hidden rounded-lg ">
              <img
                src={item.image}
                alt=""
                class="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-lg lg:text-2xl text-gray-900 font-Poppins font-semibold">
              {item.tittle}
            </h3>
            <p class="mt-1 text-sm lg:text-base text-gray-500 font-Poppins font-normal lg:mb-7">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default DokumentasiAll;
