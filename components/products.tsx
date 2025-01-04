'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: 'Half Cartoon Box',
    description: 'Perfect for lightweight items and retail packaging',
    image: '/box-patterns/half-cartoon.png'
  },
  {
    id: 2,
    name: 'Hardware Folding Box',
    description: 'Sturdy construction for hardware and tools',
    image: '/box-patterns/hardware-folding.png'
  },
  {
    id: 3,
    name: 'Interlock Box',
    description: 'Secure closure system for valuable items',
    image: '/box-patterns/interlock.png'
  },
  {
    id: 4,
    name: 'Mobile Folding Box',
    description: 'Specialized design for electronic devices',
    image: '/box-patterns/mobile-folding.png'
  },
  {
    id: 5,
    name: 'Reverse Tuck Box',
    description: 'Classic design with easy access',
    image: '/box-patterns/revustk-sadu-box.png'
  },
  {
    id: 6,
    name: 'Ring Flap Box',
    description: 'Elegant solution for premium products',
    image: '/box-patterns/ring-flap.png'
  },
  {
    id: 7,
    name: 'Pin Top Bottom Box',
    description: 'Secure and professional presentation',
    image: '/box-patterns/pin-top-bottom.png'
  },
  {
    id: 8,
    name: 'Sweet Box',
    description: 'Perfect for confectionery and gifts',
    image: '/box-patterns/sweet-box.png'
  },
  {
    id: 9,
    name: 'Folding Top Bottom Box',
    description: 'Versatile design for various products',
    image: '/box-patterns/top-bottom-folding.jpg'
  },
]

export default function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 bg-secondary/30" id="our-box-collection">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Box Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our wide range of custom box solutions designed to meet your specific packaging needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                className="absolute inset-0 bg-primary/10 flex items-center justify-center"
              >
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

