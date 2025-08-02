import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Filght & Hotel Booking Platform",
    description:
      "A Full-stack travel booking platform clone inspired by MakeMyTrip, featuring dynamic search, responsive UI, and real-time data integration.",
    image: "/projects/img3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://make-my-trip-clone-springboot-2.onrender.com/",
    githubUrl:
      "https://github.com/piyushthawale19/make-my-trip-clone-springboot",
  },
  {
    id: 2,
    title: "Bank Management System",
    description:
      "A Java-based Bank Management System with account creation, secure online transactions, and core banking functionalities..",
    image: "/projects/img1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://github.com/piyushthawale19/BankManagementSystem",
    githubUrl: "https://github.com/piyushthawale19/BankManagementSystem",
  },
  
  {
    id: 3,
    title: "Wix-Based Developer Portfolio",
    description:
      "Designed a modern, interactive portfolio with Wix Studio, combining sleek visuals and smooth navigation to highlight my work and tech stack.",
    image: "/projects/img4.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://piyushthawale7.wixstudio.com/my-site-4",
    githubUrl: "https://piyushthawale7.wixstudio.com/my-site-4",
  },
  {
    id: 4,
    title: "Image Search Engine",
    description:
      "A responsive image search engine built with HTML, CSS, and JavaScript that fetches high-quality images using real-time API queries.",
    image: "/projects/img2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://piyushthawale19.github.io/Create-Image-Search-Engine/",
    githubUrl: "https://github.com/piyushthawale19/Create-Image-Search-Engine",
  },
  {
    id: 5,
    title: "Music Player",
    description:
      "A sleek, browser-based music player built with HTML, CSS, and JavaScript, featuring custom controls and responsive design.",
    image: "/projects/img6.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://piyushthawale19.github.io/Musci-Player/",
    githubUrl: "https://github.com/piyushthawale19/Musci-Player",
  },
  {
    id: 6,
    title: "Global Currencies Conversion ",
    description:
      "A real-time currency converter web app built with HTML, CSS, and JavaScript, enabling seamless conversion between global currencies.",
    image: "/projects/img5.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
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
