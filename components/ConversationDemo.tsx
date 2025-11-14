'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import IPhoneMockup from './IPhoneMockup';

interface Message {
  text: string;
  isUser: boolean;
  delay: number;
}

const ConversationDemo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  const messages: Message[] = [
    { text: 'Oi, vi um apê de 2 quartos.', isUser: true, delay: 0.5 },
    { text: 'Oi João! 😊 É na Mooca mesmo? Vou te mostrar opções incríveis!', isUser: false, delay: 1.5 },
    { text: 'Sim, quanto custa?', isUser: true, delay: 2.5 },
    {
      text: 'Encontrei 3 opções perfeitas para você:\n\n🏠 R$ 450.000 - 65m² - 2 quartos\n🏠 R$ 520.000 - 72m² - Novo!\n🏠 R$ 480.000 - 68m² - Com vaga',
      isUser: false,
      delay: 3.5
    },
    { text: 'Quero o segundo!', isUser: true, delay: 4.8 },
    { text: 'Perfeito! Quer agendar uma visita amanhã? Tenho disponível às 14h ou 16h 😄', isUser: false, delay: 5.8 },
  ];

  useEffect(() => {
    if (isInView) {
      messages.forEach((_, index) => {
        setTimeout(() => {
          setVisibleMessages((prev) => [...prev, index]);
        }, messages[index].delay * 1000);
      });
    }
  }, [isInView]);

  return (
    <section id="conversation-demo" className="py-20 bg-gradient-to-b from-white to-[#F7F4EA] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #0E3C4E 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
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
            Conversa em Ação
          </h2>
          <p className="text-xl text-[#2A2D34]/70 max-w-3xl mx-auto">
            Veja como a Qasa IA qualifica leads em tempo real, com respostas humanizadas e precisas
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <IPhoneMockup>
              {/* Fixed header */}
              <div className="sticky top-0 z-10 bg-gradient-to-r from-[#0E3C4E] to-[#FF6F3C]/20 px-6 py-4 flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6F3C] to-[#E8B77D] flex items-center justify-center text-white font-bold text-xl shadow-lg"
                >
                  QI
                </motion.div>
                <div>
                  <div className="text-white font-semibold text-lg">Qasa IA</div>
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-[#4ade80]"
                    />
                    <span className="text-[#E8B77D] text-sm">Online agora</span>
                  </div>
                </div>
              </div>

              {/* Scrollable chat area */}
              <div className="bg-gradient-to-b from-[#0E3C4E] to-[#0a2a36] p-6 flex-1 space-y-4 overflow-y-auto">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={
                      visibleMessages.includes(index)
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 20, scale: 0.8 }
                    }
                    transition={{ duration: 0.4 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] px-5 py-3 rounded-2xl ${
                        message.isUser
                          ? 'bg-[#FF6F3C] text-white rounded-br-sm shadow-lg'
                          : 'bg-white/10 backdrop-blur-md text-white rounded-bl-sm border border-white/10'
                      }`}
                    >
                      <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed">
                        {message.text}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {visibleMessages.length > 0 && visibleMessages.length < messages.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl rounded-bl-sm border border-white/10">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-white/60 rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-white/60 rounded-full"
                        />
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-white/60 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </IPhoneMockup>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={visibleMessages.length >= 6 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="absolute -left-4 sm:-left-12 top-1/4 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="text-xs sm:text-sm opacity-80 mb-1">Tempo de qualificação</div>
              <div className="text-xl sm:text-2xl font-bold">2min 34s ⚡</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={visibleMessages.length >= 6 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -right-4 sm:-right-12 bottom-1/4 bg-gradient-to-r from-[#0E3C4E] to-[#E8B77D] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="text-xs sm:text-sm opacity-80 mb-1">Status</div>
              <div className="text-lg sm:text-xl font-bold">✅ Lead Qualificado</div>
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-[#2A2D34]/70 mb-6">
              Corretor notificado automaticamente com todas as informações do lead
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Quero Testar Agora
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConversationDemo;
