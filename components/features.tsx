'use client'

import { motion } from 'framer-motion'
import { Package, Recycle, Timer, Palette } from 'lucide-react'

const features = [
  {
    icon: Package,
    title: 'Custom Designs',
    description: 'Tailored solutions to match your brand identity and product requirements'
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly',
    description: 'Sustainable materials and environmentally conscious manufacturing processes'
  },
  {
    icon: Timer,
    title: 'Quick Turnaround',
    description: 'Fast production and delivery to meet your deadlines'
  },
  {
    icon: Palette,
    title: 'Premium Quality',
    description: 'High-grade materials and superior finish for lasting impression'
  }
]

export default function Features() {
  return (
    <section className="py-24" id="features">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg bg-card border"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

