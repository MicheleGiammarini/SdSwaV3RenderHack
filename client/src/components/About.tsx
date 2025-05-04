import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { educationData, certificationData } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">About Me</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  I am a Senior Associate in Solution Development Software Engineering with a passion for architecting and developing enterprise software solutions. With a strong background in computer engineering and attention to detail, I specialize in designing scalable and resilient architectures that solve complex business problems.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  My approach combines technical excellence with business understanding, ensuring solutions that not only meet but exceed client expectations. I thrive in collaborative environments where I can contribute my experience and technical expertise in cloud architectures and microservices.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies, deepening my understanding of cloud architecture concepts, and sharing knowledge with the developer community, participating in innovative projects that introduce new methodologies to the software development world.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-10">
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-4 text-primary">Education</h3>
                    <div className="space-y-4">
                      {educationData.map((education, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <h4 className="font-semibold">{education.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300">{education.institution}, {education.period}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-4 text-primary">Certifications</h3>
                    <div className="space-y-4">
                      {certificationData.map((certification, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <h4 className="font-semibold">{certification.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300">{certification.issuer}, {certification.year}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
