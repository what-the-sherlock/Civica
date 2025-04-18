
import { useEffect, useRef } from "react";
import FamilyLaws from "../components/FamilyLaws";
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
    title: "Meera's Marriage",
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


export default function FamilyAndPersonalLaws() {
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
            Family and Personal Laws
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 max-w-3xl">
            Protecting Rights, Strengthening Families.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl font-medium max-w-4xl text-[#5a4636] leading-relaxed">
            Family and personal laws govern legal matters related to marriage, divorce, child custody, adoption, inheritance, and other personal relationships. These laws ensure the protection of individual rights and responsibilities within families and personal affairs.
          </p>
        </div>

      <div className="section h-screen flex flex-col justify-center items-center bg-[#EFDCAB] text-[#5a4636] text-center px-6">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
          To understand Family and Personal Laws...
        </h2>
        <p className="section-content text-xl md:text-2xl max-w-2xl">
          ...here is a short story about Meera's marriage.
        </p>
      </div>

      {/* Story Sections */}
      {story.map((item, index) => (
        <StorySection key={index} {...item} />
      ))}
    </div>
    <FamilyLaws/>
    </div>
  );
}

