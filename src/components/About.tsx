import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                  alt="Coding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-lg -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Front End Developer</h3>
            <p className="text-gray-300 mb-6">
              I am a passionate Front End Developer with a strong foundation in React.js and modern web technologies. 
              With a Master's degree in Computer Applications and Information Technology, I combine technical expertise 
              with creative problem-solving to build responsive and user-friendly web applications.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in web development began during my Bachelor's studies, and I've since honed my skills through 
              professional experience at Inexture Solution and various challenging projects. I'm dedicated to creating 
              clean, efficient code and staying updated with the latest industry trends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300">8200771461</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300">jaydip.gadhavi.1999@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 col-span-1 md:col-span-2">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-300">E-401, Kalash 2, Narol, Ahmedabad</span>
              </div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg border-t-4 border-blue-500"
          >
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="mb-4">
              <h4 className="text-blue-400 font-medium">M.Sc. (CA & IT)</h4>
              <p className="text-gray-400">K.S. School of Business Management</p>
              <p className="text-gray-500 text-sm">2021-2023 | Grade: A+</p>
            </div>
            <div>
              <h4 className="text-blue-400 font-medium">B.Sc. (CA & IT)</h4>
              <p className="text-gray-400">K.S. School of Business Management</p>
              <p className="text-gray-500 text-sm">2017-2021 | Grade: A+</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg border-t-4 border-blue-500"
          >
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <div>
              <h4 className="text-blue-400 font-medium">React.js Developer</h4>
              <p className="text-gray-400">Inexture Solution</p>
              <p className="text-gray-500 text-sm">2023 - Present</p>
              <p className="text-gray-300 mt-2">
                Developing responsive web applications using React.js, Redux Toolkit, and modern UI frameworks.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg border-t-4 border-blue-500 md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-4">Interests</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Singing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Cricket</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Listening to Music</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Web Development</span>
              </li>
              {/* <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>UI/UX Design</span>
              </li> */}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;