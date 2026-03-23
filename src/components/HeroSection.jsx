import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Piyush
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Thawale
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build scalable, high-performance web applications — from elegant
            front-end interfaces to robust backend systems.
            <br /> Skilled in React.js, Next.js, Tailwind CSS, and modern
            JavaScript, I also develop powerful APIs using Node.js and FastAPI.
            <br /> I work with databases like MongoDB, MySQL, and integrate AI
            tools such as OpenAI and Gemini APIs to create intelligent,
            real-world solutions.
            <br /> From full stack development to platforms like Wix Studio and
            WordPress, I focus on delivering clean, responsive, and impactful
            digital experiences.
          </p>

          <div className=" pt-4 opacity-0 animate-fade-in-delay-4 mt-12">
            <a href="#project" className="cosmic-button ">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5  text-primary" />
      </div>
    </section>
  );
};
