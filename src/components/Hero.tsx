"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import nielsPtrait from "@/assets/niels-portrait.webp"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="relative min-h-screen flex overflow-hidden bg-[#fafafa]">
        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full">
          {/* Portrait as right background */}
          <div className="absolute inset-0 z-0 flex h-screen">
            <div className="w-1/2 h-screen bg-[#fafafa]" />
            <div className="w-1/2 h-screen relative">
              <img
                src={nielsPtrait || "/placeholder.svg"}
                alt="Niels Martin Viuff"
                className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-contain object-bottom"
                style={{ filter: "brightness(0.98)" }}
              />
            </div>
          </div>
          {/* Content left-aligned */}
          <div className="relative z-10 flex items-center justify-start px-16 w-1/2 h-screen">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Spidskandidat • Det Konservative Folkeparti
              </span>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary">
                Niels Martin Viuff
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light mb-8 leading-relaxed text-primary">
                Din stemme på{" "}
                <span className="text-conservative-light font-semibold">
                  Vækst, Velfærd, Viuff
                </span>
              </h2>
              <p className="text-xl lg:text-2xl mb-4 font-medium text-primary">
                Byrådskandidat for Det Konservative Folkeparti
              </p>
              <p className="text-lg mb-8 opacity-90 text-primary">Frederikssund Kommune</p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex gap-4"
              >
                <Button
                  size="lg"
                  className="text-lg bg-primary text-white hover:bg-[#00583C] hover:text-white px-8 py-4"
                  onClick={() => scrollToSection("maerkesager")}
                >
                  Se mærkesagerne
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:border-primary hover:text-white"
                  onClick={() => scrollToSection("om-niels")}
                >
                  Lær Niels at kende
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden relative w-full min-h-screen bg-[#fafafa]">
          {/* Portrait as background top */}
          <div className="relative h-[60vh] overflow-hidden pt-8 bg-[#fafafa]">
            <img
              src={nielsPtrait || "/placeholder.svg"}
              alt="Niels Martin Viuff"
              className="w-full h-full object-contain"
              style={{ paddingTop: "16px" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-6 right-6"
            >
              <div className="bg-[#fafafa]/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-primary/10">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2 leading-tight">
                  Niels Martin Viuff
                </h1>
                <p className="text-primary/80 text-lg font-medium">
                  Byrådskandidat for Det Konservative Folkeparti
                </p>
                <p className="text-primary/60 text-sm mt-1">
                  Frederikssund Kommune
                </p>
              </div>
            </motion.div>
          </div>
          {/* Bottom Section with Content */}
          <div className="relative h-[40vh] bg-[#fafafa] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="px-6 text-center space-y-6 mt-4"
            >
              <h2 className="text-2xl sm:text-3xl font-light leading-relaxed text-primary">
                Din stemme på
                <span className="block font-bold text-conservative-light mt-1">
                  Vækst, Velfærd, Viuff
                </span>
              </h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col gap-4 max-w-xs mx-auto"
              >
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-[#00583C] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
                  onClick={() => scrollToSection("maerkesager")}
                >
                  Se mærkesagerne
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:border-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl bg-transparent transition-all duration-300"
                  onClick={() => scrollToSection("om-niels")}
                >
                  Lær Niels at kende
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - All Screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-primary z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <ChevronDown size={32} className="opacity-80" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Hero
