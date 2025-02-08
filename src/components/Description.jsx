import { motion } from "framer-motion";

export default function Description() {
  return (
    <motion.div
      // initial={{ x: 100, opacity: 0 }}
      // whileInView={{ x: 0, opacity: 1 }}
      // transition={{ ease: "easeIn", duration: 0.6 }}
      className="sm:max-w-auto max-w-sm"
    >
      <p className="font-semibold text-[#656464]">Hi there, I&apos;m</p>
      <p className="my-3 bg-gradient-to-r from-[#E52D39] to-[#6129A6] bg-clip-text text-2xl font-extrabold leading-8 text-transparent">
        Web Developer & <br /> UI/UX Designer
      </p>

      <p className="text-justify text-[0.94rem] leading-7 text-[#2c2c2c]">
        Creative and Passionate graduate with a Bachelor&apos;s in Computer
        Science Engineering from Chandigarh University. Equipped with strong
        problem-solving skills, I am committed to delivering high-quality work
        within deadlines.
      </p>

      <div className="flex flex-col gap-4 pt-4">
        <h1 className="font-bold text-[#2F2F2F]">Designing Tools</h1>
        <div className="flex gap-4">
          <img src="Illustrator.png" alt="photoshop" className="h-11 w-11" />
          <img src="photoshop.png" alt="photoshop" className="h-11 w-11" />
          <img src="Figma.png" alt="photoshop" className="h-11 w-11" />
          <img src="Framer.png" alt="photoshop" className="h-11 w-11" />
        </div>
      </div>
    </motion.div>
  );
}
