'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FinalCTASection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-[#0E3C4E] via-[#0a2a36] to-[#0E3C4E] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#FF6F3C] rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8B77D] rounded-full blur-3xl opacity-20"
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 111, 60, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 111, 60, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            className="inline-block mb-8"
          >
            <div className="px-6 py-3 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white rounded-full font-bold text-lg shadow-2xl">
              ⚡ Oferta Limitada: 14 Dias Grátis
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Suas Concorrentes Já Estão Usando IA.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D]">
              E Você?
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-[#E8B77D] mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            A cada minuto, você perde leads para quem responde em 15 segundos.
            <br />
            <span className="text-white font-semibold">
              Agende sua demonstração agora e veja a diferença.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255, 111, 60, 0.3)',
                  '0 0 40px rgba(255, 111, 60, 0.6)',
                  '0 0 20px rgba(255, 111, 60, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-12 py-6 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white font-bold text-xl rounded-xl shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10">🚀 Agendar Demonstração Gratuita</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#E8B77D] to-[#FF6F3C]"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white/10 backdrop-blur-md text-white font-bold text-xl rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              💬 Falar com Especialista
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Setup incluído</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Suporte dedicado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Cancele quando quiser</span>
            </div>
          </motion.div>

          {/* Urgency message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-[#E8B77D] text-lg"
          >
            <p>
              ⏰ Apenas <span className="font-bold text-white">5 vagas</span> disponíveis para onboarding este mês
            </p>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <span>Confiado por:</span>
              <span className="font-semibold text-white text-lg">RE/MAX</span>
              <span className="text-white/40">•</span>
              <span className="font-semibold text-white text-lg">Lopes</span>
              <span className="text-white/40">•</span>
              <span className="font-semibold text-white text-lg">Tecimob</span>
              <span className="text-white/40">•</span>
              <span className="font-semibold text-[#E8B77D] text-lg">+500 Imobiliárias</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated particles effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FF6F3C] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
};

export default FinalCTASection;
