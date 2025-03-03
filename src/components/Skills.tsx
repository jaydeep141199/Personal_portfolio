// import React from 'react';
// import { motion } from 'framer-motion';

// const Skills: React.FC = () => {
//   const skillCategories = [
//     {
//       title: 'Languages',
//       skills: [
//         { name: 'HTML', level: 90 },
//         { name: 'CSS', level: 85 },
//         { name: 'JavaScript', level: 90 },
//         { name: 'TypeScript', level: 80 },
//       ]
//     },
//     {
//       title: 'Frameworks & Libraries',
//       skills: [
//         { name: 'React', level: 90 },
//         { name: 'Redux Toolkit', level: 85 },
//         { name: 'RTK Query', level: 80 },
//         { name: 'React Hook Form', level: 85 },
//         { name: 'Next.js', level: 70},
//       ]
//     },
//     {
//       title: 'CSS Frameworks',
//       skills: [
//         { name: 'Bootstrap', level: 80 },
//         { name: 'Tailwind CSS', level: 85 },
//         { name: 'Mantine UI', level: 85 },
//         { name: 'Material UI', level: 80 },
//       ]
//     },
//     {
//       title: 'Tools & Others',
//       skills: [
//         { name: 'Git & GitHub', level: 85 },
//         { name: 'GitLab', level: 80 },
//         { name: 'Unit Testing', level: 70},
//         { name: 'Cypress', level: 50 },
//       ]
//     }
//   ];
//   const approachData = [
//     {
//       title: "Problem Solving",
//       description:
//         "Analytical approach to breaking down complex problems into manageable solutions.",
//       iconPath:
//         "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
//     },
//     {
//       title: "Responsive Design",
//       description:
//         "Creating interfaces that work seamlessly across all devices and screen sizes.",
//       iconPath:
//         "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
//     },
//     {
//       title: "Performance Optimization",
//       description:
//         "Building fast, efficient applications with optimized code and assets.",
//       iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
//     },
//     {
//       title: "Clean Code",
//       description:
//         "Writing maintainable, well-structured code with best practices and patterns.",
//       iconPath:
//         "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
//     },
//   ];
//   return (
//     <section id="skills" className="py-20 bg-gray-800/50">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
//           <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={categoryIndex}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
//               className="bg-gray-800 p-6 rounded-lg shadow-lg"
//             >
//               <h3 className="text-xl font-bold mb-6 text-blue-400">{category.title}</h3>
//               <div className="space-y-6">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skillIndex}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-gray-300">{skill.name}</span>
//                       <span className="text-gray-400">{skill.level}%</span>
//                     </div>
//                     <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1, delay: 0.2 + (0.1 * skillIndex) }}
//                         className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
//                       ></motion.div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: 0.6 }}
//       className="mt-16 text-center"
//     >
//       <h3 className="text-2xl font-bold mb-6 text-blue-400">
//         My Development Approach
//       </h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {approachData.map((item, index) => (
//           <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-8 w-8 text-blue-400"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={item.iconPath}
//                 />
//               </svg>
//             </div>
//             <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
//             <p className="text-gray-400">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 80 },
        { name: 'TypeScript', level: 70 },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 75 },
        { name: 'Redux Toolkit', level: 70 },
        { name: 'RTK Query', level: 60 },
        // { name: 'React Hook Form', level: 60 },
        // { name: 'Next.js', level: 60},
      ]
    },
    {
      title: 'CSS Frameworks',
      skills: [
        { name: 'Bootstrap', level: 60 },
        { name: 'Tailwind CSS', level: 70 },
        { name: 'Mantine UI', level: 60 },
        { name: 'Material UI', level: 60 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 70 },
        { name: 'GitLab', level: 60 },
        // { name: 'Unit Testing', level: 50},
        // { name: 'Cypress', level: 40 },
      ]
    }
  ];

  const approachData = [
    {
      title: "Problem Solving",
      description:
        "Analytical approach to breaking down complex problems into manageable solutions.",
      iconPath:
        "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
      title: "Responsive Design",
      description:
        "Creating interfaces that work seamlessly across all devices and screen sizes.",
      iconPath:
        "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    },
    {
      title: "Performance Optimization",
      description:
        "Building fast, efficient applications with optimized code and assets.",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Clean Code",
      description:
        "Writing maintainable, well-structured code with best practices and patterns.",
      iconPath:
        "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    },
  ];

  const CircularProgress = ({ progress }: { progress: number }) => {
    const radius = 40;
    const circumference = 2* Math.PI * radius;
    const offset = circumference - progress / 100 * circumference;

    return (
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#2D3748"
          strokeWidth="8"
          fill="transparent"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#3B82F6"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1 }}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
        <text
  x="50"
  y="50"
  textAnchor="middle"
  dominantBaseline="middle"
  style={{ fill: "white", fontWeight: "bold", fontSize: "1.25rem" }}
>
  {`${progress}%`}
</text>

      </svg>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            category.skills.map((skill, skillIndex) => (
              <motion.div
                key={`${categoryIndex}-${skillIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * skillIndex }}
                className="flex flex-col items-center justify-center"
              >
                <CircularProgress progress={skill.level} />
                <p className="text-gray-300 mt-2">{skill.name}</p>
              </motion.div>
            ))
          ))}
        </div>
         <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-16 text-center"
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-400">
        My Development Approach
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {approachData.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={item.iconPath}
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
      </div>
    </section>
  );
};

export default Skills;
