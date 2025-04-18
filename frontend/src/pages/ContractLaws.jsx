import { useEffect, useRef } from "react";
import Contract from "../components/Contract";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  FaBalanceScale,
  FaFeatherAlt,
  FaRegSmileBeam,
} from "react-icons/fa";

import img1 from "../assets/img/cl1.png";
import img2 from "../assets/img/cl2.png";
import img3 from "../assets/img/cl3.png";
import img4 from "../assets/img/cl4.png";
import img5 from "../assets/img/cl5.png";
import img6 from "../assets/img/cl6.png";
import img7 from "../assets/img/cl7.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const story = [
  {
    title: "Offer & Acceptance",
    content: "Raj, a businessman, offers to sell 100 chairs to Shyam, a furniture shop owner, for ₹50,000. Shyam agrees and confirms the deal via email.",
    image: img1,
    icon: <FaBalanceScale />,
  },
  {
    title: "Consideration",
    content: "Shyam makes an advance payment of ₹10,000 as a token amount. The remaining ₹40,000 is to be paid upon delivery.",
    image: img2,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Legal Intention",
    content: "Since both parties are involved in a business transaction, the contract is legally binding under the Indian Contract Act, 1872.",
    image:img3,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Breach of Contract",
    content: "A week later, Raj informs Shyam that he sold the chairs to someone else for a higher price, violating their agreement.",
    image: img4,
    icon: <FaBalanceScale />,
  },
  {
    title: "Legal Action",
    content: "Shyam sends a legal notice demanding either delivery of the chairs or compensation for losses.",
    image: img5,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Remedies for Breach",
    content: `If Raj refuses to comply, Shyam can approach the court to either:

1. Seek specific performance (forcing Raj to honor the contract).

2. Demand compensation for financial loss.`,
    image: img6,
    icon: <FaRegSmileBeam />,
  },

  {
    title: "Court's Verdict ",
    content: "The court finds Raj guilty of breach of contract and orders him to compensate Shyam ₹20,000 for losses.",
    image: img7,
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


export default function ContractLaws() {
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
          Contract Laws
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 max-w-3xl">
          A promise backed by law—Contracts ensure trust and accountability!
          </p>
          
          <p className="text-base md:text-lg lg:text-xl font-medium max-w-4xl text-[#5a4636] leading-relaxed">
          Contract law governs agreements between parties, ensuring that promises made in business and personal dealings are legally enforceable. Under the Indian Contract Act, 1872, a valid contract must include an offer, acceptance, consideration, legal intention, and free consent. If a party breaches the contract, legal remedies like compensation or specific performance are available.
          </p>
        </div>

      <div className="section h-screen flex flex-col justify-center items-center bg-[#EFDCAB] text-[#5a4636] text-center px-6">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
          To understand Contract Laws...
        </h2>
        <p className="section-content text-xl md:text-2xl max-w-2xl">
          ...here is a short story about a businessman named Raj.
        </p>
      </div>

      {/* Story Sections */}
      {story.map((item, index) => (
        <StorySection key={index} {...item} />
      ))}
    </div>
    <Contract/>
    </div>
  );
}



