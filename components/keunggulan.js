import React from "react";

function Keunggulan() {
  return (
    <section>
      <div class="container px-5 md:px-10 lg:px-16 pt-8 mb-16 lg:mb-0 lg:pt-0 lg:py-12 mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <span class="inline-block p-2 lg:p-3 bg-violet-500 rounded-full ">
              <img
                src="book.svg"
                class="w-10 h-10 p-2 lg:w-12 lg:h-12 lg:p-2"
              />
            </span>

            <h2 class="mt-4 text-xl lg:text-2xl font-semibold text-gray-800 lg:pr-20">
              Menggunakan Kurikulum Terbaru
            </h2>

            <p class="mt-2 text-neutral-400 text-base lg:text-lg font-Poppins lg:mr-2 tracking-tight">
              Sekolah kami menerapkan kurikulum terbaru saat proses belajar agar
              siswa mendapatakan materi terbaru sesuai ketentuan
            </p>
          </div>

          <div>
            <span class="inline-block p-2 lg:p-3 bg-amber-400 rounded-full ">
              <img
                src="clock.svg"
                class="w-10 h-10 p-2 lg:w-12 lg:h-12 lg:p-2"
              />
            </span>

            <h2 class="mt-4 text-xl lg:text-2xl font-semibold text-gray-800 lg:pr-20">
              Efektifitas Waktu Saat Belajar Disekolah
            </h2>

            <p class="mt-2 text-neutral-400 text-base lg:text-lg font-Poppins lg:mr-2 tracking-tight">
              Sekolah kami memiliki waktu belajar yang dirancang agar para siswa
              tidak jenuh dan dapat menerima pelajaran dengan baik
            </p>
          </div>

          <div>
            <span class="inline-block p-2 lg:p-3 bg-blue-400 rounded-full ">
              <img
                src="pen-tool.svg"
                class="w-10 h-10 p-2 lg:w-12 lg:h-12 lg:p-2"
              />
            </span>

            <h2 class="mt-4 text-xl lg:text-2xl font-semibold text-gray-800 lg:pr-20">
              Penyaluran Bakat dan Minat
            </h2>

            <p class="mt-2 text-neutral-400 text-base lg:text-lg font-Poppins lg:mr-2 tracking-tight">
              Sekolah kami memiliki berbagai macam kegitan akademik maupun non
              akademik untuk menyalurkan bakat dan minat siswa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Keunggulan;
