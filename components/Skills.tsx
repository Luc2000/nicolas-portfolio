'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      category: "Design Software",
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Adobe InDesign", level: 85 },
        { name: "SketchUp", level: 80 },
        { name: "AutoCAD", level: 75 },
      ]
    },
    {
      category: "Especialidades",
      skills: [
        { name: "Design Gráfico", level: 95 },
        { name: "Branding", level: 92 },
        { name: "UI/UX Design", level: 88 },
        { name: "Design Editorial", level: 85 },
        { name: "Web Design", level: 80 },
        { name: "Ilustração", level: 85 },
      ]
    },
    {
      category: "Competências",
      skills: [
        { name: "Design de Logotipos", level: 90 },
        { name: "Design de Embalagens", level: 85 },
        { name: "Produção Gráfica", level: 88 },
        { name: "Layout de Páginas", level: 90 },
        { name: "Elaboração de Cardápios", level: 85 },
      ]
    },
    {
      category: "Conhecimentos",
      skills: [
        { name: "Design de Produtos", level: 75 },
        { name: "Desenvolvimento de Marcas", level: 88 },
        { name: "Marca e Identidade Visual", level: 92 },
        { name: "Design de Apps", level: 85 },
      ]
    }
  ]

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-500"
    if (level >= 80) return "from-blue-500 to-cyan-500"
    if (level >= 70) return "from-yellow-500 to-orange-500"
    return "from-red-500 to-pink-500"
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Habilidades & <span className="gradient-text">Competências</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Tecnologias e especialidades que domino para criar soluções excepcionais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Principais Ferramentas
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              { name: "Photoshop", color: "text-blue-600" },
              { name: "Illustrator", color: "text-orange-600" },
              { name: "InDesign", color: "text-pink-600" },
              { name: "SketchUp", color: "text-red-600" },
              { name: "AutoCAD", color: "text-green-600" },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center space-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center ${tool.color} text-2xl font-bold shadow-lg`}>
                  {tool.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 