import { useState } from "react";
import { motion } from "framer-motion";

export default function FamilyLaws() {
  const [selectedLaw, setSelectedLaw] = useState(null);

  const laws = [
    {
      category: "Marriage Laws",
      description:
        "Regulate the legal aspects of marriage, including eligibility, registration, and dissolution.",
      laws: [
        "Hindu Marriage Act, 1955 : Governs marriage among Hindus, defining conditions for a valid marriage, divorce, and restitution of conjugal rights.",
        "Special Marriage Act, 1954",
        "Muslim Personal Law (Shariat) Application Act, 1937",
        "Indian Christian Marriage Act, 1872",
        "Parsi Marriage and Divorce Act, 1936",
      ],
    },
    {
      category: "Divorce and Separation Laws",
      description:
        "Define the procedures and grounds for divorce, judicial separation, and annulment.",
      laws: [
        "Hindu Marriage Act, 1955",
        "Muslim Law - Talaq, Khula, Mubarat",
        "Indian Divorce Act, 1869",
        "Special Marriage Act, 1954",
      ],
    },
    {
      category: "Child Custody and Guardianship Laws",
      description: "Determine parental rights and responsibilities over children.",
      laws: [
        "Hindu Minority and Guardianship Act, 1956",
        "Guardian and Wards Act, 1890",
        "Muslim Law",
      ],
    },
    {
      category: "Adoption Laws",
      description: "Regulate the process of adopting a child legally.",
      laws: [
        "Hindu Adoption and Maintenance Act, 1956",
        "Juvenile Justice (Care and Protection of Children) Act, 2015",
      ],
    },
    {
      category: "Maintenance and Alimony Laws",
      description:
        "Provide financial support to spouses and dependents after separation or divorce.",
      laws: [
        "Section 125 of CrPC",
        "Hindu Adoption and Maintenance Act, 1956",
        "Muslim Women (Protection of Rights on Divorce) Act, 1986",
      ],
    },
    {
      category: "Inheritance and Succession Laws",
      description: "Regulate the distribution of property after death.",
      laws: [
        "Hindu Succession Act, 1956 – Governs inheritance among Hindus.",
        "Indian Succession Act, 1925 – Applies to Christians and Parsis.",
        "Muslim Personal Law – Follows Sharia-based inheritance rules.",
      ],
    },
  ];

  return (
    <section className="bg-[#EFDCAB] min-h-screen p-6 text-[#443627] text-center">
      <h2 className="text-3xl font-bold mb-6">Family and Personal Laws</h2>
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
  