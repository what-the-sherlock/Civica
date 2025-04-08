import { useState } from "react";
import { motion } from "framer-motion";

export default function EmploymentLabor() {
  const [selectedLaw, setSelectedLaw] = useState(null);

  const laws = [
    {
        category: "Right to Fair Wages",
        description:
          "Every employee is entitled to fair compensation as per legal standards.",
        laws: [
          "Minimum Wage – As per the Minimum Wages Act, 1948, employers must pay at least the government-prescribed minimum wage.",
          "Payment of Wages – The Payment of Wages Act, 1936 ensures timely and full wage payment without unauthorized deductions.",
          "Equal Pay for Equal Work – Under the Equal Remuneration Act, 1976, men and women must receive equal pay for the same work.",
      
  
        ],
      },
      {
        category: "Right to Job Security",
        description:
          "Laws protect employees from unfair termination and provide legal recourse.",
        laws: [
          "Protection Against Unfair Dismissal – Under the Industrial Disputes Act, 1947, employers must follow proper procedures before terminating employees.",
          "Notice Period & Compensation – Employees must be given notice or compensation before termination as per contract and labor laws.",

  
        ],
      },
      {
        category: "Right to Safe and Healthy Workplace",
        description:
          "Employees have the right to work in a safe and hygienic environment.",
        laws: [
          "Workplace Safety – The Factories Act, 1948 mandates safety measures, protective gear, and accident prevention.",
          "Health & Sanitation – Employers must ensure clean drinking water, proper ventilation, and sanitation facilities.",
          "Workplace Harassment Protection – The POSH Act, 2013 (Prevention of Sexual Harassment at Workplace) protects employees from harassment.",

        ],
      },
      {
        category: "Right to Reasonable Working Hours and Overtime Pay",
        description:
          "Employees cannot be forced to work beyond the prescribed hours without extra pay.",
        laws: [
          "Maximum Working Hours – As per the Factories Act, 1948, working hours should not exceed 8 hours a day or 48 hours a week.",
          "Overtime Pay – Employees working beyond normal hours must be compensated at twice their regular wage.",

  
        ],
      },
      {
        category: "Right to Leave and Holidays",
        description:
          "Employees are entitled to leaves and holidays under various labor laws.",
        laws: [
          "Paid Leave – The Factories Act, 1948, and Shops and Establishments Act provide for annual paid leave.",
          "Maternity Leave – Under the Maternity Benefit Act, 1961, women get 26 weeks of paid leave during pregnancy.",
          "Sick Leave & Casual Leave – Employees are entitled to a certain number of sick and casual leave days annually.",
          "Public Holidays – Employees must get national and festival holidays as per state laws.",
  
        ],
      },
      {
        category: "Right to Social Security and Benefits",
        description:
          "Employees are entitled to financial protection and benefits.",
        laws: [
          "Provident Fund (PF) – The Employees’ Provident Fund (EPF) Act, 1952 ensures retirement savings for employees.",
          "Gratuity – The Payment of Gratuity Act, 1972 provides a lump sum payment to employees with at least 5 years of service.",
          "Employee State Insurance (ESI) – Under the ESI Act, 1948, employees earning below a certain limit receive medical and financial benefits.",
          "Pension & Insurance – Employees under the Employees’ Pension Scheme (EPS) get pensions after retirement.",
  
        ],
      },
      {
        category: "Right to Protection Against Discrimination",
        description:
          "Employees must not be discriminated against based on gender, caste, religion, or disability.",
        laws: [
          "Equal Opportunity – The Equal Remuneration Act, 1976, and Rights of Persons with Disabilities Act, 2016 ensure non-discrimination.",
          "No Caste or Religious Discrimination – As per the Constitution of India, no employee should be discriminated against based on caste or religion.",

  
        ],
      },
      {
        category: "Right to Form Unions and Collective Bargaining",
        description:
          "Employees have the right to unite and negotiate for better working conditions.",
        laws: [
          "Trade Union Formation – Under the Trade Unions Act, 1926, workers can form and register unions.",
          "Collective Bargaining – Workers can negotiate wages, working hours, and conditions with employers.",

  
        ],
      },
      {
        category: "Right to Seek Legal Remedies",
        description:
          "Employees can take legal action in case of workplace violations.",
        laws: [
          "Labour Courts & Tribunals – Employees can approach labor courts under the Industrial Disputes Act, 1947, for disputes like wrongful termination.",
          "Complaints to Labour Commissioners – Employees can file complaints with the Labour Commissioner’s Office for issues like unpaid wages.",

  
        ],
      },
  ];

  return (
    <section className="bg-[#EFDCAB] min-h-screen p-6 text-[#443627] text-center">
      <h2 className="text-3xl font-bold mb-6">Employment and Labor Laws</h2>
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
  