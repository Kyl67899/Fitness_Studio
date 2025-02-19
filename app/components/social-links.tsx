import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Facebook className="w-6 h-6" />
      </Link>
      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram className="w-6 h-6" />
      </Link>
      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <Twitter className="w-6 h-6" />
      </Link>
    </div>
  )
}

