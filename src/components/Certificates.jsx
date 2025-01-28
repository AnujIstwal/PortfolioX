import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const certificates = [
  { id: 1, src: "certificates/1.jpg", alt: "Certificate 1" },
  { id: 2, src: "certificates/2.jpg", alt: "Certificate 2" },
  { id: 3, src: "certificates/3.jpg", alt: "Certificate 3" },
  { id: 4, src: "certificates/4.jpg", alt: "Certificate 4" },
  { id: 5, src: "certificates/5.jpg", alt: "Certificate 5" },
  { id: 6, src: "certificates/6.jpg", alt: "Certificate 6" },
  { id: 7, src: "certificates/7.jpg", alt: "Certificate 7" },
];

export default function Certificates() {
  return (
    <div className="flex w-full flex-col bg-gradient-to-tr from-[#000000] via-[#505050] to-[#242424]">
      <div className="relative flex w-full flex-col items-center justify-center py-10">
        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute left-1 top-1/2 z-10 -translate-y-1/2 transform rounded-full border border-zinc-300 bg-zinc-100 p-1 transition-all hover:bg-zinc-100/50 sm:left-[4rem]">
          <GoArrowLeft className="text-4xl transition-all hover:text-gray-900" />
        </button>
        <button className="custom-next absolute right-1 top-1/2 z-10 -translate-y-1/2 transform rounded-full border border-zinc-300 bg-zinc-100 p-1 transition-all hover:bg-zinc-100/50 sm:right-[4rem]">
          <GoArrowRight className="text-4xl transition-all hover:text-gray-900" />
        </button>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          initialSlide={3}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 150, // Adjust depth for 3D effect
            modifier: 5,
            slideShadows: false,
          }}
          breakpoints={{
            400: { slidesPerView: 1 }, // ✅ For small screens
            640: { slidesPerView: 2 }, // ✅ Medium screens
            1024: { slidesPerView: 3 }, // ✅ Large screens
          }}
          pagination={{ el: ".custom-pagination", clickable: true }} // Custom Pagination
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          className="sm:W-[80%] w-[100%] max-w-7xl"
        >
          {certificates.map((cert) => (
            <SwiperSlide
              key={cert.id}
              className="relative w-full py-8 transition-all duration-300 sm:w-80 md:w-96 lg:w-[420px]"
            >
              {({ isActive }) => (
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className={`h-auto w-full rounded-2xl border border-slate-400 transition-all duration-300 ${isActive ? "shadow-[0px_10px_20px_-12px_rgb(0,0,0,.6)]" : "opacity-65 shadow-lg"} `}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination absolute bottom-0 mt-4 flex justify-center space-x-2">
          {certificates.map((cert, index) => (
            <span
              key={index}
              className="dot h-3 w-3 cursor-pointer rounded-full transition-all hover:bg-gray-700"
            ></span>
          ))}
        </div>

        <button className="rounded-2xl bg-zinc-400/60 px-4 py-4 text-sm text-white">
          View all
        </button>
      </div>

      {/* Companies name */}
      <div className="flex w-full flex-col items-center justify-center gap-y-6 bg-black/40 py-8">
        <h1 className="text-lg font-bold text-zinc-400">
          Certified by the best in the industry
        </h1>
        <div className="mx-auto grid max-w-4xl grid-cols-3 items-center justify-items-center gap-x-16 gap-y-8">
          <img
            src="companies/1.png"
            alt="Company 1"
            className="w-40 opacity-80 grayscale"
          />
          <img
            src="companies/2.png"
            alt="Company 2"
            className="w-40 opacity-80 grayscale"
          />
          <img
            src="companies/3.png"
            alt="Company 3"
            className="w-28 opacity-80 grayscale"
          />
          <img
            src="companies/4.png"
            alt="Company 4"
            className="w-28 opacity-80 grayscale"
          />
          <img
            src="companies/5.png"
            alt="Company 5"
            className="w-28 opacity-80 grayscale"
          />
          <img
            src="companies/6.png"
            alt="Company 6"
            className="w-28 opacity-80 grayscale"
          />
        </div>
      </div>
    </div>
  );
}
