'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experiência', href: '#experience' },
        { name: 'Formação', href: '#education' },
        { name: 'Contato', href: '#contact' },
      ]
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Design Gráfico', href: '#about' },
        { name: 'Branding', href: '#skills' },
        { name: 'Design Editorial', href: '#skills' },
        { name: 'Web Design', href: '#skills' },
        { name: 'Produção Gráfica', href: '#experience' },
      ]
    },
    {
      title: 'Contato',
      links: [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nicolas-ribeiro-kls/', external: true },
        { name: 'Email (via LinkedIn)', href: 'https://www.linkedin.com/in/nicolas-ribeiro-kls/', external: true },
        { name: 'Localização: São Paulo, SP', href: '#contact' },
      ]
    }
  ]

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold gradient-text mb-4">
                  Nicolas
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Designer gráfico apaixonado por criar experiências visuais 
                  marcantes que conectam marcas e pessoas através da criatividade e inovação.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-slate-400">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>em São Paulo, SP</span>
              </div>
            </motion.div>

            {/* Links sections */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        target={link.external ? '_blank' : '_self'}
                        rel={link.external ? 'noopener noreferrer' : ''}
                        whileHover={{ x: 5 }}
                        className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group"
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault()
                            const element = document.querySelector(link.href)
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' })
                            }
                          }
                        }}
                      >
                        <span className="group-hover:text-blue-400 transition-colors">
                          {link.name}
                        </span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-slate-400 text-sm"
              >
                © {currentYear} Nicolas Ribeiro de Paula. Todos os direitos reservados.
              </motion.p>
              
              <div className="flex items-center gap-6">
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  href="https://www.linkedin.com/in/nicolas-ribeiro-kls/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  LinkedIn
                </motion.a>
                
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-2 rounded-full transition-all duration-300 group"
                  aria-label="Voltar ao topo"
                >
                  <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 