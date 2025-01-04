'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/hero'
import Products from '@/components/products'
import Features from '@/components/features'
import Process from '@/components/process'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import Loading from '@/components/loading'
import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Premium Box Manufacturing | Custom Packaging Solutions',
  description: 'Expert manufacturers of premium quality boxes and packaging solutions. Specializing in custom designs, various patterns, and sustainable materials.',
}

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Adjust this time as needed

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <main>
      <Hero />
      <Features />
      <Products />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  )
}

