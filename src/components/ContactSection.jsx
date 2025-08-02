import {
  Code2,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xldlwbeq");

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon...",
      });
    }
  }, [state.succeeded, toast]);

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-12 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-10 hover:underline mr-34">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:piyushthawale19@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    piyushthawale19@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-15">
                <div className="p-3 rounded-full bg-primary/10 mt-1.5">
                  <Phone className="h-6 w-6 text-primary " />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918530704254"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8530704254
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-15">
                <div className="p-3 rounded-full bg-primary/10 mt-1.5">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Pune, MH, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 hover:underline mr-38">
                Connect With Me
              </h4>
              <div className="flex  space-x-4 ml-15">
                <a
                  href="https://www.linkedin.com/in/piyush-thawale-03b706259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Linkedin  />
                </a>
                <a
                  href="https://github.com/piyushthawale19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Github />
                </a>
                <a
                  href="https://www.instagram.com/piyush_thawale_08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.facebook.com/piyush.thawale.94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.codechef.com/users/pride_seren_27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  <Code2 />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            {state.succeeded ? (
              <p className="text-green-600 text-center font-medium">
                Thanks for your message!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                    placeholder="Piyush Thawale..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2",
                    { "opacity-70 cursor-not-allowed": state.submitting }
                  )}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
