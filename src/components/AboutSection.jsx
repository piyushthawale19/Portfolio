import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack, MERN & GenAI Developer Building Scalable Digital
              Products
            </h3>

            <p className="text-muted-forground">
              With 1.6+ years of hands-on experience in Full-Stack and MERN
              Stack development, I specialize in building high-performance,
              scalable web applications with seamless user experiences and
              robust backend systems.
            </p>

            <p className="text-muted-forground">
              I’ve successfully delivered 10+ real-world projects through
              freelancing and personal builds, focusing on performance
              optimization, clean architecture, and business-driven solutions.
            </p>

            <p className="text-muted-forground">
              Passionate about solving complex problems, I continuously explore
              modern technologies like AI integrations, scalable backend
              systems, and advanced frontend architectures to stay ahead in the
              evolving tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1HM-L-3IRSWNenOG13y10EefWZGu8sLyu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Full Stack */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack & MERN Developer
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable web apps using MongoDB, Express, React,
                    Node.js, and modern frameworks like Next.js.
                  </p>
                </div>
              </div>
            </div>

            {/* Wix + WordPress */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Wix Studio, WordPress & Shopify Developer
                  </h4>
                  <p className="text-muted-foreground">
                    Crafting high-performance, conversion-focused websites and
                    Shopify e-commerce stores with modern design and seamless
                    user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Freelancing */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Freelancing & 10+ Projects Delivered
                  </h4>
                  <p className="text-muted-foreground">
                    Delivered 10+ client and personal projects including
                    e-commerce, dashboards, and SaaS platforms with real-world
                    impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-15">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>

            <ul className="list-disc list-inside text-muted-foreground space-y-4">
              {/* B.Tech */}
              <li>
                <strong>B.Tech in Computer Science & Engineering</strong> – Dr.
                Babasaheb Ambedkar Technological University (DBATU)
                <br />
                (2022 – 2026) | CGPA: 7.0
              </li>

              {/* HSC */}
              <li>
                <strong>Higher Secondary Certificate (HSC)</strong> –
                Maharashtra State Board
                <br />
                (2020 – 2022)
              </li>

              {/* SSC */}
              <li>
                <strong>Secondary School Certificate (SSC)</strong> –
                Maharashtra State Board
                <br />
                (2014 – 2020)
              </li>

              {/* Coursework */}
              <li>
                <strong>Relevant Coursework:</strong> Data Structures &
                Algorithms, Web Development, Software Engineering, Database
                Management Systems, Computer Networks
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>

            <div className="space-y-4 text-muted-foreground">
              {/* Unified Mentor */}
              <div>
                <h4 className="font-semibold underline mb-1.5">
                  Unified Mentor Private Limited (Mar 2025 – Jun 2025)
                </h4>
                <p>
                  Worked as a Full-Stack Developer, focusing on modern front-end
                  design and seamless database integration for scalable,
                  cloud-native applications.
                </p>
              </div>

              {/* NullClass */}
              <div>
                <h4 className="font-semibold underline mb-1.5">
                  Null Class Edtech Pvt. Ltd (July 2025 – December 2025)
                </h4>
                <p>
                  Contributed to front-end development by building modern,
                  reusable UI components and implementing interactive features
                  that enhanced user experience and application performance.
                </p>
              </div>

              {/* Dynamic Bubble */}
              <div>
                <h4 className="font-semibold underline mb-1.5">
                  Dynamic Bubble (2026 – Present) — Website Development Intern
                </h4>
                <p>
                  Developed and maintained responsive web interfaces using
                  modern frontend technologies. Optimized performance, debugged
                  issues, and implemented UI enhancements to deliver a seamless
                  user experience while contributing to feature development in
                  an execution-driven environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
