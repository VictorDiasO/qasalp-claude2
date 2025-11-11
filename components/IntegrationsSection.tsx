'use client';

import { motion } from 'framer-motion';

interface Integration {
  name: string;
  icon: string;
  description: string;
}

const IntegrationsSection = () => {
  const integrations: Integration[] = [
    {
      name: 'WhatsApp Business',
      icon: '💬',
      description: 'Integração oficial com API do WhatsApp',
    },
    {
      name: 'N8N',
      icon: '🔗',
      description: 'Automação de workflows e integrações',
    },
    {
      name: 'Supabase',
      icon: '🗄️',
      description: 'Banco de dados e armazenamento',
    },
    {
      name: 'OpenAI',
      icon: '🤖',
      description: 'IA avançada e processamento de linguagem',
    },
    {
      name: 'VivaReal',
      icon: '🏘️',
      description: 'Sincronização de anúncios e leads',
    },
    {
      name: 'ZAP Imóveis',
      icon: '📱',
      description: 'Captura automática de leads',
    },
    {
      name: 'OLX',
      icon: '🛒',
      description: 'Integração com portal de classificados',
    },
    {
      name: 'CRMs',
      icon: '📊',
      description: 'Integração com principais CRMs do mercado',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(#0E3C4E 1px, transparent 1px), linear-gradient(90deg, #0E3C4E 1px, transparent 1px)',
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E3C4E] mb-6">
            Integrações
          </h2>
          <p className="text-xl text-[#2A2D34]/70 max-w-3xl mx-auto">
            Conecte a Qasa IA com as ferramentas que você já usa
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: '0 20px 60px rgba(255, 111, 60, 0.2)',
              }}
              className="bg-gradient-to-br from-white to-[#F7F4EA] rounded-2xl p-6 shadow-lg border border-[#E8B77D]/20 hover:border-[#FF6F3C]/40 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F3C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-4"
                >
                  {integration.icon}
                </motion.div>
                <h3 className="font-bold text-[#0E3C4E] text-lg mb-2">
                  {integration.name}
                </h3>
                <p className="text-[#2A2D34]/60 text-sm">
                  {integration.description}
                </p>

                {/* Connected badge on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-3 inline-block px-3 py-1 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white text-xs rounded-full font-semibold"
                >
                  ✓ Integrado
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-[#0E3C4E] to-[#FF6F3C] text-white px-8 py-4 rounded-2xl shadow-xl">
            <div className="text-sm opacity-90 mb-1">Integrações customizadas disponíveis</div>
            <div className="text-xl font-bold">
              Precisa de uma integração específica? Fale com nosso time! 🚀
            </div>
          </div>
        </motion.div>

        {/* API badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <div className="px-6 py-3 bg-white border-2 border-[#E8B77D] text-[#0E3C4E] rounded-full font-semibold flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span>API Webhooks</span>
          </div>
          <div className="px-6 py-3 bg-white border-2 border-[#E8B77D] text-[#0E3C4E] rounded-full font-semibold flex items-center gap-2">
            <span className="text-xl">🔒</span>
            <span>Conexão Segura</span>
          </div>
          <div className="px-6 py-3 bg-white border-2 border-[#E8B77D] text-[#0E3C4E] rounded-full font-semibold flex items-center gap-2">
            <span className="text-xl">⏱️</span>
            <span>Setup em 14 dias</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
