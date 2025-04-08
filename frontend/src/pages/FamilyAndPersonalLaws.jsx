

import React from "react";
import { motion } from "framer-motion";
import FamilyLaws from "../components/FamilyLaws";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const FamilyAndPersonalLaws = () => {
  return (
    <div className="bg-[#EFDCAB] text-[#443627] py-12 px-6 pt-30">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/3 mb-12 md:mb-0 px-4">
          <p className="text-[#D98324] uppercase tracking-widest text-sm font-semibold">
            Protecting Rights, Strengthening Families.
          </p>
          <h1 className="text-4xl font-bold leading-snug mt-2">
            Family and Personal Laws
          </h1>
          <p className="text-lg text-[#443627] opacity-80 mt-4">
            Family and personal laws govern legal matters related to marriage, divorce, child custody, adoption, inheritance, and other personal relationships. These laws ensure the protection of individual rights and responsibilities within families and personal affairs.
          </p>
        </div>

        {/* Right Timeline Section */}
        <div className="w-full md:w-2/3 px-4">
          <div className="relative wrap overflow-hidden p-6">
            {/* Timeline Vertical Line */}
            <div className="absolute border-2 border-[#D98324] h-full left-1/2 transform -translate-x-1/2"></div>

            {/* Timeline Items with Animation */}
            {[
              {
                title: "Meera’s Marriage",
                description: [
                  "Meera, a bright and independent woman, marries Raj, a charming and well-spoken man.",
                  "The marriage starts off happily, but soon, Raj becomes controlling and possessive."
                ],
                alignment: "right",
              },
              {
                title: "The First Signs of Abuse",
                description: [
                  "Raj slaps Meera over a minor mistake, promising it won’t happen again.",
                  "Over time, verbal abuse turns into physical violence, and she is isolated from family and friends."
                ],
                alignment: "left",
              },
              {
                title: "Feeling Trapped",
                description: [
                  "Meera fears society’s judgment and believes she has nowhere to go.",
                  "She suffers in silence, unaware of her legal rights."
                ],
                alignment: "right",
              },
              {
                title: "A Ray of Hope",
                description: [
                  "Her neighbor, Mrs. Sharma, hears her cries and offers support.",
                  "She informs Meera about the Protection of Women from Domestic Violence Act, 2005, and her right to seek protection and residence orders."
                ],
                alignment: "left",
              },
              {
                title: "Taking a Stand",
                description: [
                  "Encouraged by Mrs. Sharma, Meera contacts a Protection Officer and files a complaint.",
                  "The court grants her a protection order, restraining Raj from approaching her."
                ],
                alignment: "right",
              },
              {
                title: "A New Beginning",
                description: [
                  "With legal support and counseling, Meera rebuilds her life.",
                  "She joins an NGO to help other women escape domestic violence."
                ],
                alignment: "left",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={timelineVariants}
                className={`mb-8 flex flex-col md:flex-row items-center ${
                  event.alignment === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot and Connector */}
                <div className="w-4 h-4 bg-[#D98324] rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                
                {/* Event Content */}
                <div className="md:w-5/12 w-full px-4">
                  <h4 className="font-bold text-xl text-[#D98324]">
                    {event.title}
                  </h4>
                  {event.description.map((line, i) => (
                    <p key={i} className="text-[#443627] opacity-90 text-md mt-2">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Timeline Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              className="w-40 max-w-md md:max-w-lg mt-8"
              src="src/assets/img/family.png"
              alt="timeline"
            />
          </motion.div>
        </div>
      </div>
      <FamilyLaws/>
    </div>
  );
};

export default FamilyAndPersonalLaws;
