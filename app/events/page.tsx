"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { events } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredEvents = activeTab === "all" ? events : events.filter((event) => event.status === activeTab)

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-orange-900/30 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              CRESA <span className="text-orange-500">Events</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our exciting lineup of upcoming and ongoing events. Join us and be part of the CRESA experience.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-900/50 p-1">
                <TabsTrigger value="all" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                  All Events
                </TabsTrigger>
                <TabsTrigger
                  value="upcoming"
                  className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger
                  value="ongoing"
                  className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Ongoing
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <EventsList events={filteredEvents} />
            </TabsContent>
            <TabsContent value="upcoming" className="mt-0">
              <EventsList events={filteredEvents} />
            </TabsContent>
            <TabsContent value="ongoing" className="mt-0">
              <EventsList events={filteredEvents} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

function EventsList({ events }) {
  return (
    <div className="grid grid-cols-1 gap-8">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <EventCard event={event} />
        </motion.div>
      ))}
    </div>
  )
}

function EventCard({ event }) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-orange-900/20 transition-all duration-300 hover:translate-y-[-5px]">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-64 md:h-auto relative">
          <img src={event.coverImage || "https://www.vectara.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp0pvmro2%2Fproduction%2F5d53d465612d1379bfa67c0aa16b2c7af51cb5cb-1792x1024.jpg%3Frect%3D0%2C6%2C1792%2C1013%26w%3D1408%26h%3D796%26q%3D90%26fit%3Dcrop%26auto%3Dformat&w=1920&q=100"} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </div>
        </div>
        <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
            <p className="text-gray-300 mb-6">{event.description}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-300">
                <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>

          {event.registrationLink && (
            <div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Register Now <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

