import { RequirementForm } from "@/components/requirement-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto mb-6 flex justify-end">
        <ThemeToggle />
      </div>
      <RequirementForm />
    </div>
  )
}

