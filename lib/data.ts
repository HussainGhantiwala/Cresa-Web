export interface Team {
  id: string
  name: string
  description: string
  longDescription: string
  coverImage: string
  members: TeamMember[]
}

export interface TeamMember {
  name: string
  role: string
  image: string
  isSenior?: boolean
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  status: "upcoming" | "ongoing" | "past"
  coverImage: string
  location: string
  registrationLink?: string
}

export const teams: Team[] = [
  {
    id: "management",
    name: "Management Team",
    description: "Handles Logistics, planning and operations",
    longDescription:
      "The Management Team is responsible for overseeing all logistical aspects of CRESA events and initiatives. They coordinate resources, develop operational plans, and ensure smooth execution of all activities. Their meticulous planning and organizational skills are the backbone of our success.",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KE0TqaKeL5jxcMvznRNRDaykikPfbrJmRA&s",
    members: [
      {
        name: "Alex Johnson",
        role: "Head of Management",
        image: "/images/person1.jpg",
        isSenior: true,
      },
      {
        name: "Sarah Williams",
        role: "Operations Manager",
        image: "/images/person10.jpg",
      },
      {
        name: "Michael Chen",
        role: "Logistics Coordinator",
        image: "/images/person2.jpg",
      },
      {
        name: "Emily Rodriguez",
        role: "Planning Specialist",
        image: "/images/person3.jpg",
      },
    ],
  },
  {
    id: "design",
    name: "Design Team",
    description: "Manages branding, graphics and UI/UX",
    longDescription:
      "The Design Team is the creative force behind CRESA's visual identity. They craft stunning graphics, develop our brand guidelines, and create intuitive user interfaces for our digital platforms. Their artistic vision and technical skills ensure that all CRESA materials are visually compelling and user-friendly.",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfpkTXaYFJfqDDuv7NuvsSLYoXmFZemby1Q&s",
    members: [
      {
        name: "Olivia Kim",
        role: "Creative Director",
        image: "/placeholder.svg?height=300&width=300",
        isSenior: true,
      },
      {
        name: "David Patel",
        role: "UI/UX Designer",
        image: "/images/person3.jpg",
      },
      {
        name: "Sophia Martinez",
        role: "Graphic Designer",
        image: "/images/person10.jpg",
      },
      {
        name: "James Wilson",
        role: "Brand Strategist",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  {
    id: "cultural",
    name: "Cultural Team",
    description: "Organises social and cultural events",
    longDescription:
      "The Cultural Team celebrates diversity and fosters community through engaging social and cultural events. They plan and execute activities that bring people together, promote cultural exchange, and create memorable experiences for all participants. Their events are the heart of CRESA's vibrant community.",
    coverImage: "https://static.wixstatic.com/media/341119_7006a9da221b4de685d366bbd2250cd4~mv2.jpg/v1/fill/w_677,h_578,al_c,lg_1,q_85,enc_avif,quality_auto/341119_7006a9da221b4de685d366bbd2250cd4~mv2.jpg",
    members: [
      {
        name: "Aisha Patel",
        role: "Cultural Director",
        image: "/placeholder.svg?height=300&width=300",
        isSenior: true,
      },
      {
        name: "Carlos Mendez",
        role: "Event Coordinator",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Priya Singh",
        role: "Cultural Ambassador",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Jamal Washington",
        role: "Social Activities Planner",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  {
    id: "social-media",
    name: "Social Media Team",
    description: "Manages budgeting and sponsorship",
    longDescription:
      "The Social Media Team drives CRESA's digital presence and engagement strategy. They create compelling content, manage our social platforms, and develop campaigns that increase our visibility and impact. Their expertise in digital marketing and community management helps us connect with audiences and secure valuable partnerships.",
    coverImage: "https://www.loomly.com/hubfs/Social%20media%20team%20structure.png",
    members: [
      {
        name: "Emma Thompson",
        role: "Social Media Director",
        image: "/placeholder.svg?height=300&width=300",
        isSenior: true,
      },
      {
        name: "Ryan Lee",
        role: "Content Creator",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Zoe Garcia",
        role: "Sponsorship Coordinator",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Tyler Johnson",
        role: "Budget Analyst",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  {
    id: "finance",
    name: "Finance Team",
    description: "Manages budgeting and financial planning",
    longDescription:
      "The Finance Team ensures CRESA's financial health and sustainability. They develop budgets, track expenses, secure funding, and manage financial resources with precision and foresight. Their careful stewardship allows us to maximize our impact while maintaining fiscal responsibility.",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpTM4IwpgvAlsmYXoVtIE_EBWEqvs_S4nlg&s",
    members: [
      {
        name: "Daniel Kim",
        role: "Finance Director",
        image: "/placeholder.svg?height=300&width=300",
        isSenior: true,
      },
      {
        name: "Natasha Sharma",
        role: "Budget Manager",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Marcus Johnson",
        role: "Financial Analyst",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Lisa Chen",
        role: "Sponsorship Manager",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  {
    id: "sports",
    name: "Sports Team",
    description: "Organises sports events",
    longDescription:
      "The Sports Team promotes physical wellness and friendly competition through diverse athletic events. They organize tournaments, fitness challenges, and recreational activities that bring people together through the universal language of sports. Their events foster teamwork, healthy lifestyles, and community spirit.",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChn4DivnmfVTFZhJMxvEmGDsrjFph0LYngw&s",
    members: [
      {
        name: "Jordan Taylor",
        role: "Sports Director",
        image: "/placeholder.svg?height=300&width=300",
        isSenior: true,
      },
      {
        name: "Leila Patel",
        role: "Event Coordinator",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Diego Hernandez",
        role: "Sports Trainer",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Samantha Lee",
        role: "Tournament Organizer",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  {
    id: "core",
    name: "Core Team",
    description: "Oversees decision-making and overall strategy",
    longDescription:
      "The Core Team provides leadership and strategic direction for all of CRESA's initiatives. They make key decisions, set organizational goals, and ensure that all teams are aligned with our mission and values. Their vision and guidance shape the future of CRESA and drive our continued growth and impact.",
    coverImage: "https://assets.entrepreneur.com/content/3x2/2000/20170731092357-business-businessteam-working-training.jpeg",
    members: [
      {
        name: "Victoria Zhang",
        role: "Executive Director",
        image: "/placeholder.svg?height=300&width=300",
        isSenior: true,
      },
      {
        name: "Robert Johnson",
        role: "Strategy Officer",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Ananya Patel",
        role: "Operations Director",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "William Chen",
        role: "Community Relations",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Maya Rodriguez",
        role: "Innovation Lead",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
]

export const events: Event[] = [
  {
    id: "tech-summit-2023",
    title: "CRESA Tech Summit 2023",
    description:
      "Join us for a day of innovation, learning, and networking with industry leaders and tech enthusiasts. Featuring keynote speakers, workshops, and hands-on demonstrations of cutting-edge technologies.",
    date: "March 15, 2023",
    status: "upcoming",
    coverImage: "/images/culturalNight2.jpg",
    location: "Main Campus Auditorium",
    registrationLink: "#",
  },
  {
    id: "cultural-fest",
    title: "Annual Cultural Festival",
    description:
      "Celebrate diversity and creativity at our flagship cultural event. Experience performances, art exhibitions, culinary delights, and interactive activities representing cultures from around the world.",
    date: "April 5-7, 2023",
    status: "upcoming",
    coverImage: "/images/culturalNight1.jpg",
    location: "University Cultural Center",
    registrationLink: "#",
  },
  {
    id: "hackathon-2023",
    title: "CRESA Hackathon 2023",
    description:
      "Put your coding skills to the test in this 48-hour challenge. Work in teams to develop innovative solutions to real-world problems. Prizes, mentorship, and networking opportunities await!",
    date: "February 10-12, 2023",
    status: "ongoing",
    coverImage: "/images/hackathon1.jpg",
    location: "Innovation Hub",
    registrationLink: "#",
  },
  {
    id: "sports-tournament",
    title: "Inter-College Sports Tournament",
    description:
      "Compete in a variety of sports including basketball, soccer, volleyball, and more. Show your athletic prowess and team spirit in this exciting multi-day tournament.",
    date: "May 20-25, 2023",
    status: "upcoming",
    coverImage: "/images/sports1.jpeg",
    location: "University Sports Complex",
    registrationLink: "#",
  },
  {
    id: "design-workshop",
    title: "UI/UX Design Workshop Series",
    description:
      "Learn the principles of effective user interface and experience design in this hands-on workshop series. Perfect for beginners and intermediate designers looking to enhance their skills.",
    date: "Every Saturday in March 2023",
    status: "ongoing",
    coverImage: "https://cdn.prod.website-files.com/5eb3efbd6a6e84b12ef07786/62123b385f6f9c22b965a209_design-thinking-workshop-ideation.jpg",
    location: "Design Studio, Building B",
    registrationLink: "#",
  },
  {
    id: "leadership-conference",
    title: "Student Leadership Conference",
    description:
      "Develop your leadership potential through interactive sessions, inspiring talks, and networking opportunities. Gain valuable insights from successful leaders across various fields.",
    date: "April 22, 2023",
    status: "upcoming",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxH3O7KpFQN7PQPK85tEE22RAUoOQ61E6rpg&s",
    location: "Conference Center",
    registrationLink: "#",
  },
]

