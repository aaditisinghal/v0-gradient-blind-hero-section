"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleWalletConnect = () => {
    setIsWalletConnected(!isWalletConnected)
  }

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full backdrop-blur-md md:flex border transition-all duration-300 ${
          isScrolled
            ? "max-w-4xl px-2 border-orange-500/20 shadow-lg shadow-orange-500/10"
            : "max-w-6xl px-4 border-transparent shadow-none"
        } py-2`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
          background: isScrolled ? "rgba(15, 15, 15, 0.8)" : "transparent",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-4" : ""
          }`}
          href="/"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-white font-bold text-lg">MAPI</span>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white/70 transition duration-200 hover:text-white md:flex md:space-x-2">
          <a
            className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer"
            href="/#features"
          >
            <span className="relative z-20">Features</span>
          </a>
          <a
            className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer"
            href="/#architecture"
          >
            <span className="relative z-20">Architecture</span>
          </a>
          <a
            className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer"
            href="/#use-cases"
          >
            <span className="relative z-20">Use Cases</span>
          </a>
          <a
            className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer"
            href="/demo"
          >
            <span className="relative z-20">Demo</span>
          </a>
          <a
            className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer"
            href="/docs"
          >
            <span className="relative z-20">Docs</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg font-medium relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center px-4 py-2 text-sm border bg-gradient-to-r from-orange-600 to-orange-500 border-orange-400/30 text-white hover:from-orange-700 hover:to-orange-600 shadow-lg shadow-orange-500/20">
            Get API Key
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full backdrop-blur-md md:hidden px-4 py-3 border transition-all duration-300 ${
          isScrolled ? "border-orange-500/20 shadow-lg shadow-orange-500/10" : "border-transparent shadow-none"
        }`}
        style={{
          background: isScrolled ? "rgba(15, 15, 15, 0.8)" : "transparent",
          left: "1rem",
          right: "1rem",
          width: "calc(100% - 2rem)",
        }}
      >
        <a className="flex items-center justify-center gap-2" href="/">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-white font-semibold">MAPI</span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-orange-500/20 transition-colors hover:bg-orange-500/10"
          aria-label="Toggle menu"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-24 left-4 right-4 backdrop-blur-md border border-orange-500/20 rounded-2xl shadow-2xl p-6"
            style={{ background: "rgba(15, 15, 15, 0.9)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-4">
              <a
                href="/#features"
                className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-orange-500/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="/#architecture"
                className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-orange-500/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Architecture
              </a>
              <a
                href="/#use-cases"
                className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-orange-500/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Use Cases
              </a>
              <a
                href="/demo"
                className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-orange-500/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </a>
              <a
                href="/docs"
                className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-orange-500/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </a>
              <div className="border-t border-orange-500/20 pt-4 mt-4 flex flex-col space-y-3">
                <button className="px-4 py-3 text-lg font-bold text-center rounded-lg transition-all duration-200 border bg-gradient-to-r from-orange-600 to-orange-500 border-orange-400/30 text-white shadow-lg shadow-orange-500/20">
                  Get API Key
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
