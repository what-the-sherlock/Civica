

import React from "react";
import { motion } from "framer-motion";
import Consumer from "../components/Consumer";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const ConsumerRights = () => {
  return (
    <div className="bg-[#EFDCAB] text-[#443627] py-12 px-6 pt-30">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/3 mb-12 md:mb-0 px-4">
          <p className="text-[#D98324] uppercase tracking-widest text-sm font-semibold">
          Empowered Consumers, Fairer Markets!
          </p>
          <h1 className="text-4xl font-bold leading-snug mt-2">
            Consumer Rights
          </h1>
          <p className="text-lg text-[#443627] opacity-80 mt-4">
          Consumer rights are the legal protections granted to buyers to ensure fair trade, safety, and accurate information about products and services. These rights include the Right to Safety, Right to Information, Right to Choice, Right to Be Heard, Right to Redressal, and Right to Consumer Education. They empower consumers to make informed decisions, seek justice against unfair practices, and ensure quality in goods and services.
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
                title: "Rahul’s Online Purchase",
                description: [
                  "Rahul ordered a smartphone from an e-commerce website, but when it arrived, he found it was defective.",

                ],
                alignment: "right",
              },
              {
                title: "Right to Safety",
                description: [
                  "He realized the phone was overheating, which could be a safety hazard. He decided to take action.",

                ],
                alignment: "left",
              },
              {
                title: "Right to Information",
                description: [
                  "Rahul checked the product details and warranty terms on the website but found misleading information.",

                ],
                alignment: "right",
              },
              {
                title: "Right to Choose",
                description: [
                  "He contacted customer service, requesting a replacement or refund, as he had the right to choose a proper product.",

                ],
                alignment: "left",
              },
              {
                title: "Right to be Heard",
                description: [
                  "The company initially ignored his complaint, but he persisted by emailing them and posting on social media.",

                ],
                alignment: "right",
              },
              {
                title: "Right to Redressal",
                description: [
                  "After continued follow-ups, the company offered him a replacement, but he demanded a full refund.",

                ],
                alignment: "left",
              },
              {
                title: "Consumer Court",
                description: [
                  "Frustrated, Rahul filed a complaint with the consumer forum, providing all necessary proof.",

                ],
                alignment: "right",
              },
              {
                title: "Justice Served",
                description: [
                  "The consumer forum ruled in his favor, ordering the company to refund his money and compensate for the inconvenience.",

                ],
                alignment: "left",
              },
              {
                title: "Lesson Learned",
                description: [
                  "Rahul realized the power of consumer rights and started educating others about their rights in the market.",

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
              src="src\assets\img\consumer.png"
              alt="timeline"
            />
          </motion.div>
        </div>
      </div>
      <Consumer/>
    </div>
  );
};

export default ConsumerRights;
