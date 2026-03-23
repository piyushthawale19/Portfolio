import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  // 🔥 NEW PROJECTS (Converted from upper)

  {
    id: 1,
    title: "Clothes Store — Shopify E-Commerce (Freelance)",
    description:
      "A production-grade Shopify store built for a real client, handling 5–7 lakh monthly traffic with high-converting UI and optimized performance.",
    image: "projects/Baga.png",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS"],
    demoUrl: "https://mgux0j-0w.myshopify.com/",
    githubUrl: "https://mgux0j-0w.myshopify.com/", // no repo
  },

  {
    id: 2,
    title: "Smart Developer Assistant (SDA)",
    description:
      "AI-integrated collaboration platform with real-time coding, multi-user support, and in-browser execution.",
    image: "projects/sda.png",
    tags: ["MERN", "Socket.io", "Firebase", "Gemini API"],
    demoUrl: "https://github.com/piyushthawale19/SDA-Final",
    githubUrl: "https://github.com/piyushthawale19/SDA-Final",
  },

  {
    id: 3,
    title: "Agentic Studio — AI YouTube Content Agent",
    description:
      "AI platform for creators to generate thumbnails, scripts, titles, and analyze videos using GenAI.",
    image: "projects/agentic.png",
    tags: ["Next.js", "TypeScript", "Convex", "Gemini AI", "Clerk"],
    demoUrl: "https://agenticstudio-psi.vercel.app/",
    githubUrl: "https://github.com/piyushthawale19/Agenticstudio",
  },

  {
    id: 4,
    title: "Expensio — AI Receipt Tracker SaaS",
    description:
      "Full-stack SaaS app using AI for OCR-based receipt tracking with real-time dashboard and subscriptions.",
    image: "projects/receipt.png",
    tags: ["Next.js", "TypeScript", "Convex", "Gemini AI", "Inngest"],
    demoUrl: "https://receipt-tracker-app-lyart.vercel.app/",
    githubUrl: "https://github.com/piyushthawale19/-RECEIPT-TRACKER-APP",
  },

  {
    id: 5,
    title: "Yummy-Fi — Restaurant Platform (Freelance)",
    description:
      "Restaurant website with ongoing Swiggy/Zomato-style ordering system and dine-in experience.",
    image: "projects/yummyfi.png",
    tags: ["Web Platform"],
    demoUrl: "https://www.yummyfi.in/",
    githubUrl: "https://www.yummyfi.in/",
  },

  {
    id: 6,
    title: "Vibe Commerce — Full Stack Cart",
    description:
      "Responsive e-commerce cart with animations, live totals, and checkout flow.",
    image: "projects/vibe.png",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    demoUrl: "https://vibe-commerce-rust.vercel.app/",
    githubUrl: "https://github.com/piyushthawale19/Vibe-Commerce",
  },

  {
    id: 7,
    title: "Curriculum CMS (Intern Project)",
    description:
      "Full-stack CMS for managing educational content with admin dashboard and secure authentication.",
    image: "projects/cms.png",
    tags: ["Next.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    demoUrl: "https://curriculum-developer-intern.vercel.app/",
    githubUrl: "https://github.com/piyushthawale19/Curriculum-Developer-Intern",
  },

  // 🔥 OLD PROJECTS (unchanged)

  {
    id: 8,
    title: "Filght & Hotel Booking Platform",
    description:
      "A Full-stack travel booking platform clone inspired by MakeMyTrip with dynamic search and responsive UI.",
    image: "/projects/img3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://make-my-trip-clone-springboot-2.onrender.com/",
    githubUrl:
      "https://github.com/piyushthawale19/make-my-trip-clone-springboot",
  },

  {
    id: 9,
    title: "Bank Management System",
    description:
      "Java-based banking system with account creation, secure transactions, and core banking features.",
    image: "/projects/img1.png",
    tags: ["Java", "SQL"],
    demoUrl: "https://github.com/piyushthawale19/BankManagementSystem",
    githubUrl: "https://github.com/piyushthawale19/BankManagementSystem",
  },

  {
    id: 10,
    title: "Wix-Based Developer Portfolio",
    description:
      "Modern interactive portfolio built with Wix Studio showcasing projects and tech stack.",
    image: "/projects/img4.png",
    tags: ["Wix Studio", "UI/UX"],
    demoUrl: "https://piyushthawale7.wixstudio.com/my-site-4",
    githubUrl: "https://piyushthawale7.wixstudio.com/my-site-4",
  },

  {
    id: 11,
    title: "Image Search Engine",
    description:
      "Responsive image search engine using real-time API queries.",
    image: "/projects/img2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://piyushthawale19.github.io/Create-Image-Search-Engine/",
    githubUrl: "https://github.com/piyushthawale19/Create-Image-Search-Engine",
  },

  {
    id: 12,
    title: "Music Player",
    description:
      "Browser-based music player with custom controls and responsive UI.",
    image: "/projects/img6.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://piyushthawale19.github.io/Musci-Player/",
    githubUrl: "https://github.com/piyushthawale19/Musci-Player",
  },

  {
    id: 13,
    title: "Global Currency Converter",
    description:
      "Real-time currency converter web app supporting multiple global currencies.",
    image: "/projects/img5.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://piyushthawale19.github.io/currency-conversion/",
    githubUrl: "https://github.com/piyushthawale19/currency-conversion",
  },
];

export const ProjectSection = () => {
  return (
    <section id="project" className="py-2 px-4 relative">
      <div className=" container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Project</span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => {
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>;
                  })}
                </div>

                <h3 className="text-xl font-semibold underline mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-3 "
            href="https://github.com/piyushthawale19"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
