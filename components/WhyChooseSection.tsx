'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 20px 60px rgba(255, 111, 60, 0.2)',
      }}
      className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-[#FF6F3C]/30 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F3C]/5 via-transparent to-[#0E3C4E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl mb-6 inline-block"
        >
          {icon}
        </motion.div>

        <h3 className="text-2xl font-bold text-[#0E3C4E] mb-4">{title}</h3>
        <p className="text-[#2A2D34]/70 leading-relaxed">{description}</p>

        {/* Animated border */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D]"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        />
      </div>
    </motion.div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: '🧠',
      title: 'IA que Vende',
      description:
        'Não é um chatbot simples. É uma IA treinada especificamente para vender imóveis, entender contexto e conduzir conversas até o fechamento.',
      delay: 0.1,
    },
    {
      icon: '🎯',
      title: 'Recomendações Precisas',
      description:
        'Sistema RAG integrado com seu catálogo. Sugere exatamente os imóveis que combinam com o perfil e orçamento do lead.',
      delay: 0.2,
    },
    {
      icon: '🔥',
      title: 'Qualificação Inteligente',
      description:
        'Utiliza framework CHAMP para identificar leads quentes em segundos. Prioriza automaticamente quem está pronto para comprar.',
      delay: 0.3,
    },
    {
      icon: '🛡️',
      title: 'Zero Alucinação',
      description:
        'Responde apenas com informações reais do seu catálogo. Se não sabe, encaminha para corretor humano. Sem riscos ou constrangimentos.',
      delay: 0.4,
    },
    {
      icon: '💬',
      title: 'Humanizada de Verdade',
      description:
        'Tom natural, emojis na medida e timing perfeito. Seus leads não vão perceber que estão falando com uma IA.',
      delay: 0.5,
    },
    {
      icon: '⚙️',
      title: 'Setup em 14 Dias',
      description:
        'Implementação rápida e sem burocracia. Integramos com seu sistema atual e você começa a ver resultados na primeira semana.',
      delay: 0.6,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F7F4EA] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6F3C] rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E3C4E] mb-6">
            Por Que Escolher a Qasa IA?
          </h2>
          <p className="text-xl text-[#2A2D34]/70 max-w-3xl mx-auto">
            Tecnologia de ponta combinada com inteligência de mercado imobiliário
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl">
            ✨ Tecnologia aprovada por +500 imobiliárias
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
