"use client"

import { useState, useEffect } from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Testimonials } from "./components/testimonials"
import { Gallery } from "./components/gallery"
import { TrainersClasses } from "./components/trainer-classes"
import { ContactForm } from "./components/contact-form"
import { FreeTrialModal } from "./components/free-trial-modal"
import { SocialLinks } from "./components/social-links"
import { NavigationMenu } from "./components/nav-menu"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true)
    }, 30000) // Show modal after 30 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationMenu />

      <header className="relative bg-primary text-primary-foreground pt-20 pb-12 sm:pb-16 md:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <video className="object-cover w-full h-full opacity-50" autoPlay loop muted playsInline>
            <source src="https://assets.mixkit.co/videos/52087/52087-720.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Welcome to FitLife Studio</h1>
          <p className="text-xl sm:text-2xl mb-6 sm:mb-8">Transform Your Body, Transform Your Life</p>
          <Button asChild size="lg" onClick={() => setIsModalOpen(true)}>
            <span>Start Free Trial</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto py-8 sm:py-12 space-y-12 sm:space-y-16 md:space-y-24 px-4 sm:px-6 lg:px-8">
        <section id="fitness-video" className="relative aspect-video rounded-lg shadow-lg overflow-hidden">
          <video className="w-full h-full object-cover" controls poster="https://assets.mixkit.co/active_storage/video_items/100546/1725385655/100546-video-360.mp4">
            <source src="/placeholder.svg?height=720&width=1280" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Button
              size="lg"
              onClick={() => {
                const video = document.querySelector("#fitness-video video") as HTMLVideoElement
                if (video) {
                  video.play()
                  ;(video.parentElement?.querySelector(".bg-black") as HTMLElement)?.remove()
                }
              }}
            >
              Play Video
            </Button>
          </div>
        </section>

        <section id="about">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">About Us</h2>
          <p className="max-w-2xl mx-auto text-center mb-4 text-sm sm:text-base">
            At FitLife Studio, we're dedicated to helping you achieve your fitness goals. Our expert trainers and
            state-of-the-art equipment provide the perfect environment for your fitness journey.
          </p>
          <p className="max-w-2xl mx-auto text-center text-sm sm:text-base">
            Whether you're a beginner or an experienced athlete, we have programs tailored to your needs. Join us today
            and start your transformation!
          </p>
        </section>

        <Testimonials />

        <Gallery />

        <TrainersClasses />

        <section id="free-trial" className="bg-primary text-primary-foreground py-8 sm:py-12 rounded-lg">
          <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-4">Start Your Fitness Journey Today</h2>
            <p className="mb-6 sm:mb-8 text-lg sm:text-xl">
              Sign up for a free 7-day trial and experience the FitLife difference!
            </p>
            <Button size="lg" variant="secondary" onClick={() => setIsModalOpen(true)}>
              Claim Your Free Trial
            </Button>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">FitLife Studio</h3>
              <p className="text-sm">
                Transform your body, transform your life with our expert trainers and state-of-the-art facilities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#trainers-classes" className="text-sm hover:underline">
                    Classes
                  </Link>
                </li>
                <li>
                  <Link href="#free-trial" className="text-sm hover:underline">
                    Free Trial
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <SocialLinks />
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm">&copy; 2025 FitLife Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <FreeTrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

