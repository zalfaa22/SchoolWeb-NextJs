import React, { useState, useEffect } from "react";
import data from "../data/artikelterbaru.json";
import Link from "next/link";

function Artikelbaru() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      {jsonData.map((item, index) => (
        <a key={index} className="group relative">
          <div className=" w-full overflow-hidden rounded-lg">
            <Link href="/article">
              <div className="items-center text-center justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-3xl"
                />
                <button className="sticky bottom-5  bg-purple-500 rounded-full px-4 py-2 text-xs md:text-base lg:text-base text-white">
                  {item.date}
                </button>
              </div>
            </Link>
          </div>
          <Link href="/article">
            <h3 className=" text-base lg:text-xl text-gray-900 font-Poppins font-semibold">
              {item.tittle}
            </h3>
          </Link>
          <p className="mt-1 lg:mt-3 text-sm lg:text-base text-gray-500 font-Poppins font-normal">
            {item.description}
          </p>
        </a>
      ))}
    </div>
  );
}

export default Artikelbaru;
