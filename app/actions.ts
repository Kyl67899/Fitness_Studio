"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string
  const freeTrial = formData.get("free-trial") === "on" ? "Yes" : "No"

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "your-email@example.com", // Replace with your email address
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        Interested in Free Trial: ${freeTrial}
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false }
  }
}

export async function submitFreeTrialForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "your-email@example.com", // Replace with your email address
      subject: "New Free Trial Sign-up",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        A new user has signed up for the free 7-day trial.
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false }
  }
}

