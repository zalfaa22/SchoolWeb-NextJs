import React, { useState, useEffect } from "react";
import Link from "next/link";
import data from "../data/news.json";

function News() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div class="px-14 lg:px-20 pb-10">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {jsonData.map((item, index) => (
          <a key={index} href="#" className="group relative">
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

            <h3 className="text-lg lg:text-xl text-gray-900 font-Poppins font-semibold line-clamp-2">
              {item.tittle}
            </h3>
            <p className="mt-1 text-sm lg:text-base text-gray-500 font-Poppins font-normal line-clamp-3">
              {item.description}
            </p>
            <Link href="#">
              <p className="mt-2 text-xs lg:text-base text-blue-400 hover:underline font-Poppins font-semibold pb-3 lg:pb-10">
                Baca selengkapnya
              </p>
            </Link>
          </a>
        ))}
      </div>
    </div>
  );
}

export default News;
