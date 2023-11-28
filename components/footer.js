import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer class="bg-gray-100">
      <div class="container p-6 mx-auto lg:pt-12">
        <div class="lg:flex">
          <div class="w-full -mx-6 lg:w-2/5">
            <div class="px-6 lg:px-16">
              <Link href="#">
                <img
                  class="w-auto h-8 md:h-10 lg:h-16 mb-7 md:mb-7"
                  src="logo2.svg"
                  alt=""
                />
              </Link>

              <p class="max-w-sm mt-2 lg:mt-12 text-slate-700 lg:text-lg lg:font-normal">
                Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
                untuk kehidupan yang lebih bermanfaat
              </p>
            </div>
          </div>

          <div class="mt-6 lg:mt-0 lg:flex-1">
            <div class="grid grid-cols-3 gap-2 md:gap-6 lg:gap-6 md:grid-cols-3 lg:grid-cols-3 lg:px-5 lg:ml-32">
              <div>
                <h3 class="text-sm md:text-xl lg:text-xl  font-bold text-blue-950">Informasi</h3>
                <Link
                  href="/news"
                  class="block mt-2 text-xs md:text-lg lg:text-lg text-neutral-700 hover:underline"
                >
                  Artikel
                </Link>
                <Link
                  href="/galery"
                  class="block mt-2 text-xs md:text-lg lg:text-lg text-neutral-700 hover:underline"
                >
                  Galeri
                </Link>
              </div>

              <div>
                <h3 class="text-sm md:text-xl lg:text-xl font-bold text-blue-950">Tentang</h3>
                <Link
                  href="/about"
                  class="block mt-2 text-xs md:text-lg lg:text-lg text-neutral-700 hover:underline"
                >
                  Tentang kami
                </Link>
                <Link
                  href="/contact"
                  class="block mt-2 text-xs md:text-lg lg:text-lg text-neutral-700 hover:underline"
                >
                  Hubungi kami
                </Link>
              </div>

              <div>
                <h3 class="text-sm md:text-xl lg:text-xl font-bold text-blue-950">Ikuti Kami</h3>
                <Link
                  href="#"
                  class="flex items-center mt-2 text-xs md:text-lg lg:text-lg text-neutral-700 hover:underline"
                >
                  <img src="facebook.svg" class="w-4 h-4 mr-1" />
                  namasekolah
                </Link>
                <Link
                  href="#"
                  class="flex items-center mt-2 text-xs md:text-lg lg:text-lg text-neutral-700 hover:underline"
                >
                  <img src="twitter.svg" class="w-4 h-4 mr-1 inline-flex" />
                  namasekolah
                </Link>
                <Link
                  href="#"
                  class="flex items-center mt-2 text-xs md:text-lg lg:text-lg text-neutral-700 hover:underline"
                >
                  <img src="instagram.svg" class="w-4 h-4 mr-1" />
                  namasekolah
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr class="h-px my-6 lg:mx-10 bg-gray-200 border-none" />

        <div>
          <p class="text-center text-neutral-700 text-xs lg:text-base">
            Copyright © 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
