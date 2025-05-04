import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 dark:from-primary/10 dark:to-purple-500/10"></div>
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6 max-w-lg">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
                <span className="block">Hi, I'm Michele Giammarini</span>
                <span className="block">Sr Assoc, SD</span>
                <TypewriterText text="Software Engineering" className="text-primary" />
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I design and develop enterprise software solutions with a focus on cloud architectures, microservices, and scalable applications to solve complex business problems.
              </p>
              <div className="flex flex-wrap gap-4">
   
                <Button size="lg" variant="outline" asChild>
                  <a href="#projects">My Projects</a>
                </Button>
              </div>
              <div className="flex space-x-4 pt-4">
          
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary/80 to-purple-500/80 flex items-center justify-center overflow-hidden shadow-xl">
                <div className="w-60 h-60 md:w-76 md:h-76 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center text-5xl font-bold text-white">
                  MG
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 font-mono text-sm text-primary"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <code>&lt;code lover /&gt;</code>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface TypewriterTextProps {
  text: string;
  className?: string;
}

function TypewriterText({ text, className = "" }: TypewriterTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!textRef.current) return;
    
    textRef.current.classList.add("animate-typing");
    
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: hsl(217, 91%, 60%) }
      }
      
      .animate-typing {
        display: inline-block;
        overflow: hidden;
        border-right: 3px solid hsl(217, 91%, 60%);
        white-space: nowrap;
        animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  return <span ref={textRef} className={className}>{text}</span>;
}
