'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We discuss your requirements and provide expert advice'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team creates custom designs tailored to your needs'
  },
  {
    number: '03',
    title: 'Production',
    description: 'Your boxes are manufactured with precision and care'
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Fast and reliable shipping to your location'
  }
]

export default function Process() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures quality and efficiency from start to finish
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

