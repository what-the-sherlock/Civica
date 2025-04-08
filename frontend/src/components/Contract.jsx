import { useState } from "react";
import { motion } from "framer-motion";

export default function Contract() {
  const [selectedLaw, setSelectedLaw] = useState(null);

  const laws = [
    {
      category: "Contractual Rights (Based on Performance & Obligations)",
      description:
        "These rights arise when a contract is legally formed and govern how parties must fulfill their obligations.",
      laws: [
        "Right to Performance: The right of a party to demand that the other party fulfills their contractual obligations as per the agreed terms.",
        "Right to Compensation for Breach: If one party fails to perform their duties, the other party has the right to claim compensation for losses suffered.",
        "Right to Rescind the Contract : A party has the right to cancel the contract if the other party breaches its terms or engages in fraud, misrepresentation, or coercion.",
        "Right to Specific Performance: In cases where monetary compensation is inadequate, the court may order the defaulting party to fulfill the contract as agreed.",
        "Right to Quantum Meruit: If one party has performed part of the contract but is prevented from completing it, they have the right to be paid for the work already done.",
      ],
    },
    {
      category: "Statutory Rights (Based on Law & Public Interest)",
      description:
        "These rights exist regardless of specific contract terms and are imposed by law to protect public interest and fair dealings.",
        laws: [
            "Right Against Unlawful Agreements: Any contract involving illegal activities (like fraud, smuggling, or bribery) is void and unenforceable.",
            "Right to Free Consent: A contract must be formed with free will. If obtained through coercion, undue influence, fraud, or misrepresentation, the affected party can void the contract.",
            "Right to Enforce Contracts in Court: A party has the legal right to approach the court if the other party breaches the contract. Courts can grant damages, injunctions, or specific performance.",
          ],
    },
    {
        category: "Remedial Rights (Based on Breach of Contract)",
        description:
          "When a contract is breached, the affected party has the right to seek legal remedies to recover their losses.",
          laws: [
              "Right to Damages (Compensation): The non-breaching party can claim financial compensation for losses suffered due to the breach.",
              "Right to Injunction: A court can order a party to stop doing something that breaches the contract.",
              "Right to Restitution: If one party unjustly benefits from a contract, the other party has the right to claim compensation.",

            ],
      },
  ];

  return (
    <section className="bg-[#EFDCAB] min-h-screen p-6 text-[#443627] text-center">
      <h2 className="text-3xl font-bold mb-6">Contract Laws</h2>
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
  