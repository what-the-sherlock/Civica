import { useState } from "react";
import { motion } from "framer-motion";

export default function Consumer() {
  const [selectedLaw, setSelectedLaw] = useState(null);

  const laws = [
    {
      category: "Right to Safety",
      description:
        "Consumers have the right to be protected from hazardous goods and services that can harm life or property.",
      laws: [
        "Product Safety – Ensures that goods meet safety standards before being sold.",
        "Service Safety – Prevents risks from unsafe services (e.g., faulty electrical work).",

      ],
    },
    {
        category: "Right to Information",
        description:
          "Consumers must be given accurate details about products and services, such as price, quality, quantity, and ingredients.",
        laws: [
          "Product Transparency – Manufacturers must disclose product specifications.",
          "Misleading Advertisements Protection – Prevents false claims in ads.",

  
        ],
      },
      {
        category: "Right to Choose",
        description:
          "Consumers have the freedom to choose from a variety of goods and services at competitive prices without monopoly or pressure.",
        laws: [
          "Fair Competition – Encourages multiple options for consumers.",
          "No Forced Selling – Protects against manipulative sales tactics.",

        ],
      },
      {
        category: "Right to Be Heard",
        description:
          "Consumers can voice complaints and concerns about defective products or unfair practices, ensuring their grievances are addressed.",
        laws: [
          "Consumer Forums – Platforms like consumer courts where complaints can be filed.",
          "Company Grievance Redressal – Companies must provide support for complaints.",
  
        ],
      },
      {
        category: "Right to Seek Redressal",
        description:
          "Consumers can seek compensation or corrective action for faulty products, poor services, or unfair business practices.",
        laws: [
          "Refund or Replacement – Entitles consumers to get their money back or a new product.",
          "Compensation for Damages – Companies may be liable for losses suffered.",
 
        ],
      },
      {
        category: "Right to Consumer Education",
        description:
          "Consumers should be educated about their rights and responsibilities to make informed choices and protect themselves from fraud.",
        laws: [
          "Awareness Programs – Government and NGOs conduct campaigns.",
          "Consumer Organizations – Groups that help consumers understand their rights.",

        ],
      },
  ];

  return (
    <section className="bg-[#EFDCAB] min-h-screen p-6 text-[#443627] text-center">
      <h2 className="text-3xl font-bold mb-6">Consumer Rights</h2>
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
  