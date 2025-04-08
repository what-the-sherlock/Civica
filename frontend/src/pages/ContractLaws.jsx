

import React from "react";
import { motion } from "framer-motion";
import Contract from "../components/Contract";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const ContractLaws = () => {
  return (
    <div className="bg-[#EFDCAB] text-[#443627] py-12 px-6 pt-30">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/3 mb-12 md:mb-0 px-4">
          <p className="text-[#D98324] uppercase tracking-widest text-sm font-semibold">
          A promise backed by law—Contracts ensure trust and accountability!
          </p>
          <h1 className="text-4xl font-bold leading-snug mt-2">
            Contract Laws
          </h1>
          <p className="text-lg text-[#443627] opacity-80 mt-4">
          Contract law governs agreements between parties, ensuring that promises made in business and personal dealings are legally enforceable. Under the Indian Contract Act, 1872, a valid contract must include an offer, acceptance, consideration, legal intention, and free consent. If a party breaches the contract, legal remedies like compensation or specific performance are available.
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
                title: "Offer & Acceptance",
                description: [
                  "Raj, a businessman, offers to sell 100 chairs to Shyam, a furniture shop owner, for ₹50,000. Shyam agrees and confirms the deal via email.",

                ],
                alignment: "right",
              },
              {
                title: "Consideration",
                description: [
                  " Shyam makes an advance payment of ₹10,000 as a token amount. The remaining ₹40,000 is to be paid upon delivery.",

                ],
                alignment: "left",
              },
              {
                title: "Legal Intention",
                description: [
                  "Since both parties are involved in a business transaction, the contract is legally binding under the Indian Contract Act, 1872.",

                ],
                alignment: "right",
              },
              {
                title: "Breach of Contract ",
                description: [
                  "A week later, Raj informs Shyam that he sold the chairs to someone else for a higher price, violating their agreement.",
                ],
                alignment: "left",
              },
              {
                title: "Legal Action",
                description: [
                  "Shyam sends a legal notice demanding either delivery of the chairs or compensation for losses.",

                ],
                alignment: "right",
              },
              {
                title: "Remedies for Breach",
                description: [
                  " If Raj refuses to comply, Shyam can approach the court to either:",
                  "Seek specific performance (forcing Raj to honor the contract).",
                  "Demand compensation for financial loss.",
                ],
                alignment: "left",
              },{
                title: "Court's Verdict",
                description: [
                  "The court finds Raj guilty of breach of contract and orders him to compensate Shyam ₹20,000 for losses.",

                ],
                alignment: "right",
              },
              {
                title: "Lesson Learned",
                description: [
                  "Contracts should always be in writing with clear terms to avoid disputes. Legal remedies are available if one party defaults.",
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
              src="src\assets\img\contract.png"
              alt="timeline"
            />
          </motion.div>
        </div>
      </div>
      <Contract/>
    </div>
  );
};

export default ContractLaws;
