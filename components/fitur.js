import React from "react";
import Link from "next/link";

function Fitur() {
    return (
        <section class="bg-white dark:bg-gray-900">
    <div class="container lg:px-28 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
            <span class="inline-block p-3 bg-violet-500 rounded-full ">
                    <img src="book.svg" class="w-12 h-12 p-2"/>
                </span>

                <h2 class="mt-4 text-2xl font-semibold text-gray-800 dark:text-white lg:pr-20">Menggunakan
                  Kurikulum Terbaru</h2>

                <p class="mt-2 text-neutral-400 text-lg font-Poppins lg:mr-2 tracking-tight">Sekolah kami menerapkan kurikulum terbaru saat proses belajar
                  agar siswa mendapatakan materi terbaru sesuai ketentuan</p>
            </div>

            <div>
            <span class="inline-block p-3 bg-amber-400 rounded-full ">
                    <img src="clock.svg" class="w-12 h-12 p-2"/>
                </span>

                <h2 class="mt-4 text-2xl font-semibold text-gray-800 dark:text-white lg:pr-20">Efektifitas Waktu
                  Saat Belajar Disekolah</h2>

                <p class="mt-2 text-neutral-400 text-lg font-Poppins lg:mr-2 tracking-tight">Sekolah kami memiliki waktu belajar yang dirancang agar para
                  siswa tidak jenuh dan dapat menerima pelajaran dengan baik</p>
            </div>

            <div>
            <span class="inline-block p-3 bg-blue-400 rounded-full ">
                    <img src="pen-tool.svg" class="w-12 h-12 p-2"/>
                </span>

                <h2 class="mt-4 text-2xl font-semibold text-gray-800 dark:text-white lg:pr-20">Penyaluran
                  Bakat dan Minat</h2>

                <p class="mt-2 text-neutral-400 text-lg font-Poppins lg:mr-2 tracking-tight">Sekolah kami memiliki berbagai macam kegitan akademik maupun
                  non akademik untuk menyalurkan bakat dan minat siswa</p>
            </div>
        </div>
    </div>
</section>
    );
  }

export default Fitur;
