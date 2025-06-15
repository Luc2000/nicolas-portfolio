'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      institution: "Centro Universitário FMU | FIAM-FAAM",
      degree: "Bacharelado em Design",
      duration: "Janeiro 2020 - Dezembro 2023",
      period: "4 anos",
      description: "Formação completa em Design com foco em criatividade, técnica e inovação.",
      achievements: [
        "Formação abrangente em design gráfico e visual",
        "Desenvolvimento de portfolio profissional",
        "Projetos práticos com empresas reais",
        "Especialização em Adobe Creative Suite"
      ],
      skills: [
        "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "AutoCAD", "SketchUp",
        "Design Gráfico", "Design de Produtos", "Design de Logotipos", "Design de Embalagens",
        "Web Design", "Design Editorial", "Branding", "Desenvolvimento de Marcas",
        "Marca e Identidade Visual", "Ilustração"
      ]
    }
  ]

  const certifications = [
    { name: "Adobe Photoshop", level: "Avançado", color: "from-blue-500 to-blue-600" },
    { name: "Adobe Illustrator", level: "Avançado", color: "from-orange-500 to-orange-600" },
    { name: "Adobe InDesign", level: "Avançado", color: "from-pink-500 to-pink-600" },
    { name: "Design Thinking", level: "Intermediário", color: "from-purple-500 to-purple-600" },
    { name: "Branding Strategy", level: "Avançado", color: "from-green-500 to-green-600" },
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Formação <span className="gradient-text">Acadêmica</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Base sólida de conhecimento e desenvolvimento contínuo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education Details */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                {/* Institution Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-lg gradient-text font-semibold">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-4 text-slate-600 dark:text-slate-400">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{edu.duration}</span>
                  <span className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold ml-2">
                    {edu.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    Principais Conquistas:
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills learned */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Competências Adquiridas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, idx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.05 }}
                        className="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Additional Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Certifications */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-500" />
                Especializações
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {cert.name}
                    </span>
                    <span className={`bg-gradient-to-r ${cert.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {cert.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Learning Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Aprendizado Contínuo
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Acredito que o design está em constante evolução. Por isso, mantenho-me sempre 
                atualizado com as últimas tendências, ferramentas e técnicas do mercado.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Tendências de Design", "Novas Tecnologias", "Metodologias Ágeis"].map((item, idx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education 