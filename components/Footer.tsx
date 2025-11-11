'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Produto: [
      { name: 'Funcionalidades', href: '#' },
      { name: 'Integrações', href: '#' },
      { name: 'Preços', href: '#' },
      { name: 'Casos de Uso', href: '#' },
    ],
    Empresa: [
      { name: 'Sobre Nós', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Casos de Sucesso', href: '#' },
      { name: 'Carreiras', href: '#' },
    ],
    Recursos: [
      { name: 'Documentação', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Suporte', href: '#' },
      { name: 'Status', href: '#' },
    ],
    Legal: [
      { name: 'Privacidade', href: '#' },
      { name: 'Termos de Uso', href: '#' },
      { name: 'LGPD', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Instagram', icon: '📸', href: '#' },
    { name: 'YouTube', icon: '▶️', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
  ];

  return (
    <footer className="bg-[#0E3C4E] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 111, 60, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 111, 60, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6F3C] to-[#E8B77D] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  QI
                </div>
                <div className="text-2xl font-bold">Qasa IA</div>
              </div>

              <p className="text-white/70 mb-6 leading-relaxed">
                A IA que transforma o atendimento imobiliário. Respostas em 15 segundos, leads
                qualificados e vendas turbinadas.
              </p>

              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-[#FF6F3C] transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4 text-[#E8B77D]">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">📬 Fique por dentro das novidades</h3>
            <p className="text-white/70 mb-6">
              Receba insights sobre IA, mercado imobiliário e dicas para vender mais
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FF6F3C] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#FF6F3C] to-[#E8B77D] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Inscrever
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm"
        >
          <div>
            © {currentYear} Qasa IA. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-2">
            Feito com <span className="text-[#FF6F3C] text-lg">❤️</span> pela Qasa IA
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6F3C] via-[#E8B77D] to-[#FF6F3C]" />
    </footer>
  );
};

export default Footer;
