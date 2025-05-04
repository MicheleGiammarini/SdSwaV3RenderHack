import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Wrench, Users } from "lucide-react";
import { 
  technicalSkills, 
  toolsSkills, 
  softSkills, 
  coreSkills 
} from "@/lib/data";

export function Skills() {
  const WrenchIcon = Wrench;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <SkillCard 
            title="Technical Skills" 
            icon={<Code className="h-6 w-6" />} 
            skills={technicalSkills} 
            colorClass="bg-primary/10 text-primary dark:bg-primary/20" 
            iconBgClass="bg-primary/10 text-primary"
            delay={0}
          />
          
          {/* Software & Platforms */}
          <SkillCard 
            title="Software & Platforms" 
            icon={<WrenchIcon className="h-6 w-6" />} 
            skills={toolsSkills} 
            colorClass="bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20" 
            iconBgClass="bg-emerald-500/10 text-emerald-500"
            delay={0.1}
          />
          
          {/* Soft Skills */}
          <SkillCard 
            title="Soft Skills" 
            icon={<Users className="h-6 w-6" />} 
            skills={softSkills} 
            colorClass="bg-purple-500/10 text-purple-500 dark:bg-purple-500/20" 
            iconBgClass="bg-purple-500/10 text-purple-500"
            delay={0.2}
          />
        </div>
        
        {/* Skill Meter Section */}
        <motion.div 
          className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-heading font-semibold text-xl mb-8 text-center">Core Skills</h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {coreSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                skill={skill.name} 
                percentage={skill.percentage} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: { name: string }[];
  colorClass: string;
  iconBgClass: string;
  delay: number;
}

function SkillCard({ title, icon, skills, colorClass, iconBgClass, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 rounded-full ${iconBgClass} flex items-center justify-center mr-4`}>
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-xl">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span 
            key={index}
            className={`skill-tag px-3 py-1 ${colorClass} rounded-full text-sm font-medium transition-all hover:scale-105`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + (index * 0.05) }}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay: number;
}

function SkillBar({ skill, percentage, delay }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="bg-primary h-full rounded-full" 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
