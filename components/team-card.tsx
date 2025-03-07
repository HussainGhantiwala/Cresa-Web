"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Team } from "@/lib/data"

interface TeamCardProps {
  team: Team
}

export default function TeamCard({ team }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/teams/${team.id}`}>
      <motion.div
        className="relative h-96 rounded-xl overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={team.coverImage || "/placeholder.svg"} alt={team.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="z-10"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{team.name}</h3>
            <div className="w-12 h-1 bg-orange-500 mb-3" />
          </motion.div>

          {/* Hover Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="z-10"
          >
            <h3 className="text-2xl font-bold text-orange-500 mb-2">{team.name}</h3>
            <p className="text-gray-200 mb-4">{team.description}</p>
            <div className="flex items-center text-white">
              <span>Learn more</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </motion.div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  )
}

