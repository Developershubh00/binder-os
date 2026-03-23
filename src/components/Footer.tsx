import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-3">
              {/* Binder OS Logo */}
              <a href="#" className="text-2xl font-extrabold tracking-tight text-foreground">
                Binder<span className="text-accent">OS</span>
              </a>
              {/* Binder 33 Labs branding */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center">
                  <span className="text-xs font-black text-accent">B</span>
                </div>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  A product of{" "}
                  <span className="font-semibold text-foreground/80 group-hover:text-accent transition-colors">
                    Binder 33 Labs
                  </span>
                </a>
              </div>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {[
                { label: "Product", href: "#inventory" },
                { label: "Features", href: "#features" },
                { label: "About Binder 33 Labs", href: "#" },
                { label: "Contact", href: "#cta" },
                { label: "Privacy Policy", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full origin-left" />
                </a>
              ))}
            </nav>

            <motion.a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl border border-border/40 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </div>
        </AnimatedSection>

        <div className="mt-12 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Binder 33 Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
