'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: 'A IA vai substituir meus corretores?',
      answer:
        'Não! A Qasa IA trabalha EM CONJUNTO com seus corretores. Ela cuida do atendimento inicial, qualificação e agendamento, liberando seu time para focar no que faz de melhor: fechar vendas e construir relacionamentos. É uma assistente inteligente, não uma substituta.',
    },
    {
      question: 'Funciona com meu sistema atual?',
      answer:
        'Sim! A Qasa IA se integra facilmente com WhatsApp Business API, principais CRMs do mercado imobiliário, portais como VivaReal, ZAP e OLX, e diversos outros sistemas através de webhooks e APIs. Nossa equipe cuida de toda a integração.',
    },
    {
      question: 'Posso testar antes de contratar?',
      answer:
        'Com certeza! Oferecemos 14 dias de teste gratuito em todos os planos. Você pode experimentar todas as funcionalidades sem precisar de cartão de crédito. Se não gostar, é só cancelar - sem perguntas, sem burocracia.',
    },
    {
      question: 'Como garantem que a IA não vai "alucinar" e dar informações erradas?',
      answer:
        'Usamos tecnologia RAG (Retrieval Augmented Generation) que garante que a IA responda APENAS com informações do seu catálogo real de imóveis. Se ela não souber algo, encaminha automaticamente para um corretor humano. Zero risco de informações inventadas.',
    },
    {
      question: 'Quanto tempo leva para implementar?',
      answer:
        'O processo completo leva em média 14 dias úteis. Isso inclui: integração com seus sistemas, treinamento da IA com seu catálogo, customização do tom de voz e testes completos. Você acompanha todo o processo e só ativamos quando estiver 100% satisfeito.',
    },
    {
      question: 'E se eu tiver dúvidas ou problemas?',
      answer:
        'Nosso time de suporte está disponível por email (Starter), chat prioritário (Growth) ou suporte dedicado 24/7 (Enterprise). Além disso, fornecemos documentação completa e treinamento para sua equipe.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F7F4EA] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6F3C] rounded-full blur-3xl opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E3C4E] mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-[#2A2D34]/70 max-w-3xl mx-auto">
            Tudo o que você precisa saber sobre a Qasa IA
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg border border-[#E8B77D]/20 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-[#F7F4EA]/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#0E3C4E] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-[#FF6F3C] flex-shrink-0"
                >
                  ▼
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[#2A2D34]/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-[#2A2D34]/70 mb-6">
            Ainda tem dúvidas? Fale com nosso time!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Conversar com Especialista
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
