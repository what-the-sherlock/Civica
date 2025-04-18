

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  FaBalanceScale,
  FaFeatherAlt,
  FaRegSmileBeam,
} from "react-icons/fa";

import img1 from "../assets/img/1pfl.png";
import img2 from "../assets/img/2pfl.png";
import img3 from "../assets/img/3pfl.png";
import img4 from "../assets/img/4pfl.png";
import img5 from "../assets/img/5pfl.png";
import img6 from "../assets/img/6pfl.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const story = [
  {
    title: "Meera’s Marriage",
    content: "Meera, a bright and independent woman, marries Raj, a charming and well-spoken man. The marriage starts off happily, but soon, Raj becomes controlling and possessive. ",
    image: img1,
    icon: <FaBalanceScale />,
  },
  {
    title: "The First Signs of Abuse",
    content: "Raj slaps Meera over a minor mistake, promising it won’t happen again. Over time, verbal abuse turns into physical violence, and she is isolated from family and friends.",
    image: img2,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Feeling Trapped",
    content: "Meera fears society’s judgment and believes she has nowhere to go. She suffers in silence, unaware of her legal rights.",
    image: img3,
    icon: <FaFeatherAlt />,
  },
  {
    title: "A Ray of Hope",
    content: "Her neighbor, Mrs. Sharma, hears her cries and offers support. She informs Meera about the Protection of Women from Domestic Violence Act, 2005, and her right to seek protection and residence orders.",
    image: img4,
    icon: <FaBalanceScale />,
  },
  {
    title: "Taking a Stand",
    content: "Encouraged by Mrs. Sharma, Meera contacts a Protection Officer and files a complaint. The court grants her a protection order, restraining Raj from approaching her.",
    image: img5,
    icon: <FaFeatherAlt />,
  },
  {
    title: "A New Beginning",
    content: "With legal support and counseling, Meera rebuilds her life. She joins an NGO to help other women escape domestic violence.",
    image: img6,
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
        opacity: 0,
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
        opacity: 0,
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
    className="section relative h-screen w-full bg-center bg-cover"
    style={{ backgroundImage: image ? `url(${image})` : "none" }}
  >
    {/* Optional dark overlay for contrast */}
    <div className="absolute inset-0  z-10" />

    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 bg-[#EFDCAB] p-6 rounded-2xl shadow-xl max-w-xl text-center border-2 border-[#D98324]/50">
      <div className="section-icon text-[#D98324] text-4xl mb-2">{icon}</div>
      <h2 className="section-title text-3xl font-bold mb-2 text-[#7a4e21]">
        {title}
      </h2>
      <p className="section-content text-lg font-medium text-[#5a4636]">
        {content}
      </p>
    </div>
  </div>
);



export default function RaghavScrollStory() {
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
    <div ref={containerRef} className="w-full overflow-hidden font-serif">
      {/* Intro Sections */}
      <div className="section h-screen flex flex-col justify-center items-center bg-[#EFDCAB] text-[#443627] text-center px-6">
        <h1 className="section-title text-6xl md:text-8xl font-black tracking-widest text-[#D98324] mb-6">
          Constitutional Rights
        </h1>
        <p className="text-2xl md:text-3xl font-medium max-w-xl">
          Empowering Rights, Ensuring Justice
        </p>
      </div>

      <div className="section h-screen flex flex-col justify-center items-center bg-[#EFDCAB] text-[#5a4636] text-center px-6">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
          To understand constitutional rights...
        </h2>
        <p className="section-content text-xl md:text-2xl max-w-2xl">
          ...here is a short story about a young man named Raghav.
        </p>
      </div>

      {/* Story Sections */}
      {story.map((item, index) => (
        <StorySection key={index} {...item} />
      ))}
    </div>
  );
}
