'use client';

import { motion, useMotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);

  const testimonials: Testimonial[] = [
    {
      name: 'João Silva',
      role: 'Diretor Comercial',
      company: 'RE/MAX Casa e Companhia',
      image: '👨‍💼',
      rating: 5,
      text: 'A Qasa IA triplicou nossa taxa de resposta. Hoje, 60% dos leads viram visitas. O melhor investimento que fizemos este ano.',
    },
    {
      name: 'Maria Santos',
      role: 'CEO',
      company: 'Lopes Imobiliária',
      image: '👩‍💼',
      rating: 5,
      text: 'Reduzimos 40% do custo por lead qualificado. A IA realmente entende o cliente e entrega exatamente o que ele procura.',
    },
    {
      name: 'Carlos Ferreira',
      role: 'Gerente de Vendas',
      company: 'Tecimob Soluções',
      image: '👔',
      rating: 5,
      text: 'Nunca mais perdemos um lead de madrugada. A Qasa IA responde na hora e qualifica melhor que muito corretor humano.',
    },
    {
      name: 'Ana Paula',
      role: 'Corretora Autônoma',
      company: 'AP Imóveis',
      image: '👩‍💻',
      rating: 5,
      text: 'Como corretora solo, era impossível atender todos os leads. Agora a IA faz a triagem e eu foco só em fechar negócios.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F7F4EA] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF6F3C] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0E3C4E] rounded-full blur-3xl" />
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
            Depoimentos
          </h2>
          <p className="text-xl text-[#2A2D34]/70 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre a transformação em seus negócios
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#E8B77D]/20"
            >
              {/* Rating */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-3xl text-[#FF6F3C]"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-[#2A2D34] text-center mb-8 leading-relaxed italic"
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6F3C] to-[#E8B77D] flex items-center justify-center text-4xl mb-4 shadow-lg">
                  {testimonials[currentIndex].image}
                </div>
                <div className="text-center">
                  <div className="font-bold text-[#0E3C4E] text-xl">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-[#2A2D34]/60">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-[#FF6F3C] font-semibold">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              →
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D]'
                    : 'w-2 bg-[#E8B77D]/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-6 items-center"
        >
          <div className="px-6 py-3 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white rounded-full font-semibold shadow-lg">
            500+ Imobiliárias Confiam
          </div>
          <div className="px-6 py-3 bg-white border-2 border-[#E8B77D] text-[#0E3C4E] rounded-full font-semibold">
            98% Satisfação
          </div>
          <div className="px-6 py-3 bg-white border-2 border-[#E8B77D] text-[#0E3C4E] rounded-full font-semibold">
            4.9/5 Estrelas
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
