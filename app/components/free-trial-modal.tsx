"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { submitFreeTrialForm } from "@/app/actions"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function FreeTrialModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(formData: FormData) {
    setFormStatus("idle")
    const result = await submitFreeTrialForm(formData)
    setFormStatus(result.success ? "success" : "error")
    if (result.success) {
      setTimeout(() => {
        onClose()
        setFormStatus("idle")
      }, 3000)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold mb-4">Claim Your Free 7-Day Trial</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>
          <Button type="submit" className="w-full">
            Start My Free Trial
          </Button>
        </form>
        {formStatus === "success" && (
          <p className="mt-4 text-green-600">Thank you for signing up! We&apos;ll be in touch soon.</p>
        )}
        {formStatus === "error" && (
          <p className="mt-4 text-red-600">There was an error submitting your form. Please try again.</p>
        )}
      </div>
    </div>
  )
}

