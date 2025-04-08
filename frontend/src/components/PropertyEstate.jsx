import { useState } from "react";
import { motion } from "framer-motion";

export default function PropertyEstate() {
  const [selectedLaw, setSelectedLaw] = useState(null);

  const laws = [
    {
      category: "Ownership Rights",
      description:
        "These rights determine who legally owns the property and how they can use it.",
      laws: [
        "Absolute Ownership – Full control over property, including sale, lease, or transfer.",
        "Co-Ownership – When two or more individuals share ownership, like joint property in families.",
        "Legal & Equitable Ownership – Legal ownership is recognized by law, whereas equitable ownership refers to beneficial interest (e.g., a trustee holds legal ownership, but the beneficiary has equitable ownership).",

      ],
    },
    {
      category: "Possessory Rights",
      description:
        "These rights govern who has physical control over a property.",
      laws: [
        "Right to Possession – The right to occupy and use the property.",
        "Adverse Possession – If a person occupies land for a continuous period (12 years for private and 30 years for government property), they may claim legal ownership.",
        "Leasehold Rights – When a property is leased for a certain period, granting temporary possession but not full ownership.",


      ],
    },
    {
      category: "Transfer Rights",
      description:
        "These rights define how a property can be transferred from one person to another.",
      laws: [
        "Right to Sell – The owner can sell the property to another party.",
        "Right to Gift – Property can be transferred as a gift without consideration.",
        "Right to Mortgage – Property can be pledged as security for a loan.",
        "Right to Lease – An owner can lease their property while retaining ownership.",

      ],
    },
    {
      category: "Succession & Inheritance Rights",
      description:
        "These rights govern how property is passed down after the owner's death.",
      laws: [
        "Testamentary Succession – When a property is inherited through a valid will.",
        "Intestate Succession – If there is no will, property is distributed as per laws like the Hindu Succession Act (for Hindus) or Indian Succession Act (for others).",
        "Survivorship Rights – In joint ownership, the surviving owner may inherit the deceased owner’s share automatically.",

      ],
    },
    
  ];

  return (
    <section className="bg-[#EFDCAB] min-h-screen p-6 text-[#443627] text-center">
      <h2 className="text-3xl font-bold mb-6">Property and Estate Laws</h2>
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
  