'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
}

const PricingSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans: Plan[] = [
    {
      name: 'Starter',
      price: 'R$ 1,50',
      description: 'Por lead atendido',
      features: [
        { text: 'Até 500 leads/mês', included: true },
        { text: 'Atendimento 24/7', included: true },
        { text: 'Qualificação básica', included: true },
        { text: 'Integração WhatsApp', included: true },
        { text: 'Recomendação de imóveis', included: true },
        { text: 'Dashboard básico', included: true },
        { text: 'Suporte por email', included: true },
        { text: 'Customização avançada', included: false },
      ],
      cta: 'Começar Agora',
    },
    {
      name: 'Growth',
      price: 'R$ 1,20',
      description: 'Por lead atendido',
      features: [
        { text: 'Até 2000 leads/mês', included: true },
        { text: 'Atendimento 24/7', included: true },
        { text: 'Qualificação avançada (CHAMP)', included: true },
        { text: 'Múltiplos canais', included: true },
        { text: 'Recomendação IA personalizada', included: true },
        { text: 'Dashboard completo + Analytics', included: true },
        { text: 'Suporte prioritário', included: true },
        { text: 'Customização avançada', included: true },
      ],
      cta: 'Mais Popular',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Sob Consulta',
      description: 'Volume ilimitado',
      features: [
        { text: 'Leads ilimitados', included: true },
        { text: 'Atendimento 24/7', included: true },
        { text: 'IA 100% personalizada', included: true },
        { text: 'Integração total com CRM', included: true },
        { text: 'Fluxos customizados', included: true },
        { text: 'API dedicada', included: true },
        { text: 'Suporte dedicado 24/7', included: true },
        { text: 'SLA garantido', included: true },
      ],
      cta: 'Falar com Time',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F7F4EA] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#FF6F3C] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#0E3C4E] rounded-full blur-3xl" />
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
            Planos e Preços
          </h2>
          <p className="text-xl text-[#2A2D34]/70 max-w-3xl mx-auto">
            Escolha o plano ideal para o tamanho e necessidades da sua imobiliária
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              whileHover={{
                scale: plan.popular ? 1.05 : 1.03,
                y: -10,
              }}
              className={`bg-white rounded-3xl shadow-xl relative overflow-hidden ${
                plan.popular
                  ? 'border-4 border-[#FF6F3C] md:scale-105'
                  : 'border-2 border-[#E8B77D]/20'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white text-center py-2 font-bold"
                >
                  ⭐ MAIS POPULAR ⭐
                </motion.div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                {/* Plan name */}
                <h3 className="text-3xl font-bold text-[#0E3C4E] mb-2">{plan.name}</h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-5xl font-bold text-[#FF6F3C] mb-2">
                    {plan.price}
                  </div>
                  <div className="text-[#2A2D34]/60">{plan.description}</div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                      className={`flex items-start gap-3 ${
                        feature.included ? 'text-[#2A2D34]' : 'text-[#2A2D34]/30'
                      }`}
                    >
                      <span
                        className={`text-xl flex-shrink-0 ${
                          feature.included ? 'text-[#FF6F3C]' : 'text-[#2A2D34]/30'
                        }`}
                      >
                        {feature.included ? '✓' : '✗'}
                      </span>
                      <span className={feature.included ? '' : 'line-through'}>
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white shadow-xl hover:shadow-2xl'
                      : 'bg-[#F7F4EA] text-[#0E3C4E] border-2 border-[#E8B77D] hover:bg-[#E8B77D]/20'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>

              {/* Hover glow effect */}
              {hoveredPlan === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#FF6F3C]/5 to-[#E8B77D]/5 pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#2A2D34]/60 mb-6">
            🎁 <span className="font-semibold">14 dias de teste grátis</span> em todos os planos
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#2A2D34]/70">
            <span>✓ Sem cartão de crédito</span>
            <span>✓ Cancele quando quiser</span>
            <span>✓ Setup incluído</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
