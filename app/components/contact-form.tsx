"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { submitForm } from "@/app/actions"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(formData: FormData) {
    setFormStatus("idle")
    const result = await submitForm(formData)
    setFormStatus(result.success ? "success" : "error")
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-sm sm:text-base">
          Name
        </Label>
        <Input id="name" name="name" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="email" className="text-sm sm:text-base">
          Email
        </Label>
        <Input id="email" name="email" type="email" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="phone" className="text-sm sm:text-base">
          Phone Number
        </Label>
        <Input id="phone" name="phone" type="tel" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="message" className="text-sm sm:text-base">
          Message
        </Label>
        <Textarea id="message" name="message" required className="mt-1" />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="free-trial" name="free-trial" />
        <Label htmlFor="free-trial" className="text-sm sm:text-base">
          I&apos;m interested in the free 7-day trial
        </Label>
      </div>
      <SubmitButton />
      {formStatus === "success" && (
        <p className="text-green-600 text-sm sm:text-base">Thank you for your message! We&apos;ll be in touch soon.</p>
      )}
      {formStatus === "error" && (
        <p className="text-red-600 text-sm sm:text-base">
          There was an error sending your message. Please try again later.
        </p>
      )}
    </form>
  )
}

