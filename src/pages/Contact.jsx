import { FaLocationDot } from "react-icons/fa6";
import ContactListItem from "../components/ContactListItem";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex h-full w-full flex-col items-center justify-center gap-y-2 md:h-screen"
    >
      <div className="h-14 w-full"></div>
      <div className="h-full w-full py-6 sm:px-4">
        <motion.div
          initial={{ y: 450 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex h-full w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#363636] from-[0%] via-[#000000] via-[55%] to-[#181818] to-[100%]"
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-y-4 px-6 py-8">
            {/* Heading */}
            <div className="flex flex-col items-center gap-y-2">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="md:5xl text-center text-4xl font-bold text-[#e2e2e2]"
              >
                How can i help you?
              </motion.h1>
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
                className="font-semibold uppercase text-rose-400"
              >
                Contact me
              </motion.span>
            </div>

            {/* Body */}
            <div className="flex h-full w-full items-center justify-center gap-x-4">
              {/* Contact */}
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1.4 }}
                viewport={{ once: true }}
                className="flex h-full flex-col items-center justify-center gap-y-16 rounded-3xl border border-zinc-500/20 bg-zinc-700/10 px-8 py-6 shadow-[0_1px_30px_0_rgba(255,255,255,0.1)] shadow-zinc-400/10"
              >
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.8, delay: 1.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-baseline gap-y-10 md:flex-row md:gap-x-10"
                >
                  <ContactListItem
                    title="Location"
                    details="Ambala Cantt, Haryana"
                    icon={<FaLocationDot className="text-3xl text-zinc-200" />}
                  />

                  <ContactListItem
                    title="Phone Number"
                    details="91+ 8968059548"
                    icon={<IoCall className="text-3xl text-zinc-200" />}
                  />
                  <ContactListItem
                    title="Email Address"
                    details="anujistwal80@gmail.com"
                    icon={<IoMdMail className="text-3xl text-zinc-200" />}
                  />
                </motion.div>

                {/* Form  */}
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.8, delay: 1.6 }}
                  viewport={{ once: true }}
                  className="flex w-full items-center justify-center"
                >
                  <ContactForm />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
