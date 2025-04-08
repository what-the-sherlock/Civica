

import React from "react";
import { motion } from "framer-motion";
import FamilyLaws from "../components/FamilyLaws";
import PropertyEstate from "../components/PropertyEstate";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const PropertyEstateLaws = () => {
  return (
    <div className="bg-[#EFDCAB] text-[#443627] py-12 px-6 pt-30">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/3 mb-12 md:mb-0 px-4">
          <p className="text-[#D98324] uppercase tracking-widest text-sm font-semibold">
          Secure Your Legacy, Protect Your Rights.
          </p>
          <h1 className="text-4xl font-bold leading-snug mt-2">
            Property and Estate Laws
          </h1>
          <p className="text-lg text-[#443627] opacity-80 mt-4">
          Property and estate laws govern the ownership, transfer, and inheritance of assets, including land, buildings, and personal wealth. These laws ensure rightful distribution through wills, succession rules, and legal procedures, preventing disputes and protecting ownership rights. In India, statutes like the Transfer of Property Act, 1882, and Hindu Succession Act, 1956, play a crucial role in regulating property matters.
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
                title: "The Will & the Dispute",
                description: [
                  "Rajan, a retired businessman, drafts a will, leaving his estate to his two children, Aisha and Vikram.",

                ],
                alignment: "right",
              },
              {
                title: "Hidden Clauses",
                description: [
                  "After his passing, they discover a clause stating that their cousin, Rohit, also has a share in the property.",

                ],
                alignment: "left",
              },
              {
                title: "Legal Challenge",
                description: [
                  "Vikram disputes the will, claiming undue influence, while Aisha wants to honor their father's wishes.",

                ],
                alignment: "right",
              },
              {
                title: "Court Battle",
                description: [
                  "The case goes to court, where lawyers argue over inheritance rights, succession laws, and the validity of the will.",

                ],
                alignment: "left",
              },
              {
                title: "Mediation Attempt",
                description: [
                  "The judge advises mediation, highlighting India's Hindu Succession Act and Indian Succession Act, depending on their religion.",

                ],
                alignment: "right",
              },
              {
                title: "Resolution ",
                description: [
                  "After negotiations, they agree to divide the property fairly, avoiding prolonged litigation.",

                ],
                alignment: "left",
              },
              {
                title: "Legal Lesson",
                description: [
                  "Proper estate planning, clear wills, and legal awareness can prevent family conflicts over property.",

                ],
                alignment: "right",
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
              src="src\assets\img\property.png"
              alt="timeline"
            />
          </motion.div>
        </div>
      </div>
      <PropertyEstate/>
    </div>
  );
};

export default PropertyEstateLaws;
