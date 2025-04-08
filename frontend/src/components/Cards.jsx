import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import constitutionIcon from "../assets/img/constitutional_law.png";
import contractIcon from "../assets/img/contract.png";
import propertyIcon from "../assets/img/property.png";
import consumerIcon from "../assets/img/consumer.png";
import familyIcon from "../assets/img/family.png";
import employmentIcon from "../assets/img/employment.png";

const cardData = [
  {
    title: "Constitutional Rights",
    description: "Constitutional Rights refer to the fundamental rights guaranteed by the Constitution of India,that are essential for safeguarding individual freedoms and ensuring justice",
    image: constitutionIcon,
    link: "/constitutional-rights",
  },
  {
    title: "Contract Law",
    description: "Contract Law governs agreements between two or more parties, ensuring that promises made are legally enforceable.",
    image: contractIcon,
    link: "/contract-law",
  },
  {
    title: "Property and Real Estate Laws",
    description: "Property and Real Estate Laws regulate the ownership, transfer, and use of property, both movable and immovable.",
    image: propertyIcon,
    link: "/property-estate-laws",
  },
  {
    title: "Consumer Rights",
    description: "Consumer Rights protect individuals against unfair trade practices and ensure that consumers have access to goods and services of acceptable quality.",
    image: consumerIcon,
    link: "/consumer-rights",
  },
  {
    title: "Family and personal laws",
    description: "Family and Personal Laws govern matters related to marriage, divorce, inheritance, adoption, guardianship, and maintenance. ",
    image: familyIcon,
    link: "/family-and-personal-laws",
  },
  {
    title: "Employment and Labor laws",
    description: "Employment and Labor Laws regulate the relationship between employers and employees, ensuring fair wages, safe working conditions, and protection against exploitation. ",
    image: employmentIcon,
    link: "/employment-labor-laws",
  },
];

export const Cards = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full text-center py-12 bg-[#EFDCAB] text-[#443627]">
      <h2 className="text-4xl font-bold mb-10">Civica - The only best way to learn your civil rights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            // className="bg-[#EFDCAB] bg-opacity-10 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 shadow-lg max-w-xs mx-auto backdrop-blur-md border border-black/20 hover:bg-gradient-to-r from-[#D98324] to-[#EFDCAB] hover:-translate-y-2 hover:shadow-2xl"
            className="w-full max-w-[320px] p-[25px] text-center cursor-pointer transition-all duration-400 ease-in-out rounded-[12px] bg-white/10 border border-white/20 shadow-md shadow-black/20 backdrop-blur-[10px] hover:bg-gradient-to-br hover:from-[#D98324] hover:to-[#EFDCAB] hover:translate-y-[-5px] hover:shadow-lg hover:shadow-yellow-400/40 hover:border-none"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => card.link && navigate(card.link)}
          >
            <img src={card.image} alt={card.title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-[#443627]">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
