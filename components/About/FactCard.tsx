"use client"
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'
import CountUp from 'react-countup';
import { facts } from '@/utils/facts';

export default function FactCard({ fact, index }: { fact: typeof facts[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = fact.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white rounded-3xl p-10 border-2 border-[#E5E7EB] hover:border-[#60A5FA] transition-all duration-500 hover:shadow-2xl hover:shadow-[#60A5FA]/20 hover:-translate-y-3">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F3F6FB] to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
            className={`inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br ${fact.color} rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
          >
            <Icon className="w-14 h-14 text-white" strokeWidth={1.5} />
          </motion.div>

          <div className="mb-4">
            <motion.span 
              className="text-[#1E3A8A] inline-flex items-baseline group-hover:text-[#2563EB] transition-colors duration-300"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <CountUp end={fact.number}  className='text-3xl'/>
              <span className="ml-2 text-4xl">{fact.suffix}</span>
            </motion.span>
          </div>

          <p className="text-gray-600 text-lg">
            {fact.label}
          </p>
        </div>

        <div className={`absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br ${fact.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
        
        <motion.div
          className={`absolute inset-0 rounded-3xl border-2 ${fact.color.includes('2563EB') ? 'border-[#2563EB]' : 'border-[#60A5FA]'} opacity-0 group-hover:opacity-100`}
          animate={isInView ? {
            scale: [1, 1.05, 1],
            opacity: [0, 0.5, 0],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}

export function HighlightFacts() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F3F6FB]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-6 py-2 bg-white text-[#2563EB] rounded-full mb-4 border border-[#E5E7EB]">
            Shifrat Flasin
          </span>
          <h2 className="text-[#1E3A8A] mb-4">Our Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Më shumë se dy dekada përkushtimi, inovacioni dhe suksesi në industrinë e ndërtimit me çelik.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

