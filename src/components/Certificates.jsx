import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
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
    <section
      id="certificates"
      className="relative flex h-full w-full flex-col items-center justify-center gap-y-2"
    >
      <div className="h-14 w-full"></div>
      <div className="flex w-full flex-col gap-y-4 py-4 sm:py-8">
        {/* Heading */}
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="md:5xl text-center text-4xl font-bold text-[#3a3a3a]"
        >
          Learned from the best
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 block text-2xl font-medium text-gray-500"
          >
            100% verified Certificates
          </motion.span>
        </motion.span>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="relative flex w-full flex-col items-center justify-center py-10"
        >
          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute left-1 top-1/2 z-10 -translate-y-1/2 transform rounded-full border border-zinc-300 bg-zinc-100 p-1 transition-colors hover:bg-zinc-100/50 sm:left-[4rem]">
            <GoArrowLeft className="text-4xl transition-colors hover:text-gray-900" />
          </button>
          <button className="custom-next absolute right-1 top-1/2 z-10 -translate-y-1/2 transform rounded-full border border-zinc-300 bg-zinc-100 p-1 transition-colors hover:bg-zinc-100/50 sm:right-[4rem]">
            <GoArrowRight className="text-4xl transition-colors hover:text-gray-900" />
          </button>
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            initialSlide={3}
            speed={600}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0, // Adjust depth for 3D effect
              modifier: 0,
              slideShadows: false,
            }}
            spaceBetween={30}
            breakpoints={{
              400: { slidesPerView: 1 }, // ✅ For small screens
              640: { slidesPerView: 3 }, // ✅ Medium screens
              1024: { slidesPerView: 4 }, // ✅ Large screens
            }}
            pagination={{ el: ".custom-pagination", clickable: true }} // Custom Pagination
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            className="w-[100%] max-w-7xl"
          >
            {certificates.map((cert) => (
              <SwiperSlide
                key={cert.id}
                className="relative w-full py-8 sm:w-80 md:w-96 lg:w-[420px]"
              >
                {({ isActive }) => (
                  <motion.img
                    src={cert.src}
                    alt={cert.alt}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: isActive ? 1.1 : 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-auto w-full rounded-2xl border border-slate-400 ${isActive ? "shadow-[0px_10px_20px_-12px_rgb(0,0,0,.6)]" : "shadow-lg"} `}
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
                className="dot h-3 w-3 cursor-pointer rounded-full transition-colors hover:bg-gray-700"
              ></span>
            ))}
          </div>
        </motion.div>

        <a
          href="https://drive.google.com/drive/folders/1q7OIyCkH52cLPjhTWvApivaec07Vme-M?usp=drive_link"
          target="_blank"
          className="mx-auto rounded-2xl bg-zinc-700 px-4 py-4 text-sm text-white"
        >
          View all certificates
        </a>

        {/* Companies name */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 flex w-full flex-col items-center justify-center gap-y-8 rounded-[1.7rem] bg-gradient-to-br from-zinc-900/90 via-zinc-900 to-zinc-950 py-12"
        >
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-lg font-bold text-zinc-500"
          >
            Certified by the best in the industry
          </motion.span>

          <div className="mx-auto grid max-w-4xl grid-cols-3 items-center justify-items-center gap-x-8 gap-y-8 px-4 sm:gap-x-16">
            <motion.img
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              src="companies/1.png"
              alt="Company 1"
              className="w-36 opacity-80 grayscale"
            />
            <motion.img
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
              src="companies/2.png"
              alt="Company 2"
              className="w-40 opacity-80 grayscale"
            />
            <motion.img
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1.4 }}
              viewport={{ once: true }}
              src="companies/3.png"
              alt="Company 3"
              className="w-24 opacity-80 grayscale"
            />
            <motion.img
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1.3 }}
              viewport={{ once: true }}
              src="companies/4.png"
              alt="Company 4"
              className="w-24 opacity-80 grayscale"
            />
            <motion.img
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
              src="companies/5.png"
              alt="Company 5"
              className="w-32 opacity-80 grayscale"
            />
            <motion.img
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1.4 }}
              viewport={{ once: true }}
              src="companies/6.png"
              alt="Company 6"
              className="w-32 opacity-80 grayscale"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
