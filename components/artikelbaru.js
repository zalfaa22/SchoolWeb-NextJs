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
              <img
                src={item.image}
                alt=""
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
              {/* <span className="absolute  md:bottom-0 sm:left-[170px] lg:bottom-[195px] lg:left-[100px] justify-center items-center lg:px-[16px] lg:py-[8px] sm:px-[16px] sm:text-xl lg:text-sm text-white bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA] rounded-[24px] mx-auto">
                {item.date}
              </span> */}
            </Link>
            <div className="absolute w-[140px] lg:w-[194px] lg:h-10 lg:px-4 py-1 lg:py-2 bg-purple-500 rounded-3xl justify-center items-center gap-2.5 inline-flex  md:top-[187px] lg:top-[200px] mt-2 md:mt-0 lg:mt-0 md:left-[85px] lg:left-[75px]">
              <div className="text-white text-sm font-normal font-Poppins">
                {item.date}
              </div>
            </div>
          </div>
          <Link href="/article">
            <h3 className="mt-10 lg:mt-12 text-base lg:text-xl text-gray-900 font-Poppins font-semibold">
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
