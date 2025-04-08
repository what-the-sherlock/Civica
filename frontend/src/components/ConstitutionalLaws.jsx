import { useState } from "react";
import { motion } from "framer-motion";

export default function ConstitutionalLaws() {
  const [selectedLaw, setSelectedLaw] = useState(null);

  const laws = [
    {
      category: "Right to Equality (Articles 14-18)",
      description:
        "Ensures that all citizens are treated equally before the law, prohibiting discrimination based on religion, race, caste, sex, or place of birth.",
      laws: [
        "Equality Before Law (Article 14): No one is above the law.",
        "Prohibition of Discrimination (Article 15): No discrimination based on religion, race, caste, sex, or place of birth.",
        "Equality of Opportunity (Article 16): Equal opportunities in government jobs.",
        "Abolition of Untouchability (Article 17): Untouchability is abolished and prohibited.",
        "Abolition of Titles (Article 18): Prohibits the government from granting titles, except military and academic distinctions.",
      ],
    },
    {
      category: "Right to Freedom (Articles 19-22)",
      description:
        "Grants various freedoms to individuals, such as freedom of speech, movement, assembly, and association.",
      laws: [
        "Freedom of Speech and Expression (Article 19(1)(a)): Right to express thoughts freely.",
        "Freedom of Assembly (Article 19(1)(b)): Right to assemble peacefully without arms.",
        "Freedom of Association (Article 19(1)(c)): Right to form associations or unions.",
        "Freedom of Movement (Article 19(1)(d)): Right to move freely throughout the territory of India.",
        "Freedom of Residence (Article 19(1)(e)): Right to reside and settle in any part of India.",
        "Freedom of Profession (Article 19(1)(g)): Right to practice any profession or occupation.",
      ],
    },
    {
      category: "Right against Exploitation (Articles 23-24)",
      description: "Protects individuals from exploitation, including forced labor and child labor.",
      laws: [
        "Prohibition of Traffic in Human Beings (Article 23): Prevents human trafficking and forced labor.",
        "Prohibition of Child Labor (Article 24): Prohibits employment of children in hazardous jobs.",
      ],
    },
    {
      category: "Right to Freedom of Religion (Articles 25-28)",
      description: "Guarantees freedom to practice, propagate, and profess religion, subject to public order, morality, and health.",
      laws: [
        "Freedom of Conscience (Article 25): Right to freely practice religion.",
        "Freedom to Manage Religious Affairs (Article 26): Right of religious denominations to manage their affairs.",
        "Freedom from Payment of Taxes for Religion (Article 27): No religious tax.",
        "Freedom from Religious Instruction in Schools (Article 28): Prohibits religious instruction in state-funded schools.",
      ],
    },
    {
      category: "Cultural and Educational Rights (Articles 29-30)",
      description:
        "Protects the rights of minorities to preserve their culture, language, and script.",
      laws: [
        "Protection of Interests of Minorities (Article 29): Right to conserve language, culture, and script.",
        "Right of Minorities to Establish Educational Institutions (Article 30): Right of minorities to set up educational institutions of their choice.",
      ],
    },
    {
      category: "Right to Constitutional Remedies (Article 32)",
      description: "Guarantees the right to approach the Supreme Court for the enforcement of fundamental rights if violated.",
      laws: [
        "Guarantees the right to approach the Supreme Court for the enforcement of fundamental rights if violated.",

      ],
    },
    {
      category: "Right to Life and Personal Liberty (Article 21)",
      description: "No person shall be deprived of life or personal liberty except according to the procedure established by law.",
      laws: [
        "It includes the right to live with dignity, access to health, education, and a clean environment.",

      ],
    },
    {
      category: "Right to Privacy (Derived from Article 21)",
      description: "The right to privacy is considered a fundamental right under Article 21, ensuring personal privacy and protection from arbitrary actions by the state.",
      laws: [
        "The right to privacy is considered a fundamental right under Article 21, ensuring personal privacy and protection from arbitrary actions by the state.",

      ],
    },
  ];

  return (
    <section className="bg-[#EFDCAB] min-h-screen p-6 text-[#443627] text-center">
      <h2 className="text-3xl font-bold mb-6">Constitutional Rights</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {laws.map((card, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[320px] p-[25px] text-center cursor-pointer transition-all duration-400 ease-in-out rounded-[12px] bg-white/10 border border-white/20 shadow-md shadow-black/20 backdrop-blur-[10px] hover:bg-gradient-to-br hover:from-[#D98324] hover:to-[#EFDCAB] hover:translate-y-[-5px] hover:shadow-lg hover:shadow-yellow-400/40 hover:border-none"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedLaw(card)}
          >
            <h3 className="text-lg font-semibold">{card.category}</h3>
            <p className="text-sm mt-2">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {selectedLaw && (
        <div className="fixed inset-0 bg-[#282521] bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-[#EFDCAB] p-6 rounded-lg max-w-lg shadow-xl relative">
            <button
              className="absolute top-2 right-3 text-[#443627] text-lg hover:text-[#D98324]"
              onClick={() => setSelectedLaw(null)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold text-[#D98324] mb-4">{selectedLaw.category}</h3>
            <p className="text-[#443627] text-sm mb-4">{selectedLaw.description}</p>
            <ul className="text-[#443627] text-sm list-disc pl-5">
              {selectedLaw.laws.map((law, i) => (
                <li key={i}>{law}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
  