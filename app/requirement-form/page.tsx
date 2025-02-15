"use client"

import { useEffect } from "react"
import { RequirementForm } from "@/components/requirement-form"
import { ThemeToggle } from "@/components/theme-toggle"
import { registerServiceWorker } from "@/app/pwa"
import { InstallPrompt } from "@/components/install-prompt"

export default function Home() {
  useEffect(() => {
    registerServiceWorker()
  }, [])

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto mb-6 flex justify-end space-x-3">
      {/* <div className="max-w-2xl mx-auto mb-6 flex sm:flex-row justify-between items-start sm:items-center gap-4"> */}
        <InstallPrompt/>
        <ThemeToggle />
      </div>
      <RequirementForm />
    </div>
  )
}