'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Target, Lightbulb, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Criatividade",
      description: "Soluções inovadoras e originais para cada projeto"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precisão",
      description: "Atenção aos detalhes e execução impecável"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação",
      description: "Sempre buscando novas tendências e técnicas"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Paixão",
      description: "Amor genuíno pelo design e comunicação visual"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Conheça minha trajetória e o que me move como designer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-slate-600 dark:text-slate-300">
              <p className="text-lg leading-relaxed">
                Sou um designer gráfico apaixonado por criar experiências visuais que conectam 
                marcas e pessoas. Com formação em Design pelo Centro Universitário FMU | FIAM-FAAM 
                e experiência prática na Gorillaz Creative Menu, desenvolvi uma abordagem única 
                que combina criatividade, estratégia e técnica.
              </p>
              
              <p className="text-lg leading-relaxed">
                Minha especialidade está em transformar conceitos complexos em soluções visuais 
                elegantes e funcionais. Seja criando identidades visuais marcantes, desenvolvendo 
                materiais editoriais ou produzindo peças gráficas impactantes, meu objetivo é 
                sempre superar expectativas.
              </p>

              <p className="text-lg leading-relaxed">
                Localizado em São Paulo, trabalho com clientes de diversos segmentos, 
                sempre priorizando a qualidade, prazos e a satisfação do cliente. 
                Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                10 meses de experiência
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Formação completa
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                São Paulo, SP
              </div>
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-600"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 