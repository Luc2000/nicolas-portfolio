'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experience = [
    {
      company: "Gorillaz Creative Menu",
      position: "Designer Gráfico",
      duration: "Abril 2024 - Janeiro 2025",
      period: "10 meses",
      location: "São Paulo, SP - Remoto",
      type: "Tempo Integral",
      responsibilities: [
        "Elaboração de cardápios personalizados para restaurantes",
        "Layout de páginas com foco em experiência do usuário",
        "Produção gráfica completa do conceito à impressão",
        "Desenvolvimento de identidade visual para estabelecimentos",
        "Colaboração com equipe multidisciplinar de marketing"
      ],
      skills: ["Elaboração de cardápios", "Layout de páginas", "Produção gráfica"],
      color: "from-blue-600 to-purple-600"
    },
    {
      company: "REVO",
      position: "Designer & Branding",
      duration: "Período anterior",
      period: "Projeto concluído",
      location: "São Paulo, SP",
      type: "Freelancer",
      responsibilities: [
        "Desenvolvimento completo da identidade visual da marca REVO",
        "Criação do símbolo e logotipo para aplicativo de vida noturna",
        "Design de UI/UX do aplicativo de ticketeira para baladas",
        "Desenvolvimento de sistema de design consistente",
        "Criação de materiais promocionais e marketing digital"
      ],
      skills: ["Branding", "UI/UX Design", "Identidade Visual", "Design de Apps"],
      color: "from-purple-600 to-pink-600"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Minha trajetória profissional e contribuições significativas
          </p>
        </motion.div>

        {/* Grid layout lado a lado */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="h-full"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-600 h-full flex flex-col"
              >
                {/* Company & Position */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {job.company}
                    </h3>
                  </div>
                  <h4 className="text-xl font-semibold gradient-text mb-2">
                    {job.position}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <span className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Company description for REVO */}
                {job.company === "REVO" && (
                  <div className="mb-6">
                    <p className="text-slate-600 dark:text-slate-300 italic bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                      "Aplicativo e ticketeira voltado para vida noturna, baladas e eventos. 
                      Responsável por toda a identidade visual e experiência do usuário."
                    </p>
                  </div>
                )}

                {/* Responsibilities */}
                <div className="mb-6 flex-grow">
                  <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Principais Responsabilidades:
                  </h5>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Competências Desenvolvidas:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 + 0.5 }}
                        className={`bg-gradient-to-r ${job.color} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Pronto para Novos Desafios
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Estou sempre em busca de oportunidades para crescer e contribuir com projetos inovadores
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Vamos Conversar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 