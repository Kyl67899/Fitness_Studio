"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#trainers-classes", label: "Classes" },
  { href: "#free-trial", label: "Free Trial" },
  { href: "#contact", label: "Contact" },
]

const brandColors = {
  primary: "#4A90E2", // Example primary color
  secondary: "#F5A623", // Example secondary color
  text: "#333333", // Example text color
}

export function NavigationMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")

  React.useEffect(() => {
    let debounceTimer: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        setIsScrolled(window.scrollY > 50) // Adjusted threshold to 50px

        const sections = navItems.map((item) => item.href.slice(1))
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom >= 100
          }
          return false
        })

        if (currentSection) {
          setActiveSection(currentSection)
        }
      }, 100) // 100ms debounce delay
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(debounceTimer)
    }
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.slice(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        setActiveSection(targetId)
      }, 500) // 500ms delay for smoother feel
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? `bg-white shadow-md` : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className={cn(
                "text-xl font-bold transition-colors duration-300",
                isScrolled ? `text-[${brandColors.primary}]` : "text-white",
              )}
            >
              FitLife Studio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                    isScrolled
                      ? activeSection === item.href.slice(1)
                        ? `text-[${brandColors.primary}] font-bold`
                        : `text-[${brandColors.text}] hover:text-[${brandColors.secondary}]`
                      : "text-white hover:bg-white/10",
                    activeSection === item.href.slice(1) && "underline",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={cn("text-white transition-colors duration-300", isScrolled && "text-primary")}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  activeSection === item.href.slice(1)
                    ? `text-[${brandColors.primary}] font-bold`
                    : `text-[${brandColors.text}] hover:text-[${brandColors.secondary}]`,
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

