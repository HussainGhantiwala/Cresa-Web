"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-2xl flex items-center">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-2">
            <img src="/images/cresa.jpeg" alt="" style={{borderRadius:'50px'}} />
            {/* <span className="font-bold text-white font-jetbrains">CR</span> */}
          </div>
          <span className="text-orange-500 font-jetbrains">CRESA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href={pathname === "/" ? "#teams" : "/#teams"} label="Teams" />
          <NavLink href="/events" label="Events" />
          <NavLink href="/contact" label="Contact Us" />
          <Link
            href="#"
            className="px-5 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-8 p-8">
              <MobileNavLink href="/" label="Home" />
              <MobileNavLink href={pathname === "/" ? "#teams" : "/#teams"} label="Teams" />
              <MobileNavLink href="/events" label="Events" />
              <MobileNavLink href="/contact" label="Contact Us" />
              <Link
                href="#"
                className="px-8 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors w-full text-center"
              >
                Join Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href)) || (pathname === "/" && href === "#teams")

  return (
    <Link
      href={href}
      className={`relative font-medium transition-colors ${
        isActive ? "text-orange-500" : "text-white hover:text-orange-300"
      }`}
    >
      {label}
      {isActive && (
        <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500" layoutId="navbar-indicator" />
      )}
    </Link>
  )
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href)) || (pathname === "/" && href === "#teams")

  return (
    <Link
      href={href}
      className={`text-xl font-medium w-full text-center py-3 border-b border-gray-800 ${
        isActive ? "text-orange-500" : "text-white"
      }`}
    >
      {label}
    </Link>
  )
}

