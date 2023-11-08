import React, { useState, useEffect } from 'react';
import data from '../data/artikelterbaru.json'; // Impor data dari file JSON
// import Card from './Card';

function Artikelbaru() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); // Menggunakan data dari artikelbaru.json
  }, []);

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      {jsonData.map((item, index) => (
        <a key={index} href="#" className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
            <img src={item.image} alt="" className="h-full w-full object-cover object-center group-hover:opacity-75" />
            <div className="absolute w-[194px] h-10 px-4 py-2 bg-purple-500 rounded-3xl justify-center items-center gap-2.5 inline-flex top-[200px] left-[75px]">
              <div className="text-white text-base font-normal font-Poppins">
                {item.date}
              </div>
            </div>
          </div>
          <h3 className="mt-10 text-xl text-gray-900 font-Poppins font-semibold">
            {item.tittle}
          </h3>
          <p className="mt-1 text-base text-gray-500 font-Poppins font-normal">
            {item.description}
          </p>
        </a>
      ))}
    </div>
  );
}

export default Artikelbaru;
