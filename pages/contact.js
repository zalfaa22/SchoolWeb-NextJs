import React from "react";

function Contact() {
  return (
    <>
      <div className="bg-white">
        <main
          className=" bg-background flex "
          style={{
            backgroundImage: "url(contact/background.png)",
            backgroundSize: "cover",
            overflowY: "auto",
            height: "117vh",
          }}
        >
          {/* Headline */}
          <div className="w-72 md:w-2/3 lg:w-7/12 flex flex-row items-center mb-20 px-10 lg:px-[90px]">
            <div>
              <div>
                <h3 className=" text-white font-bold text-2xl lg:text-5xl leading-[60px] tracking-tighter">
                  Hubungi Kami
                </h3>
                <p className="text-lg lg:text-xl text-white font-normal mt-5 pr-5">
                  Kontak sekolah kami agar anda bisa terhubung dengan kami
                </p>
              </div>
            </div>
          </div>
        </main>

        <div class="py-6 lg:mt-28 text-center text-gray-800">
          <h2 class="text-blue-400 text-base lg:text-2xl font-normal  mb-3">
            Dapatkan informasi lengkap
          </h2>
          <h1 class="lg:mb-3 text-2xl lg:text-5xl font-bold font-SF Pro Rounded text-blue-950">
            Kontak Kami
          </h1>
        </div>

        <section className="lg:py-6 ">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2">
            <div className="py-6 md:py-0 md:px-6">
              <div class="lg:w-[454px] lg:h-[386px] flex-col justify-start items-start gap-16 inline-flex">
                <div class="justify-start items-center gap-6 inline-flex">
                  <div class="p-3 lg:p-5 bg-violet-500 rounded-[80px] justify-center items-start gap-2.5 flex">
                    <div class="w-[20px] h-[20px] lg:w-[46px] lg:h-[46px] relative">
                      <div class="w-5 h-5 lg:w-12 lg:h-12 relative">
                        <img class="absolute" src="phone.svg" />
                      </div>
                    </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-2 inline-flex">
                    <div class="text-slate-700 text-base lg:text-2xl font-semibold  leading-relaxed">
                      <p>(+62) 812 698 15172</p>
                      <p>(0341) 545 987</p>
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-6 inline-flex">
                  <div class="p-3 lg:p-5 bg-amber-400 rounded-[80px] justify-center items-start gap-2.5 flex">
                    <div class="w-[20px] h-[20px] lg:w-[46px] lg:h-[46px] relative">
                      <div class="w-5 h-5 lg:w-12 lg:h-12 relative">
                        <img class="absolute" src="email.svg" />
                      </div>
                    </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-2 inline-flex">
                    <div class="text-slate-700 text-base lg:text-2xl font-semibold  leading-relaxed">
                      <p>contact@sekolahanak.Com</p>
                      <p>info@sekolah.anak.com</p>
                    </div>
                  </div>
                </div>
                <div class="justify-start items-center gap-6 inline-flex">
                  <div class="p-3 lg:p-5 bg-blue-400 rounded-[80px] justify-center items-start gap-2.5 flex">
                    <div class="w-[20px] h-[20px] lg:w-[46px] lg:h-[46px] relative">
                      <div class="w-5 h-5 lg:w-12 lg:h-12 relative">
                        <img class="absolute" src="location.svg" />
                      </div>
                    </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-2 inline-flex">
                    <div class="text-slate-700 text-base lg:text-2xl font-semibold  leading-relaxed">
                      <p>jL. Soekarno hatta J-12</p>
                      <p>malang</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4"></div>
            </div>
            <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 md:mb-14">
              <label className="block">
                <input
                  type="text"
                  placeholder="Nama Anda*"
                  className="block w-full px-6 lg:py-3 rounded-lg border-2 border-black border-opacity-30 text-neutral-700 text-opacity-70 text-base lg:text-xl font-normal  capitalize leading-10 "
                />
              </label>
              <label className="block">
                <input
                  type="text"
                  placeholder="Email Anda*"
                  className="block w-full px-6 lg:py-3 rounded-lg border-2 border-black border-opacity-30 text-neutral-700 text-opacity-70 text-base lg:text-xl font-normal  capitalize leading-10 "
                />
              </label>
              <label className="block">
                <input
                  type="text"
                  placeholder="Nomor Telepon*"
                  className="block w-full px-6 lg:py-3 rounded-lg border-2 border-black border-opacity-30 text-neutral-700 text-opacity-70 text-base lg:text-xl font-normal  capitalize leading-10 "
                />
              </label>
              <label className="block">
                <textarea
                  rows="3"
                  placeholder="Pesan Anda*"
                  className="block w-full px-6 lg:py-3 rounded-lg border-2 border-black border-opacity-30 text-neutral-700 text-opacity-70 text-base lg:text-xl font-normal  capitalize leading-10 "
                ></textarea>
              </label>
              <button
                type="button"
                className="self-center lg:px-60 px-6 py-1 lg:py-3 bg-purple-500 rounded-3xl text-white text-base lg:text-xl font-medium "
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
