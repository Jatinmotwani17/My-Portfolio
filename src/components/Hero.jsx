import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import jatinImg from "../assets/Jatin.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
      <div className={`flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto ${styles.paddingX} gap-8`}>
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center md:items-start mt-10 md:mt-0">
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col justify-center items-center">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 h-24 sm:h-40 md:h-80 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white text-center md:text-left`}>
                Hi, I'm <span className="text-[#915EFF]">Jatin</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100 text-center md:text-left`}>
                Full Stack Developer | Tech Enthusiast
              </p>
            </div>
          </div>
        </div>
        {/* Right Side - Image */}
        <div className="flex justify-center items-center mt-8 md:mt-0">
          <img
            src={jatinImg}
            alt="Jatin"
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[36rem] lg:h-[36rem] rounded-full object-cover border-4 border-[#915EFF] shadow-lg"
          />
        </div>
      </div>
      {/* Uncomment if needed
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      */}
    </section>
  );
};

export default Hero;