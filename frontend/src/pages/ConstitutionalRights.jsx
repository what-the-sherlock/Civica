import React from "react";
import { motion } from "framer-motion";
import ConstitutionalLaws from "../components/ConstitutionalLaws";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const ConstitutionalRights = () => {
  return (
    <div className="bg-[#EFDCAB] text-[#443627] py-12 px-6 pt-30">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/3 mb-12 md:mb-0 px-4">
          <p className="text-[#D98324] uppercase tracking-widest text-sm font-semibold">
          Empowering Rights, Ensuring Justice.
          </p>
          <h1 className="text-4xl font-bold leading-snug mt-2">
            Constitutional Rights
          </h1>
          <p className="text-lg text-[#443627] opacity-80 mt-4">
          Constitutional Rights refer to the fundamental rights guaranteed by the Constitution of India, including rights to equality, freedom of speech, protection from discrimination, and the right to life and personal liberty. These rights are essential for safeguarding individual freedoms and ensuring justice.
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
                title: "Raghav’s Story",
                description: [
                  "Raghav, a young man from a small village, lived with his parents and siblings. He had always believed in the power of fairness and justice. One day, he was wrongfully accused of a crime he did not commit.",

                ],
                alignment: "right",
              },
              {
                title: "The Right to Equality (Article 14)",
                description: [
                  "Despite being from a poor background, Raghav knew that the Indian Constitution guaranteed him the right to be treated equally before the law. He was hopeful that he would be given a fair trial, like any other citizen.",
                  
                ],
                alignment: "left",
              },
              {
                title: "The Right to Freedom (Articles 19-22)",
                description: [
                  "After his arrest, Raghav was aware of his right to be informed of the charges against him (Article 22) and his right to remain silent. He didn’t speak until he had access to a lawyer, exercising his right to a defense.",
                ],
                alignment: "right",
              },
              {
                title: "The Right to Life and Personal Liberty (Article 21)",
                description: [
                  "During his time in detention, Raghav feared for his safety and well-being. Article 21 of the Constitution ensured that no one could be deprived of their life or personal liberty except according to the procedure established by law. He trusted that this right would protect him.",
                ],
                alignment: "left",
              },
              {
                title: "The Right to a Fair Trial (Article 14, 21)",
                description: [
                  "Raghav hired a lawyer and prepared for his defense. He knew that under Article 21, he had the right to a fair and speedy trial. He was confident that justice would prevail as the law would provide him with a chance to defend himself.",
                ],
                alignment: "right",
              },
              {
                title: "Freedom of Speech and Expression (Article 19)",
                description: [
                  "During the trial, Raghav’s lawyer made a powerful argument, exercising his freedom of speech to advocate for his innocence. Raghav was allowed to speak on his behalf in court, exercising his right to express himself.",
                ],
                alignment: "left",
              },
              {
                title: "The Role of Judiciary in Protecting Rights",
                description: [
                  "The judge, an advocate for justice, upheld Raghav’s constitutional rights at every step. The judiciary’s role was to ensure that the law was applied impartially and fairly, thus preserving the rights guaranteed by the Constitution.",
                ],
                alignment: "right",
              },
              {
                title: "Conclusion – The Victory of Justice",
                description: [
                  "After a long trial, the court ruled in Raghav’s favor. He was acquitted, and the wrongful charges against him were dismissed. Raghav left the courtroom with gratitude, knowing that the Constitution of India had protected his rights and ensured justice.",
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
              src="src\assets\img\constitutional_law.png"
              alt="timeline"
            />
          </motion.div>
        </div>
      </div>
      <ConstitutionalLaws/>
    </div>
  );
};

export default ConstitutionalRights;
