import { useEffect, useRef } from "react";
import Consumer from "../components/Consumer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  FaBalanceScale,
  FaFeatherAlt,
  FaRegSmileBeam,
} from "react-icons/fa";

import img1 from "../assets/img/cr1.png";
import img2 from "../assets/img/cr2.png";
import img3 from "../assets/img/cr3.png";
import img4 from "../assets/img/cr4.png";
import img5 from "../assets/img/cr5.png";
import img6 from "../assets/img/cr6.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const story = [
  {
    title: "Rahul’s Online Purchase",
    content: "Rahul ordered a smartphone from an e-commerce website, but when it arrived, he found it was defective.",
    image: img1,
    icon: <FaBalanceScale />,
  },
  {
    title: "Right to Safety",
    content: "He realized the phone was overheating, which could be a safety hazard. He decided to take action.",
    image: img2,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Right to Information",
    content: "Rahul checked the product details and warranty terms on the website but found misleading information.",
    image:img3,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Right to Choose",
    content: "He contacted customer service, requesting a replacement or refund, as he had the right to choose a proper product.",
    image: img4,
    icon: <FaBalanceScale />,
  },
  {
    title: "Right to be Heard",
    content: "The company initially ignored his complaint, but he persisted by emailing them and posting on social media.",
    image: img5,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Right to Redressal",
    content: "After continued follow-ups, the company offered him a replacement, but he demanded a full refund.",
    image: img4,
    icon: <FaRegSmileBeam />,
  },
  {
    title: "Consumer Court",
    content: "Frustrated, Rahul filed a complaint with the consumer forum, providing all necessary proof.",
    image: img6,
    icon: <FaRegSmileBeam />,
  },
  {
    title: "Justice Served",
    content: "The consumer forum ruled in his favor, ordering the company to refund his money and compensate for the inconvenience.",
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


export default function ConsumerRights() {
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
          Consumer Rights
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 max-w-3xl">
          Empowered Consumers, Fairer Markets!
          </p>
          
          <p className="text-base md:text-lg lg:text-xl font-medium max-w-4xl text-[#5a4636] leading-relaxed">
          Consumer rights are the legal protections granted to buyers to ensure fair trade, safety, and accurate information about products and services. These rights include the Right to Safety, Right to Information, Right to Choice, Right to Be Heard, Right to Redressal, and Right to Consumer Education. They empower consumers to make informed decisions, seek justice against unfair practices, and ensure quality in goods and services.
          </p>
        </div>

      <div className="section h-screen flex flex-col justify-center items-center bg-[#EFDCAB] text-[#5a4636] text-center px-6">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
          To understand consumer rights...
        </h2>
        <p className="section-content text-xl md:text-2xl max-w-2xl">
          ...here is a short story about Rahul's online purchase.
        </p>
      </div>

      {/* Story Sections */}
      {story.map((item, index) => (
        <StorySection key={index} {...item} />
      ))}
    </div>
    <Consumer/>
    </div>
  );
}


