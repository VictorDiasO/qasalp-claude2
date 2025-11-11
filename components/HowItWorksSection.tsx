'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface StepProps {
  number: number;
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const Step = ({ number, icon, title, description, delay }: StepProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row items-start gap-6 group">
        {/* Icon and number */}
        <div className="relative flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6F3C] to-[#E8B77D] flex items-center justify-center text-white text-4xl shadow-xl relative z-10"
          >
            {icon}
          </motion.div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#0E3C4E] flex items-center justify-center text-white font-bold text-lg z-20">
            {number}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-[#E8B77D]/20">
          <h3 className="text-2xl font-bold text-[#0E3C4E] mb-3">{title}</h3>
          <p className="text-[#2A2D34]/70 leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Connecting line (except for last item) */}
      {number < 4 && (
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : {}}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="hidden md:block absolute left-10 top-20 w-0.5 h-full bg-gradient-to-b from-[#FF6F3C] to-[#E8B77D] -z-10"
          style={{ height: '4rem' }}
        />
      )}
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(100);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const steps = [
    {
      number: 1,
      icon: '📱',
      title: 'Lead Chega',
      description:
        'Cliente envia mensagem via WhatsApp ou formulário do site. Sistema detecta e ativa a Qasa IA instantaneamente.',
      delay: 0.1,
    },
    {
      number: 2,
      icon: '💬',
      title: 'IA Responde',
      description:
        'Em menos de 15 segundos, resposta personalizada e humanizada. Coleta informações essenciais com naturalidade.',
      delay: 0.3,
    },
    {
      number: 3,
      icon: '🎯',
      title: 'IA Qualifica',
      description:
        'Análise inteligente de perfil, orçamento e timing. Recomenda imóveis específicos do catálogo que combinam perfeitamente.',
      delay: 0.5,
    },
    {
      number: 4,
      icon: '🤝',
      title: 'Corretor Fecha',
      description:
        'Lead qualificado e quente é notificado ao corretor com ficha completa. Corretor entra para fechar negócio.',
      delay: 0.7,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-[#F7F4EA] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6F3C] rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0E3C4E] rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E3C4E] mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-[#2A2D34]/70 max-w-3xl mx-auto mb-8">
            Do primeiro contato até o agendamento: processo simples e eficiente
          </p>

          {/* Progress bar */}
          <div className="max-w-md mx-auto">
            <div className="h-2 bg-[#E8B77D]/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </div>
            <p className="text-sm text-[#2A2D34]/60 mt-2">
              Processo completo em média de 2-3 minutos
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-[#0E3C4E] to-[#FF6F3C] text-white px-8 py-4 rounded-2xl shadow-xl">
            <div className="text-sm opacity-90 mb-1">Resultado médio</div>
            <div className="text-3xl font-bold">
              90% dos leads qualificados viram agendamentos ✨
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
