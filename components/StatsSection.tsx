'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface StatCardProps {
  icon: string;
  value: string;
  suffix?: string;
  label: string;
  delay: number;
}

const StatCard = ({ icon, value, suffix = '', label, delay }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const targetValue = parseInt(value);

  useEffect(() => {
    if (isInView) {
      let startValue = 0;
      const duration = 2000; // 2 seconds
      const increment = targetValue / (duration / 16); // 60fps

      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(startValue));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, targetValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        boxShadow: '0 20px 60px rgba(255, 111, 60, 0.3)'
      }}
      className="bg-gradient-to-br from-white to-[#F7F4EA] rounded-2xl p-8 shadow-xl border border-[#E8B77D]/20 hover:border-[#FF6F3C]/40 transition-all duration-300 relative overflow-hidden group"
      style={{ perspective: '1000px' }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F3C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="text-5xl mb-4">{icon}</div>
        <div className="text-4xl lg:text-5xl font-bold text-[#0E3C4E] mb-2">
          {/* {value.startsWith('+') || value.startsWith('-') ? value.charAt(0) : ''} */}
          {count}{suffix}
        </div>
        <div className="text-lg text-[#2A2D34]/70 font-medium">{label}</div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FF6F3C]/10 to-transparent rounded-bl-full" />
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: '📈', value: '+60', suffix: '%', label: 'Conversão', delay: 0.1 },
    { icon: '⚡', value: '15', suffix: 's', label: 'Tempo de Resposta', delay: 0.2 },
    { icon: '🎯', value: '90', suffix: '%', label: 'Leads Qualificados', delay: 0.3 },
    { icon: '💰', value: '-40', suffix: '%', label: 'Custo por Lead Qualificado', delay: 0.4 },
    { icon: '🌙', value: '24', suffix: '/7', label: 'Atendimento', delay: 0.5 },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F7F4EA] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6F3C] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0E3C4E] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E3C4E] mb-4">
            Números que Convencem
          </h2>
          <p className="text-xl text-[#2A2D34]/70 max-w-2xl mx-auto">
            Resultados reais de imobiliárias que transformaram seu atendimento com a Qasa IA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Additional credibility element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-[#2A2D34]/60 italic">
            "Mais de <span className="font-bold text-[#FF6F3C]">2 milhões de leads</span> atendidos com excelência"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
