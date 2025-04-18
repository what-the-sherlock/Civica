import { useEffect, useRef } from "react";
import EmploymentLabor from "../components/EmploymentLabor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  FaBalanceScale,
  FaFeatherAlt,
  FaRegSmileBeam,
} from "react-icons/fa";

import img1 from "../assets/img/ell1.png";
import img2 from "../assets/img/ell2.png";
import img3 from "../assets/img/ell3.png";
import img4 from "../assets/img/ell4.png";
import img5 from "../assets/img/ell5.png";
import img6 from "../assets/img/ell6.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const story = [
  {
    title: "Rita’s Struggles Begin at the Factory",
    content: "Rita, a skilled tailor, joins a garment factory hoping for steady income. But soon, she finds herself working over 9 hours a day without any overtime pay. Despite her dedication, the employer treats her as replaceable, ignoring her basic rights.",
    image: img1,
    icon: <FaBalanceScale />,
  },
  {
    title: "Denied Leave, Deducted Wages",
    content: "One day, Rita falls sick and requests a day off. Instead of compassion, her employer denies her leave and deducts that day’s wages. She starts to question whether this is legal but feels helpless and afraid of losing her job.",
    image: img2,
    icon: <FaFeatherAlt />,
  },
  {
    title: "A Ray of Hope from a Fellow Worker",
    content: "A kind co-worker tells her that many workers face such exploitation—and that Indian labor laws protect them. Encouraged, Rita visits a nearby Labor Welfare Office to find out what her rights truly are.",
    image:img3,
    icon: <FaFeatherAlt />,
  },
  {
    title: "Learning the Power of Labor Laws",
    content: `At the office, Rita learns about key laws made to protect workers:

1. The Minimum Wages Act, ensuring fair pay.

2. The Factories Act, limiting work hours and mandating overtime pay.

3. The Maternity Benefit Act, granting paid leave for pregnancy.

4. The Employees' State Insurance Act, offering medical coverage and benefits.
This knowledge empowers her with confidence and clarity.`,
    image: img4,
    icon: <FaBalanceScale />,
  },
  {
    title: "Standing Up and Speaking Out",
    content: "With support from a local labor rights NGO, Rita gathers the courage to file a formal complaint. The authorities step in, and her employer is held accountable. The factory is instructed to pay her dues and follow labor laws going forward.",
    image: img5,
    icon: <FaFeatherAlt />,
  },
  {
    title: "From Silent Worker to Empowered Educator",
    content: "Rita doesn't stop at justice for herself. Inspired by her journey, she becomes a peer educator, teaching fellow workers about their rights. She turns her pain into purpose, ensuring others don’t suffer in silence like she once did.",
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
          Employment and Labor Laws
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 max-w-3xl">
          Fair Work, Fair Pay, Fair Rights!
          </p>
          
          <p className="text-base md:text-lg lg:text-xl font-medium max-w-4xl text-[#5a4636] leading-relaxed">
          Employment and labor laws are a set of regulations that govern the rights and responsibilities of workers and employers. These laws cover aspects such as wages, working hours, job security, workplace safety, discrimination, and dispute resolution. In India, key legislations include the Factories Act, 1948, Shops and Establishments Act, Payment of Wages Act, 1936, and Industrial Disputes Act, 1947, ensuring fair treatment and protection for employees.
          </p>
        </div>

      <div className="section h-screen flex flex-col justify-center items-center bg-[#EFDCAB] text-[#5a4636] text-center px-6">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
          To understand Employment and Labor Laws...
        </h2>
        <p className="section-content text-xl md:text-2xl max-w-2xl">
          ...here is a short story about Rita's struggles in a factory.
        </p>
      </div>

      {/* Story Sections */}
      {story.map((item, index) => (
        <StorySection key={index} {...item} />
      ))}
    </div>
    <EmploymentLabor/>
    </div>
  );
}



