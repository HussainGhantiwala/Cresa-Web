"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { teams, type Team } from "@/lib/data"

export default function TeamPage() {
  const params = useParams()
  const [team, setTeam] = useState<Team | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const teamId = params.id as string
    const foundTeam = teams.find((t) => t.id === teamId)
    setTeam(foundTeam || null)
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!team) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Team Not Found</h1>
        <p className="mb-8">The team you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="px-6 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={team.coverImage || "/placeholder.svg"} alt={team.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {team.name}
          </motion.h1>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-orange-500 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
      </div>

      {/* Team Description */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gray-900 rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-orange-500">About {team.name}</h2>
            <p className="text-xl text-gray-300 leading-relaxed">{team.longDescription}</p>
          </motion.div>

          {/* Team Members */}
          <div>
            <motion.h2
              className="text-3xl font-bold mb-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Meet Our Team
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.members.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-900/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-white">
                      {member.name}
                      {member.isSenior && (
                        <span className="ml-2 text-sm bg-orange-600 text-white px-2 py-1 rounded-full">Team Lead</span>
                      )}
                    </h3>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

