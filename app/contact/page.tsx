"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-orange-900/30 to-black">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in <span className="text-orange-500">Touch</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or want to collaborate? We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-orange-500">Contact Information</h2>
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-orange-500">Send Us a Message</h2>
            <ContactForm formStatus={formStatus} handleSubmit={handleSubmit} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function ContactInfo() {
  const info = [
    { icon: Mail, title: "Email", details: ["info@cresa.org", "support@cresa.org"] },
    { icon: Phone, title: "Phone", details: ["+91 xxxxx xxxxx", "+91 xxxxx xxxxx"] },
    { icon: MapPin, title: "Location", details: ["University Campus, Building B", "123 Education Street, Tech City"] },
  ];
  return (
    <div className="space-y-8">
      {info.map(({ icon: Icon, title, details }) => (
        <div key={title} className="flex items-start">
          <div className="bg-orange-600/20 p-3 rounded-full mr-4">
            <Icon className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            {details.map((detail, index) => (
              <p key={`${detail}-${index}`} className="text-gray-300">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactForm({ formStatus, handleSubmit }: { formStatus: string; handleSubmit: (e: React.FormEvent) => void }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField label="Name" id="name" type="text" placeholder="Your name" />
      <InputField label="Email" id="email" type="email" placeholder="Your email" />
      <InputField label="Subject" id="subject" type="text" placeholder="Subject of your message" />
      <Textarea id="message" placeholder="Your message" rows={5} required className="bg-gray-800 border-gray-700 focus:border-orange-500" />

      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white" disabled={formStatus === "submitting"}>
        {formStatus === "submitting" ? "Sending..." : "Send Message"}
        <Send className="ml-2 h-4 w-4" />
      </Button>

      {formStatus === "success" && <AlertBox message="Your message has been sent successfully!" type="success" />}
      {formStatus === "error" && <AlertBox message="There was an error sending your message. Please try again." type="error" />}
    </form>
  );
}

function InputField({ label, id, type, placeholder }: { label: string; id: string; type: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      <Input id={id} type={type} placeholder={placeholder} required className="bg-gray-800 border-gray-700 focus:border-orange-500" />
    </div>
  );
}

function AlertBox({ message, type }: { message: string; type: "success" | "error" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      className={`p-3 border rounded-md text-center ${type === "success" ? "bg-green-500/20 border-green-500 text-green-400" : "bg-red-500/20 border-red-500 text-red-400"}`}
    >
      {message}
    </motion.div>
  );
}