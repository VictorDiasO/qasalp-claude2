'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import IPhoneMockup from './IPhoneMockup';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'A IA que faz a Sua Imobiliária vender mais';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToDemo = () => {
    document.getElementById('conversation-demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#0E3C4E] via-[#E8B77D] to-[#FF6F3C] animate-gradient">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E3C4E]/80 via-transparent to-[#FF6F3C]/60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 min-h-[120px] lg:min-h-[160px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-12 sm:h-16 lg:h-20 bg-[#FF6F3C] ml-2 align-middle"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl mb-8 text-[#F7F4EA] leading-relaxed"
            >
              Atendimento humanizado 24/7 no WhatsApp que qualifica, recomenda imóveis e agenda visitas automaticamente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#FF6F3C] text-white font-semibold rounded-lg shadow-2xl hover:shadow-[#FF6F3C]/50 transition-all duration-300 text-lg relative overflow-hidden group animate-border-glow"
              >
                <span className="relative z-10">Agendar Demonstração Gratuita</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToDemo}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-lg"
              >
                Ver em Ação
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isTypingComplete ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-6 py-3 bg-[#FF6F3C] rounded-full text-white font-bold text-lg shadow-xl"
              >
                +2M Leads Atendidos
              </motion.div>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <span>Confiado por:</span>
                <span className="font-semibold">RE/MAX</span>
                <span>•</span>
                <span className="font-semibold">Lopes</span>
                <span>•</span>
                <span className="font-semibold">Tecimob</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <IPhoneMockup innerFrameBg="bg-[#F7F4EA]" statusBarColor="text-black">
              {/* Fixed Header */}
              <div className="sticky top-0 z-10 bg-[#F7F4EA] px-4 pt-4 pb-4 border-b border-[#2A2D34]/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6F3C] to-[#E8B77D] flex items-center justify-center text-white font-bold text-lg">
                    QI
                  </div>
                  <div>
                    <div className="text-[#0E3C4E] font-semibold">Qasa IA</div>
                    <div className="text-[#FF6F3C] text-xs">Online agora</div>
                  </div>
                </div>
              </div>

              {/* Scrollable chat messages */}
              <div className="flex-1 overflow-y-auto bg-[#F7F4EA] p-4 space-y-4">
                <AnimatedMessage delay={1} isUser>
                  Oi, vi um apê de 2 quartos no site
                </AnimatedMessage>

                <AnimatedMessage delay={2}>
                  Oi! 😊 Que ótimo! É na região da Mooca? Posso te mostrar opções incríveis que temos disponíveis!
                </AnimatedMessage>

                <AnimatedMessage delay={3} isUser>
                  Sim, quanto custa?
                </AnimatedMessage>

                <AnimatedMessage delay={4}>
                  Encontrei 3 apartamentos perfeitos para você! Todos com 2 quartos na Mooca:
                </AnimatedMessage>

                <AnimatedMessage delay={5}>
                  <div className="overflow-hidden">
                    <div className="bg-gradient-to-br from-[#FF6F3C]/10 to-[#E8B77D]/10 rounded-lg p-6 mb-2 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#FF6F3C]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                    </div>
                    <div className="text-sm">
                      🏠 R$ 450.000 - 65m²
                    </div>
                  </div>
                </AnimatedMessage>

                <AnimatedMessage delay={6}>
                  <div className="overflow-hidden">
                    <div className="bg-gradient-to-br from-[#FF6F3C]/10 to-[#E8B77D]/10 rounded-lg p-6 mb-2 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#FF6F3C]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                    </div>
                    <div className="text-sm">
                      🏠 R$ 520.000 - 72m² (Novo!)
                    </div>
                  </div>
                </AnimatedMessage>

                <AnimatedMessage delay={7}>
                  <div className="overflow-hidden">
                    <div className="bg-gradient-to-br from-[#FF6F3C]/10 to-[#E8B77D]/10 rounded-lg p-6 mb-2 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#FF6F3C]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                    </div>
                    <div className="text-sm">
                      🏠 R$ 480.000 - 68m²
                    </div>
                  </div>
                </AnimatedMessage>

                <AnimatedMessage delay={8} isUser>
                  Gostei do segundo!
                </AnimatedMessage>

                <AnimatedMessage delay={9}>
                  Excelente escolha! É um imóvel incrível. Quer agendar uma visita? Tenho horários disponíveis amanhã às 14h ou 16h 😊
                </AnimatedMessage>
              </div>
            </IPhoneMockup>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 10, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white px-6 py-3 rounded-full font-bold shadow-xl"
            >
              Lead Qualificado em 2min 34s ⚡
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

// Animated Message Component
const AnimatedMessage = ({ children, delay, isUser = false }: { children: React.ReactNode; delay: number; isUser?: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const isString = typeof children === 'string';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
          isUser
            ? 'bg-[#FF6F3C] text-white rounded-br-sm'
            : 'bg-white text-[#2A2D34] rounded-bl-sm shadow-md border border-[#E8B77D]/30'
        }`}
      >
        {isString ? (
          <span dangerouslySetInnerHTML={{ __html: children }} />
        ) : (
          children
        )}
      </div>
    </motion.div>
  );
};

export default HeroSection;
