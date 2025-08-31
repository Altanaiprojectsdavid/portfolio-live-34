import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon, Home, Building2, Briefcase, BookOpen, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  href: string
  icon: LucideIcon
}

interface NavBarProps {
  className?: string
}

const navItems: NavItem[] = [
  { name: "About", href: "#about", icon: Home },
  { name: "Works", href: "#projects", icon: Briefcase },
  { name: "Services", href: "#services", icon: Building2 },
  { name: "Blog", href: "#journal", icon: BookOpen },
]

export function NavBar({ className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(navItems[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavClick = (item: NavItem) => {
    setActiveTab(item.name)
    
    // Smooth scroll to section
    const element = document.querySelector(item.href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        className,
      )}
    >
      <div className="w-[524px] h-[80px] px-8 py-4 bg-white rounded-full backdrop-blur-[36px] flex justify-between items-center">
        <div className="flex items-start gap-2.5">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className="p-3 flex justify-center items-center gap-2.5"
            >
              <div className="text-[#1C2024] text-base font-medium leading-6">{item.name}</div>
            </button>
          ))}
        </div>
        <button className="h-11 px-[18px] py-2.5 bg-[#1C2024] rounded-[60px] flex justify-center items-center gap-2.5">
          <div className="text-white text-base font-medium leading-[26px]">Book a call</div>
        </button>
      </div>
    </div>
  )
}