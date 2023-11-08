import React, { useState, useEffect } from 'react';
import data from '../data/dokumentasiAll.json'; // Impor data dari file JSON
// import Card from './Card';

function DokumentasiAll() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); // Menggunakan data dari artikelbaru.json
  }, []);

  return (
    <div class="px-20 pb-32">
    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      {jsonData.map((item, index) => (
        <a href="#" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={item.image}
            alt=""
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-2xl text-gray-900 font-Poppins font-semibold">
        {item.tittle}
        </h3>
        <p class="mt-1 text-base text-gray-500 font-Poppins font-normal mb-7">
        {item.description}
        </p>
      </a>
      ))}
    </div>
    </div>
  );
}

export default DokumentasiAll;
