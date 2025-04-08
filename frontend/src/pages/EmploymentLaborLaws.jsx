

import React from "react";
import { motion } from "framer-motion";
import Contract from "../components/Contract";
import EmploymentLabor from "../components/EmploymentLabor";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const EmploymentLaborLaws = () => {
  return (
    <div className="bg-[#EFDCAB] text-[#443627] py-12 px-6 pt-30">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/3 mb-12 md:mb-0 px-4">
          <p className="text-[#D98324] uppercase tracking-widest text-sm font-semibold">
          Fair Work, Fair Pay, Fair Rights!
          </p>
          <h1 className="text-4xl font-bold leading-snug mt-2">
            Employment and Labor Laws
          </h1>
          <p className="text-lg text-[#443627] opacity-80 mt-4">
          Employment and labor laws are a set of regulations that govern the rights and responsibilities of workers and employers. These laws cover aspects such as wages, working hours, job security, workplace safety, discrimination, and dispute resolution. In India, key legislations include the Factories Act, 1948, Shops and Establishments Act, Payment of Wages Act, 1936, and Industrial Disputes Act, 1947, ensuring fair treatment and protection for employees.
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
                title: "Raj’s Hard Work",
                description: [
                  "Raj, a software engineer, worked late nights for months at TechPro Solutions, expecting overtime pay.",

                ],
                alignment: "right",
              },
              {
                title: "No Overtime Compensation",
                description: [
                  "Despite company policies stating that employees working extra hours should be compensated, Raj never received any extra payment.",

                ],
                alignment: "left",
              },
              {
                title: "Seeking Help",
                description: [
                  "Frustrated, he approached HR, but they dismissed his concerns, saying he was on a fixed salary and not eligible.",

                ],
                alignment: "right",
              },
              {
                title: "Legal Consultation",
                description: [
                  "Raj consulted a labor lawyer, who informed him about India’s labor laws, including the Factories Act, 1948, and Shops and Establishments Act, which protect employees' rights to fair wages and overtime pay.",

                ],
                alignment: "left",
              },
              {
                title: "Filing a Complaint",
                description: [
                  "With the lawyer’s guidance, Raj filed a complaint with the Labour Commissioner’s office under the Payment of Wages Act, 1936.",

                ],
                alignment: "right",
              },
              {
                title: "Investigation and Action",
                description: [
                  "The company was investigated, and it was found that multiple employees were denied overtime pay.",

                ],
                alignment: "left",
              },
              {
                title: "Justice Served",
                description: [
                  "The company was ordered to pay Raj and his colleagues their rightful dues, along with a penalty for violating labor laws.",

                ],
                alignment: "right",
              },
              {
                title: "Policy Change",
                description: [
                  "After the case, TechPro Solutions revised its employment policies to comply with labor laws and ensure fair treatment of employees.",

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
              src="src\assets\img\employment.png"
              alt="timeline"
            />
          </motion.div>
        </div>
      </div>
      <EmploymentLabor/>
    </div>
  );
};

export default EmploymentLaborLaws;
