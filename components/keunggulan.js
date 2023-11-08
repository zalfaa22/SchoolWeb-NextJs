import React from "react";
import Link from "next/link";

function Keunggulan() {
  return (
      <div class=" w-[1200px] h-[350px] p-[100px] justify-center items-center inline-flex">
        <div class="w-px"></div>
        <div class="self-stretch justify-start items-center lg:inline-flex">
          <div class="justify-start items-center gap-6 flex pl-28">
            <div class="w-[360px] h-[300px] flex-col justify-start items-start gap-6 inline-flex">
              <div class="p-5 bg-violet-500 rounded-[80px] justify-start items-start gap-2.5 inline-flex">
                <div class="w-8 h-8 relative">
                  <img class="absolute" src="book.svg" />
                </div>
              </div>
              <div class="self-stretch h-[196px] flex-col justify-start items-start gap-4 flex">
                <div class="self-stretch text-slate-700 text-2xl font-semibold font-Poppins">
                  Menggunakan
                  <br />
                  Kurikulum Terbaru
                </div>
                <div class="self-stretch pr-20 text-neutral-400 text-lg font-normal font-Poppins tracking-tight">
                  Sekolah kami menerapkan kurikulum terbaru saat proses belajar
                  agar siswa mendapatakan materi terbaru sesuai ketentuan
                </div>
              </div>
            </div>
          </div>
          <div class="justify-start items-center gap-6 flex">
            <div class="w-[360px] h-[300px] flex-col justify-start items-start gap-6 inline-flex">
              <div class="p-5 bg-amber-400 rounded-[80px] justify-start items-start gap-2.5 inline-flex">
                <div class="w-8 h-8 relative">
                  <img class="absolute" src="clock.svg" />
                </div>
              </div>
              <div class="self-stretch h-[196px] flex-col justify-start items-start gap-4 flex">
                <div class="self-stretch text-slate-700 text-2xl font-semibold font-Poppins">
                  Efektifitas Waktu
                  <br />
                  Saat Belajar Disekolah
                </div>
                <div class="self-stretch pr-8 text-neutral-400 text-lg font-normal font-Poppins tracking-tight">
                  Sekolah kami memiliki waktu belajar yang dirancang agar para
                  siswa tidak jenuh dan dapat menerima pelajaran dengan baik
                </div>
              </div>
            </div>
          </div>
          <div class="justify-start items-center gap-6 flex">
            <div class="w-[360px] h-[300px] flex-col justify-start items-start gap-6 inline-flex">
              <div class="p-5 bg-blue-400 rounded-[80px] justify-start items-start gap-2.5 inline-flex">
                <div class="w-8 h-8 relative">
                  <img class="absolute" src="pen-tool.svg" />
                </div>
              </div>
              <div class="self-stretch h-[196px] flex-col justify-start items-start gap-4 flex">
                <div class="self-stretch text-slate-700 text-2xl font-semibold font-Poppins">
                  Penyaluran
                  <br />
                  Bakat dan Minat
                </div>
                <div class="self-stretch pr-10 text-neutral-400 text-lg font-normal font-Poppins tracking-tight">
                  Sekolah kami memiliki berbagai macam kegitan akademik maupun
                  non akademik untuk menyalurkan bakat dan minat siswa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Keunggulan;
