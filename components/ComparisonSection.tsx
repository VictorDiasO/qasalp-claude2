'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface ComparisonItem {
  without: string;
  with: string;
}

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [revealProgress, setRevealProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setRevealProgress(100);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const comparisons: ComparisonItem[] = [
    {
      without: 'Leads esperam horas por resposta',
      with: 'Resposta automática em 15 segundos',
    },
    {
      without: '40% dos leads são ignorados',
      with: '100% dos leads atendidos 24/7',
    },
    {
      without: 'Custo alto de atendimento',
      with: '-40% de custo por lead',
    },
    {
      without: 'Respostas genéricas e lentas',
      with: 'Recomendações precisas do catálogo',
    },
    {
      without: 'Leads frios chegam ao corretor',
      with: '90% dos leads já qualificados',
    },
    {
      without: 'Perda de oportunidades de madrugada',
      with: 'Atendimento inteligente 24/7',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-[#F7F4EA] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E3C4E] mb-6">
            Antes vs Depois
          </h2>
          <p className="text-xl text-[#2A2D34]/70 max-w-3xl mx-auto">
            Veja a transformação que a Qasa IA traz para sua imobiliária
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#2A2D34] to-[#0E3C4E] text-white p-6 rounded-2xl text-center"
            >
              <div className="text-4xl mb-2">❌</div>
              <h3 className="text-2xl font-bold">SEM QASA IA</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#FF6F3C] to-[#E8B77D] text-white p-6 rounded-2xl text-center"
            >
              <div className="text-4xl mb-2">✅</div>
              <h3 className="text-2xl font-bold">COM QASA IA</h3>
            </motion.div>
          </div>

          {/* Comparison Items */}
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {/* Without */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border-2 border-[#2A2D34]/20 rounded-xl p-6 flex items-center gap-4 relative overflow-hidden"
                >
                  <div className="text-3xl opacity-30">❌</div>
                  <p className="text-[#2A2D34]/70 line-through">{item.without}</p>
                  <div className="absolute inset-0 bg-[#2A2D34]/5 opacity-50" />
                </motion.div>

                {/* With */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-[#FF6F3C]/10 border-2 border-[#FF6F3C]/30 rounded-xl p-6 flex items-center gap-4 relative overflow-hidden shadow-lg"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="text-3xl"
                  >
                    ✓
                  </motion.div>
                  <p className="text-[#0E3C4E] font-semibold">{item.with}</p>

                  {/* Shine effect */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={isInView ? { x: '200%' } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { value: '+60%', label: 'Aumento em Conversão', icon: '📈' },
              { value: '-40%', label: 'de Custos por Lead', icon: '💰' },
              { value: '90%', label: 'Leads Qualificados', icon: '🎯' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#FF6F3C] to-[#E8B77D] text-white rounded-2xl p-8 text-center shadow-xl"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white font-bold text-xl rounded-xl shadow-2xl hover:shadow-[#FF6F3C]/50 transition-all"
            >
              Quero Esses Resultados Agora
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
