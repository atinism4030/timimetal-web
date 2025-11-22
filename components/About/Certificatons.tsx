import { certifications } from "@/utils/certifications";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import React from "react";

const Certificatons = () => {
  return (
<section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-6 py-2 bg-[#F3F6FB] text-[#2563EB] rounded-full mb-4">
            Cilësia & Standardet
          </span>
          <h2 className="text-[#1E3A8A] mb-4">Certifications & Quality Standards</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Angazhimi ynë ndaj cilësisë dhe sigurisë vërtetohet nga certifikatat dhe standardet më të larta ndërkombëtare.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-white to-[#F3F6FB] rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#2563EB] transition-all duration-300 hover:shadow-xl hover:shadow-[#2563EB]/10 hover:-translate-y-2 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-[#2563EB]/30"
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-[#1E3A8A] mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                    {cert.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">
                    {cert.description}
                  </p>

                  {/* Checkmark Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#60A5FA] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#60A5FA] rounded-2xl p-8 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="mb-4">Committed to Excellence</h3>
              <p className="text-white/90">
                Çdo certifikatë përfaqëson angazhimin tonë për të ofruar punë të cilësisë më të lartë, duke respektuar 
                standardet më rigoroze ndërkombëtare në siguri, cilësi dhe mbrojtje të mjedisit.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm text-white/90">Certified Since 1999</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm text-white/90">Annual Audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm text-white/90">100% Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificatons;
