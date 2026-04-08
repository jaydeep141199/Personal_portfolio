import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';
import jaydeep from '../assets/Jd.jpeg';
import { personalInfo } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="text-blue-400">{personalInfo.name}</span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 mb-6 h-16">
              <TypeAnimation
                sequence={[
                  personalInfo.heroRoles[0],
                  2000,
                  personalInfo.heroRoles[1],
                  2000,
                  personalInfo.heroRoles[2],
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border border-blue-500 text-blue-400 rounded-full font-medium hover:bg-blue-500/10 transition-colors"
              >
                View Projects
              </motion.a>
            </div>
            <div className="flex mt-8 gap-6 justify-center md:justify-start">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>
            
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl shadow-blue-500/20">
              <img
                src={jaydeep}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500/10"></div>
            </div>
          </motion.div>
        </div>
      
      </div>
    </section>
  );
};

export default Hero;
