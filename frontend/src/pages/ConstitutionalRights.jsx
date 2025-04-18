

import { useEffect, useRef } from "react";
import ConstitutionalLaws from "../components/ConstitutionalLaws";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  FaBalanceScale,
  FaFeatherAlt,
  FaRegSmileBeam,
} from "react-icons/fa";

import img1 from "../assets/img/c1.png";
import img2 from "../assets/img/c2.png";
import img3 from "../assets/img/c3.png";
import img4 from "../assets/img/c4.png";
import img5 from "../assets/img/c5.png";
import img6 from "../assets/img/c6.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const story = [
  {
    title: "Raghav’s Struggle",
    content: "Raghav, a young man from a small village, lived with his parents and siblings. He had always believed in the power of fairness and justice. One day, he was wrongfully accused of a crime he did not commit.",
    image: img1,
    icon: <FaBalanceScale />,
  },
  {
    title: "The Right to Equality (Article 14)",
    content: "Despite being from a poor background, Raghav knew that the Indian Constitution guaranteed him the right to be treated equally before the law. He was hopeful that he would be given a fair trial, like any other citizen.",
    image: img2,
    icon: <FaFeatherAlt />,
  },
  {
    title: "The Right to Freedom (Articles 19-22)",
    content: "After his arrest, Raghav was aware of his right to be informed of the charges against him (Article 22) and his right to remain silent. He didn’t speak until he had access to a lawyer, exercising his right to a defense.",
    image:img3,
    icon: <FaFeatherAlt />,
  },
  {
    title: "The Right to Life and Personal Liberty (Article 21)",
    content: "During his time in detention, Raghav feared for his safety and well-being. Article 21 of the Constitution ensured that no one could be deprived of their life or personal liberty except according to the procedure established by law. He trusted that this right would protect him.",
    image: img4,
    icon: <FaBalanceScale />,
  },
  {
    title: "The Right to a Fair Trial (Article 14, 21)",
    content: "Raghav hired a lawyer and prepared for his defense. He knew that under Article 21, he had the right to a fair and speedy trial. He was confident that justice would prevail as the law would provide him with a chance to defend himself.",
    image: img5,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Freedom of Speech and Expression (Article 19)",
    content: "During the trial, Raghav’s lawyer made a powerful argument, exercising his freedom of speech to advocate for his innocence. Raghav was allowed to speak on his behalf in court, exercising his right to express himself.",
    image: img6,
    icon: <FaRegSmileBeam />,
  },

  {
    title: "The Role of Judiciary in Protecting Rights",
    content: "The judge, an advocate for justice, upheld Raghav’s constitutional rights at every step. The judiciary’s role was to ensure that the law was applied impartially and fairly, thus preserving the rights guaranteed by the Constitution.",
    image: img2,
    icon: <FaRegSmileBeam />,
  },
];

const animateSections = () => {
  const sections = gsap.utils.toArray(".section");
  const storySections = sections.slice(2); // Skip intro

  // Show intro sections
  gsap.set(sections.slice(0, 2), { opacity: 1, scale: 1 });

  // Hide story sections initially
  gsap.set(storySections, { opacity: 0, scale: 0.95 });

  storySections.forEach((section) => {
    const title = section.querySelector(".section-title");
    const content = section.querySelector(".section-content");

    // Fade in section
    gsap.to(section, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
        markers: false, // set to true for debugging
      },
    });

    // Animate title
    if (title) {
      gsap.from(title, {
        y: -40,
        opacity: 100,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate content
    if (content) {
      gsap.from(content, {
        y: 30,
        opacity: 10,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });
    }
  });

  return sections;
};


const StorySection = ({ title, content, image, icon }) => (
  <div
    className="section relative h-screen w-full bg-center bg-cover flex items-end justify-center px-4 pb-16"
    style={{ backgroundImage: image ? `url(${image})` : "none" }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/5 z-10" />

    {/* Content Box at Bottom Center */}
    <div className="relative z-20 bg-[#EFDCAB] px-6 py-6 rounded-2xl shadow-xl max-w-xl w-full text-center border-2 border-[#D98324]/50 flex flex-col items-center space-y-2">
      <div className="text-[#D98324] text-3xl">{icon}</div>
      <h2 className="text-2xl font-bold text-[#7a4e21]">{title}</h2>
      <p className="text-base font-medium text-[#5a4636] leading-relaxed">
        {content}
      </p>
    </div>
  </div>
);


export default function ConstitutionalRights() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = animateSections();

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      snap: 1 / (sections.length - 1),
      scrub: 1,
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div>

      <div ref={containerRef} className="w-full overflow-hidden font-serif">
        {/* Intro Section */}
        <div className="section h-screen flex flex-col justify-center items-center bg-[#EFDCAB] text-[#443627] text-center px-6 py-10">
          <h1 className="section-title text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight text-[#D98324] mb-8">
          Constitutional Rights
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 max-w-3xl">
          Empowering Rights, Ensuring Justice.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl font-medium max-w-4xl text-[#5a4636] leading-relaxed">
          Constitutional Rights refer to the fundamental rights guaranteed by the Constitution of India, including rights to equality, freedom of speech, protection from discrimination, and the right to life and personal liberty. These rights are essential for safeguarding individual freedoms and ensuring justice.
          </p>
        </div>

      <div className="section h-screen flex flex-col justify-center items-center bg-[#EFDCAB] text-[#5a4636] text-center px-6">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
          To understand Constitutional Rights...
        </h2>
        <p className="section-content text-xl md:text-2xl max-w-2xl">
          ...here is a short story about Raghav, a young man from a small village.
        </p>
      </div>

      {/* Story Sections */}
      {story.map((item, index) => (
        <StorySection key={index} {...item} />
      ))}
    </div>
    <ConstitutionalLaws/>
    </div>
  );
}




