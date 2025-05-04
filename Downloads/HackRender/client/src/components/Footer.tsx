import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="font-heading text-xl font-bold">
              <span className="text-primary">Michele</span>
              <span className="text-emerald-500">Giammarini</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Sr Associate Solution Developer specializing in building exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
            
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Michele Giammarini. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
