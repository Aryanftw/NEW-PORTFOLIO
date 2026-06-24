import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Aryan Parmar",
  initials: "AP",
  url: "https://aryanparmar.dev",
  location: "Surat, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/Surat",
  description:
    "Electronics & Communication Engineering student at NIT Surat. I love building full-stack products and open-source projects. Always exploring new tech.",
  summary:
    "I'm a second-year B.Tech student at [National Institute of Technology Surat](/#education) with a passion for full-stack web development. I've built real-time apps, ML-powered systems, and production-grade platforms. I've contributed to [open-source through GWOC](/#projects) and actively participate in hackathons. Currently a Junior Developer at [Google Developer Group, NIT Surat](/#work) and an Executive at ACM Club.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: Nodejs },
    { name: "C++", icon: Nodejs },
    { name: "React.js", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Express.js", icon: Nodejs },
    { name: "Tailwind CSS", icon: ReactLight },
    { name: "Socket.IO", icon: Nodejs },
    { name: "MongoDB", icon: Postgresql },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Prisma", icon: Docker },
    { name: "Mongoose", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ap890383@gmail.com",
    tel: "+91-9408744422",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aryanparmar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aryanparmar",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/aryanparmar",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@aryanparmar",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ap890383@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Google Developer Group, NIT Surat",
      href: "https://gdg.community.dev/",
      badges: [],
      location: "Surat, Gujarat, India",
      title: "Junior Developer",
      logoUrl: "/gdg.png",
      start: "Oct 2024",
      end: "May 2025",
      description:
        "Contributed as a Junior Developer in the Google Developer Group chapter at NIT Surat, working on development initiatives, events, and tech projects within the campus developer community.",
    },
    {
      company: "ACM Club, NIT Surat",
      href: "https://www.acm.org/",
      badges: [],
      location: "Surat, Gujarat, India",
      title: "Executive",
      logoUrl: "/acm.png",
      start: "Aug 2024",
      end: "Mar 2025",
      description:
        "Served as an Executive at the ACM student chapter, helping organize technical events, workshops, and coding competitions for the student community at NIT Surat.",
    },
  ],

  education: [
    {
      school: "National Institute of Technology Surat",
      href: "https://www.svnit.ac.in/",
      degree: "B.Tech in Electronics and Communication Engineering — CGPA: 7.40",
      logoUrl: "/nit.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "GSHSEB Board",
      href: "https://gseb.org/",
      degree: "Higher Secondary Education — 78%",
      logoUrl: "/gseb.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "GSEB Board",
      href: "https://gseb.org/",
      degree: "Secondary Education — 76%",
      logoUrl: "/gseb.png",
      start: "2019",
      end: "2021",
    },
  ],

  projects: [
    {
      title: "Fake Account Detection System",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Built for the Echelon Hackathon — a fake social media account detection system using Random Forest for behavioral analysis and BERT-based NLP for profile bio and text classification. Integrated TextStat linguistic features for readability and lexical complexity to improve bot vs human detection accuracy.",
      technologies: [
        "Python",
        "Random Forest",
        "BERT",
        "TextStat",
        "FastAPI",
        "Streamlit",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Helper Buddy",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A full-stack cleaning service booking platform developed as part of GWOC (GirlScript Winter of Contributing). Features a responsive UI built with Next.js App Router, global state management via Zustand, and Prisma ORM with PostgreSQL for database operations.",
      technologies: [
        "Next.js",
        "Zustand",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Real-Time Chat Application",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A real-time chat app with file and image sharing capabilities. Integrated Socket.IO for low-latency communication and Cloudinary for secure media storage. Built on a scalable Express.js backend with Mongoose for message persistence.",
      technologies: [
        "Express.js",
        "Socket.IO",
        "MongoDB",
        "Mongoose",
        "Cloudinary",
        "React.js",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "POSTLY – Blog Application",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A full-stack blogging platform with RESTful APIs powered by Express.js and MongoDB. Built a responsive React.js frontend with Tailwind CSS. Deployed backend on Render and frontend on Vercel.",
      technologies: [
        "React.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Vercel",
        "Render",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Echelon Hackathon",
      dates: "2026",
      location: "India",
      description:
        "Built a fake social media account detection system using Random Forest, BERT NLP, and a FastAPI + Streamlit dashboard for real-time prediction and visualization.",
      image: "",
      links: [],
    },
  ],
} as const;