import React from "react";
import Link from "next/link";

function Footer() {
    return (
        <footer class="bg-gray-100 text-white">
        <div class="container px-16 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
            <div class="pt-14 grid grid-cols-12">
                <div class=" md:pb-0 md:col-span-6">
                        <div class="container mx-auto">
                            <img src="logo2.svg" alt=""/>
                        </div>
                </div>
                <div class="col-span-2 text-center md:text-left ">
                    <p class="pb-3 text-lg font-medium text-blue-950">Informasi</p>
                    <ul>
                        <li>
                            <a rel="" href="berita.html" class="text-neutral-700 text-sm">Artikel</a>
                        </li>
                        <li>
                            <a rel="" href="galeri.html" class="text-neutral-700 text-sm">Galeri</a>
                        </li>
                    </ul>
                </div>
                <div class="col-span-2 text-center md:text-left">
                    <p class="pb-3 text-lg font-medium text-blue-950">Tentang</p>
                    <ul>
                        <li>
                            <a rel="" href="tentangKita.html" class="text-neutral-700 text-sm">Tentang Kami</a>
                        </li>
                        <li>
                            <a rel="" href="kontak.html" class="text-neutral-700 text-sm">Hubungi Kami</a>
                        </li>
                    </ul>
                </div>
                <div class="col-span-2 text-center md:text-left">
                    <p class="pb-3 text-lg font-medium text-blue-950">Kantor Kami</p>
                    <ul>
                        <li>
                            <a rel="" href="#" class="text-neutral-700 text-sm">Indonesia <br/>Unamed road RT 01 RW 02 Surabaya</a>
                        </li>
                    </ul>
                </div>
                <div class="col-span-5 text-center md:text-left">
                    <p class="pb-1 text-lg font-normal text-slate-700">Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
                    {/* <div class="w-[140px] h-9 justify-center items-start gap-4 inline-flex pt-5">
                        <a href="#" class="group">
                        <div class="p-2 bg-green-500 rounded-[40px] justify-start items-start gap-2.5 flex">
                            <div class="w-5 h-5 relative">
                                <img class="absolute" src="./asset/Twitter Logo.svg" />
                                
                            </div>
                        </div>
                        </a>
                        <a href="#" class="group">
                        <div class="p-2 bg-white bg-opacity-40 rounded-[40px] justify-start items-start gap-2.5 flex">
                            <div class="w-5 h-5 relative">
                                <img class="absolute" src="./asset/Facebook Logo.svg" />
                            </div>
                        </div>
                        </a>
                        <div class="p-2 bg-white bg-opacity-40 rounded-[40px] justify-start items-start gap-2.5 flex">
                            <div class="w-5 h-5 relative">
                                <div class="w-[17.33px] h-[17.33px] left-[1.33px] top-[1.47px] absolute">
                                    <a href="#" class="group">
                                    <img class="absolute" src="./asset/Instagram Logo.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div class="py-6 text-sm text-center text-neutral-700">Copyright © 2021. All rights reserved.</div>
        </div>
    </footer>
    );
  }

export default Footer;
