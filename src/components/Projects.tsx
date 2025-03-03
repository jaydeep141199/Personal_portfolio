import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import {  Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'react', name: 'React.js' },
    { id: 'next', name: 'Next.js' },
    // { id: 'ui', name: 'UI/UX' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Dairy Management System',
      description: 'Admin panel for dairy management with secure authentication and CRUD operations for products, users, orders, and subscriptions.',
      image: 'https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_960_720.jpg',
      categories: ['react'],
      technologies: ['React', 'RTK Query', 'Mantine UI', 'Formik', 'Zod']
    },
    {
      id: 2,
      title: 'Learning Management System',
      description: 'Quiz management system with admin and client panels. Features include user authentication, quiz creation, and automatic answer checking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      categories: ['next', 'react'],
      technologies: ['Next.js', 'Mantine UI', 'Redux Toolkit', 'Formik', 'Yup']
    },
    {
      id: 3,
      title: 'SSO Authentication System',
      description: 'Login system with forgot and reset password functionality using Next Auth and JWT tokens in cookies.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      categories: ['next'],
      technologies: ['Next.js', 'Mantine UI', 'Zod', 'React Hook Form']
    },
    {
      id: 4,
      title: 'Expense Management System',
      description: 'Personal finance tracker with expense categorization, budget planning, and visual reports.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
      categories: ['react'],
      technologies: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Chart.js']
    },
    {
      id: 5,
      title: 'Music App',
      description: 'Music player with playlist management, search functionality, and audio visualization.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      categories: ['react'],
      technologies: ['React', 'Redux', 'Styled Components', 'Web Audio API']
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'Real-time weather information with forecast, location search, and interactive maps.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      categories: ['react'],
      technologies: ['React', 'OpenWeather API', 'Leaflet', 'Tailwind CSS']
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py- 2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <div className="flex justify-between">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            These are just a few examples of my work. I'm constantly working on new projects and improving my skills.
          </p>
          <motion.a
            href="https://github.com/jaydeep141199"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;