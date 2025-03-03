import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-blue-400">Jaydeep Gadhavi</h3>
            <p className="text-gray-400 mt-2">Front End Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6 mb-6 md:mb-0"
          >
            <motion.a
              href="https://github.com/jaydeep141199"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="http://www.linkedin.com/in/jaydeep-gadhavi-ab25b0219"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:jaydip.gadhavi.1999@gmail.com"
              whileHover={{ y: -5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-500">
            &copy; {currentYear} Jaydeep Gadhavi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;