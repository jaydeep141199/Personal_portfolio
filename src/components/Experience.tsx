import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'React.js Developer',
      company: 'Inexture Solution',
      period: '2023 - Present',
      description: [
        'Developing responsive web applications using React.js, Redux Toolkit, and modern UI frameworks',
        'Implementing secure authentication systems and permission-based access control',
        'Creating reusable components and optimizing application performance',
        'Collaborating with cross-functional teams to deliver high-quality products'
      ]
    }
  ];

  const projects = [
    {
      title: 'Dairy Management System',
      description: 'Developed an admin panel focused on dairy management with secure login/logout functionality and permission-based authentication. Implemented CRUD operations for categories, products, users, orders, and subscriptions.',
      technologies: 'React, RTK Query, Mantine UI, Formik, Zod, Mantine React Table'
    },
    {
      title: 'Learning Management System',
      description: 'Built a quiz management system with both admin and client panels. Users can sign up, log in, and attempt quizzes. Admins can add questions, assign marks, and manage settings. The system automatically checks answers and provides marks after submission.',
      technologies: 'Next.js, Mantine UI, Redux Toolkit, Formik, Yup'
    },
    {
      title: 'SSO Authentication System',
      description: 'Created a login page with forgot and reset password functionality. Used Next Auth for login and forgot password to add JWT tokens in cookies.',
      technologies: 'Next.js, Mantine UI, Zod, React Hook Form'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-400">Work Experience</h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                  <p className="text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-8 text-blue-400">Key Projects</h3>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-blue-500"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(', ').map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gray-800/30 p-8 rounded-lg border border-gray-700"
        >
          <h3 className="text-xl font-bold mb-4 text-blue-400">Other Projects</h3>
          <p className="text-gray-300 mb-4">
            I have also created numerous projects such as expense management systems, music apps, weather apps, 
            personal portfolios, internal organization management systems, and e-commerce platforms.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Mantine UI</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Redux Toolkit</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;