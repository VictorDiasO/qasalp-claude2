'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface TabContent {
  title: string;
  icon: string;
  description: string;
  benefits: string[];
  example: {
    userMessage: string;
    aiResponse: string;
  };
}

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: TabContent[] = [
    {
      title: 'Compra/Aluguel',
      icon: '🏠',
      description: 'Ideal para leads que procuram imóveis para morar ou investir',
      benefits: [
        'Qualificação automática de orçamento e preferências',
        'Recomendação personalizada do catálogo',
        'Agendamento de visitas em tempo real',
      ],
      example: {
        userMessage: 'Procuro apartamento 2 quartos, até R$ 500mil',
        aiResponse:
          'Perfeito! Encontrei 5 opções ideais no seu orçamento. Qual região você prefere: Zona Sul ou Centro?',
      },
    },
    {
      title: 'Venda/Captação',
      icon: '💼',
      description: 'Capte e avalie imóveis de proprietários interessados em vender',
      benefits: [
        'Coleta automática de informações do imóvel',
        'Avaliação preliminar baseada em mercado',
        'Agendamento de visita para avaliação presencial',
      ],
      example: {
        userMessage: 'Quero vender meu apartamento',
        aiResponse:
          'Ótimo! Vou te ajudar. Pode me dizer o endereço, metragem e quantos quartos tem?',
      },
    },
    {
      title: 'Parcerias',
      icon: '🤝',
      description: 'Atendimento para corretores parceiros e permuta de imóveis',
      benefits: [
        'Identificação automática de corretores parceiros',
        'Facilitação de permutas entre imóveis',
        'Canal direto com equipe comercial',
      ],
      example: {
        userMessage: 'Sou corretor e tenho um cliente interessado',
        aiResponse:
          'Olá, parceiro! Vou te conectar com nosso time. Me passa mais detalhes do perfil do seu cliente?',
      },
    },
    {
      title: 'Leads com Link',
      icon: '🔗',
      description: 'Converte visitantes de portais em conversas qualificadas',
      benefits: [
        'Contextualização automática do imóvel de interesse',
        'Sugestões de alternativas similares',
        'Fluxo otimizado para alta conversão',
      ],
      example: {
        userMessage: 'Vi esse imóvel no VivaReal [link]',
        aiResponse:
          'Vi que você se interessou pelo apartamento na Vila Mariana! Lindo imóvel. Quer mais fotos ou agendar visita?',
      },
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E3C4E] mb-6">
            Casos de Uso
          </h2>
          <p className="text-xl text-[#2A2D34]/70 max-w-3xl mx-auto">
            A Qasa IA se adapta a diferentes jornadas do cliente imobiliário
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white shadow-xl'
                  : 'bg-[#F7F4EA] text-[#2A2D34] hover:bg-[#E8B77D]/30'
              }`}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span>{tab.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Info */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#0E3C4E]">{tabs[activeTab].title}</h3>
              <p className="text-lg text-[#2A2D34]/70">{tabs[activeTab].description}</p>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#0E3C4E] text-lg">Benefícios:</h4>
                {tabs[activeTab].benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#FF6F3C] text-xl flex-shrink-0">✓</span>
                    <span className="text-[#2A2D34]/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Chat Example */}
            <div className="bg-gradient-to-br from-[#0E3C4E] to-[#0a2a36] rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6F3C] to-[#E8B77D] flex items-center justify-center text-white font-bold">
                  QI
                </div>
                <div>
                  <div className="text-white font-semibold">Qasa IA</div>
                  <div className="text-[#E8B77D] text-xs">Online</div>
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex justify-end"
                >
                  <div className="bg-[#FF6F3C] text-white px-4 py-3 rounded-2xl rounded-br-sm max-w-[85%] shadow-lg">
                    {tabs[activeTab].example.userMessage}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 backdrop-blur-md text-white px-4 py-3 rounded-2xl rounded-bl-sm max-w-[85%] border border-white/10">
                    {tabs[activeTab].example.aiResponse}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-6 pt-4 border-t border-white/10 text-center"
              >
                <span className="text-[#E8B77D] text-sm">
                  ✨ Resposta em menos de 15 segundos
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '100%', label: 'Leads Respondidos' },
            { value: '<15s', label: 'Tempo Resposta' },
            { value: '90%', label: 'Taxa Qualificação' },
            { value: '24/7', label: 'Disponibilidade' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[#FF6F3C] mb-2">{stat.value}</div>
              <div className="text-sm text-[#2A2D34]/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
