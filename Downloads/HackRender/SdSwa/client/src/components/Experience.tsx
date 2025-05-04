import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { experienceData } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">Professional Experience</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="timeline-container relative">
                {experienceData.map((experience, index) => (
                  <TimelineItem 
                    key={index}
                    experience={experience}
                    index={index}
                    isLast={index === experienceData.length - 1}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  experience: {
    position: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  };
  index: number;
  isLast: boolean;
}

function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`pl-10 relative pb-12 ${isLast ? "" : "border-l-2 border-primary/50 ml-5"}`}
    >
      <div 
        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center absolute left-0 top-0 -ml-5 z-10"
      >
        {index + 1}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium inline-block sm:flex-shrink-0">
          {experience.period}
        </div>
        <h3 className="font-heading font-semibold text-xl">{experience.position}</h3>
      </div>
      <div className="mt-2">
        <h4 className="font-medium text-lg">{experience.company}</h4>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {experience.description}
        </p>
        <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
          {experience.achievements.map((achievement, achievementIndex) => (
            <li key={achievementIndex} className="flex items-start">
              <CheckCircle className="text-emerald-500 h-5 w-5 mt-1 mr-2 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
