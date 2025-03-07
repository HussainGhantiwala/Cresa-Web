"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import TeamCard from "@/components/team-card"
import { teams } from "@/lib/data"

export default function Home() {
  const { scrollY } = useScroll()
  const welcomeRef = useRef<HTMLDivElement>(null)
  const teamsRef = useRef<HTMLDivElement>(null)
  const isTeamsInView = useInView(teamsRef, { once: true, amount: 0.2 })

  // Transform values for the scattered images
  const x1 = useTransform(scrollY, [0, 500], [0, -100])
  const x2 = useTransform(scrollY, [0, 500], [0, 100])
  const y1 = useTransform(scrollY, [0, 500], [0, -150])
  const y2 = useTransform(scrollY, [0, 500], [0, 150])
  const rotate1 = useTransform(scrollY, [0, 500], [0, -15])
  const rotate2 = useTransform(scrollY, [0, 500], [0, 15])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6])

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          ref={welcomeRef}
          className="text-center z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
            Welcome to CRESA
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mb-4">
            Computer Regional Engineering Student Association
          </p>
          <div className="max-w-3xl mx-auto mb-8">
            <motion.div
              className="bg-gray-900/50 p-4 rounded-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-orange-500 mb-2">Our Mission</h3>
              <p className="text-gray-300">
                To foster a collaborative environment for students to develop technical, cultural, and leadership
                skills.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-900/50 p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-orange-500 mb-2">Our Vision</h3>
              <p className="text-gray-300">
                To be a leading student body that bridges the gap between academics and industry through innovation and
                teamwork.
              </p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
            <Link
              href="#teams"
              className="px-8 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              Discover Our Teams <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scattered Images */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://www.vectara.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp0pvmro2%2Fproduction%2F5d53d465612d1379bfa67c0aa16b2c7af51cb5cb-1792x1024.jpg%3Frect%3D0%2C6%2C1792%2C1013%26w%3D1408%26h%3D796%26q%3D90%26fit%3Dcrop%26auto%3Dformat&w=1920&q=100"
            alt="CRESA Event"
            className="absolute top-1/4 left-1/4 w-40 h-40 object-cover rounded-lg shadow-lg"
            style={{ x: x1, y: y1, rotate: rotate1, scale, opacity }}
            width={800}
            height={800}
          />
          <motion.img
            src="https://img.freepik.com/free-vector/hackathon-technology-infographic-with-flat-icons_88138-961.jpg"
            alt="CRESA Team"
            className="absolute top-1/3 right-1/4 w-48 h-48 object-cover rounded-lg shadow-lg"
            style={{ x: x2, y: y2, rotate: rotate2, scale, opacity }}
          />
          <motion.img
            src="https://5.imimg.com/data5/RE/OU/GLADMIN-60885875/indian-cultural-eventz.png"
            alt="CRESA Project"
            className="absolute bottom-1/4 left-1/3 w-36 h-36 object-cover rounded-lg shadow-lg"
            style={{ x: x1, y: y2, rotate: rotate2, scale, opacity }}
          />
          <motion.img
            src="https://imagesvs.oneindia.com/img/2020/10/cultural-event-1602840254.jpg"
            alt="CRESA Event"
            className="absolute bottom-1/3 right-1/3 w-44 h-44 object-cover rounded-lg shadow-lg"
            style={{ x: x2, y: y1, rotate: rotate1, scale, opacity }}
          />
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" ref={teamsRef} className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">Our Core Teams</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the talented teams that make CRESA a hub of innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isTeamsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamCard team={team} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Discover Our <span className="text-orange-500">Events</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Stay updated with our upcoming and ongoing events. Join us and be part of something extraordinary.
            </p>
            <Link
              href="/events"
              className="px-8 py-4 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors inline-flex items-center text-lg"
            >
              Explore Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

