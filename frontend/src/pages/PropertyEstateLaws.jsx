

import { useEffect, useRef } from "react";
import PropertyEstate from "../components/PropertyEstate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  FaBalanceScale,
  FaFeatherAlt,
  FaRegSmileBeam,
} from "react-icons/fa";

import img1 from "../assets/img/pel1.png";
import img2 from "../assets/img/pel2.png";
import img3 from "../assets/img/pel3.png";
import img4 from "../assets/img/pel4.png";
import img5 from "../assets/img/pel5.png";
import img6 from "../assets/img/pel6.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const story = [
  {
    title: "The Will & the Dispute",
    content: "Rajan, a retired businessman, drafts a will, leaving his estate to his two children, Aisha and Vikram.",
    image: img1,
    icon: <FaBalanceScale />,
  },
  {
    title: "Hidden Clauses",
    content: "After his passing, they discover a clause stating that their cousin, Rohit, also has a share in the property.",
    image: img2,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Legal Challenge",
    content: "Vikram disputes the will, claiming undue influence, while Aisha wants to honor their father's wishes.",
    image:img3,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Court Battle",
    content: "The case goes to court, where lawyers argue over inheritance rights, succession laws, and the validity of the will.",
    image: img4,
    icon: <FaBalanceScale />,
  },
  {
    title: "Mediation Attempt",
    content: "The judge advises mediation, highlighting India's Hindu Succession Act and Indian Succession Act, depending on their religion.",
    image: img5,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Resolution ",
    content: "After negotiations, they agree to divide the property fairly, avoiding prolonged litigation.",
    image: img6,
    icon: <FaRegSmileBeam />,
  },

  // {
  //   title: "",
  //   content: "",
  //   image: img6,
  //   icon: <FaRegSmileBeam />,
  // },
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


export default function PropertyEstateLaws() {
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
          Property and Estate Laws
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 max-w-3xl">
          Secure Your Legacy, Protect Your Rights.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl font-medium max-w-4xl text-[#5a4636] leading-relaxed">
          Property and estate laws govern the ownership, transfer, and inheritance of assets, including land, buildings, and personal wealth. These laws ensure rightful distribution through wills, succession rules, and legal procedures, preventing disputes and protecting ownership rights. In India, statutes like the Transfer of Property Act, 1882, and Hindu Succession Act, 1956, play a crucial role in regulating property matters.
          </p>
        </div>

      <div className="section h-screen flex flex-col justify-center items-center bg-[#EFDCAB] text-[#5a4636] text-center px-6">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
          To understand Property and Estate Laws...
        </h2>
        <p className="section-content text-xl md:text-2xl max-w-2xl">
          ...here is a short story about will and the dispute.
        </p>
      </div>

      {/* Story Sections */}
      {story.map((item, index) => (
        <StorySection key={index} {...item} />
      ))}
    </div>
    <PropertyEstate/>
    </div>
  );
}



