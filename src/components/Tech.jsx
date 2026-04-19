import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {



        
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28"
            key={technology.name}
            title={technology.name}
            aria-label={technology.name}
          >
            {technology.Icon ? (
              <technology.Icon
                className="tech-icon w-full h-full text-white"
                style={{ width: "100%", height: "100%" }}
              />
            ) : technology.label ? (
              <div
                className={`tech-icon w-full h-full flex items-center justify-center rounded-2xl text-[22px] font-black ${technology.badgeClassName ?? "bg-tertiary text-white"}`}
              >
                {technology.label}
              </div>
            ) : (
              <img
                src={technology.icon}
                alt={technology.name}
                className="tech-icon w-full h-full object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
