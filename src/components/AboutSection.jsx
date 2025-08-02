import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Explorer with a Love for Scalable Design
            </h3>

            <p className="text-muted-forground">
              With 1+ years in Front-End and Database development, I specialize
              in building sleek, user-friendly interfaces backed by solid,
              scalable data structures.
            </p>
            <p className="text-muted-forground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1Rx4FT6TgHKpACuRIznGmQjAU4v37Q7nJ/view?usp=drive_link "
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10  ">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Developer
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10  ">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    WIX & Wordpress Developer
                  </h4>
                  <p className="text-muted-foreground">
                    Building sleek, high-performing websites with user-first
                    design using Wix Studio and WordPress.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10  ">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-15">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li className="mb-5">
                <strong> B.Tech in Computer Science & Engineering </strong> -
                DBATU University
                <br />
                (2022-2026)
              </li>
              <li>
                Relevant Coursework: Data Structures, Web Development, Software
                Engineering....
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold underline mb-1.5">
                  Unified Mentor Private Limited (2025)
                </h4>
                <p>
                  Full-Stack Developer focused on modern front-end design and
                  seamless database integration for cloud-native apps.
                </p>
              </div>

              <div>
                <h4 className="font-semibold underline mb-1.5">
                  Null Class Edtech Pvt. Lmd (2025-Present)
                </h4>
                <p>
                  Contributed to front-end development with modern UI components
                  and implemented innovative features for improved
                  interactivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
