'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute inset-0 w-full h-full bg-grid-pattern opacity-5" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Premium Custom Box Manufacturing
            <span className="text-primary block mt-2">For Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Elevate your product presentation with our premium quality custom boxes.
            From elegant sweet boxes to sturdy hardware packaging, we craft the perfect solution for your needs.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/requirement-form">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

