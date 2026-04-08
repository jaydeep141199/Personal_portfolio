export const personalInfo = {
  name: 'Jaydeep Gadhavi',
  title: 'Frontend Developer',
  heroRoles: ['Frontend Developer', 'React.js Developer', 'Next.js Developer'],
  summary:
    'Frontend Developer with 3+ years of experience building scalable and responsive web applications using React.js, Next.js, JavaScript, and TypeScript.',
  about:
    'Skilled in developing modern user interfaces with Tailwind CSS, ShadCN UI, Mantine UI, and Material UI, while managing application state with Redux Toolkit and RTK Query. Focused on clean, maintainable code, responsive design, authentication flows, role-based access control, and performance optimization.',
  phone: '8200771461',
  email: 'jaydip.gadhavi.1999@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jaydeep-gadhavi-ab25b0219',
  github: 'https://github.com/jaydeep141199',
  location: 'Ahmedabad, Gujarat, India',
};

export const education = [
  {
    degree: 'M.Sc. (CA & IT)',
    school: 'K.S. School of Business Management',
    period: '2021 - 2023',
    grade: 'A',
  },
  {
    degree: 'B.Sc. (CA & IT)',
    school: 'K.S. School of Business Management',
    period: '2017 - 2021',
    grade: 'A+',
  },
];

export const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Whitestork Solution',
    period: 'Jan 2026 - Present',
    description: [
      'Built Hakini, a mental wellness and therapist management platform with scalable architecture.',
      'Implemented therapist listing, therapist profiles, and appointment booking workflows.',
      'Developed secure authentication and role-based access control for users, therapists, and admins.',
      'Created responsive UI components with smooth animations and improved user experience.',
      'Optimized performance with server-side rendering and dynamic routing in Next.js.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Inexture Solution',
    period: 'Jan 2023 - Dec 2025',
    description: [
      'Delivered admin and client platforms with secure authentication, authorization, and protected routes.',
      'Built responsive, data-driven interfaces using React.js, Next.js, TypeScript, Redux Toolkit, and Mantine UI.',
      'Integrated APIs, profile management, password update flows, and advanced table-based data management.',
      'Worked on multilingual features, AI-assisted workflows, and subscription-based product experiences.',
    ],
  },
];

export const featuredProjects = [
  {
    id: 1,
    title: 'Hakini',
    description:
      'Mental wellness and therapist management platform featuring therapist discovery, profile pages, appointment booking, secure authentication, and role-based access control.',
    image:
      'https://plus.unsplash.com/premium_photo-1661719147671-4c422b475b26?auto=format&fit=crop&fm=jpg&q=80&w=1200&h=800',
    categories: ['next'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Framer Motion', 'REST API'],
  },
  {
    id: 2,
    title: 'SmartMint',
    description:
      'Admin-client trading platform with protected routes, KuCoin credential synchronization, leverage and amount modules, profile management, and scalable data tables.',
    image:
      'https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=1200&q=80',
    categories: ['react'],
    technologies: ['React.js', 'TypeScript', 'Redux Toolkit', 'Mantine UI', 'Mantine React Table'],
  },
  {
    id: 3,
    title: 'Lawvidia AI',
    description:
      'Legal management platform with admin and client panels, document upload, summarization, AI draft generation, advocate management, chatbot features, and court tracking.',
    image:
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80',
    categories: ['next'],
    technologies: ['Next.js', 'JavaScript', 'Redux Toolkit', 'Mantine UI', 'REST API'],
  },
  {
    id: 4,
    title: 'Dairy Management System',
    description:
      'Admin dashboard with secure authentication, protected routes, CRUD modules for users, categories, products, orders, and delivery staff, plus monthly reporting and analytics.',
    image:
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80',
    categories: ['react'],
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Mantine UI', 'Mantine React Table'],
  },
      {
      id: 5,
      title: 'Learning Management System',
      description: 'Quiz management system with admin and client panels. Features include user authentication, quiz creation, and automatic answer checking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      categories: ['next', 'react'],
      technologies: ['Next.js', 'Mantine UI', 'Redux Toolkit', 'Formik', 'Yup']
    },
    {
      id: 6,
      title: 'SSO Authentication System',
      description: 'Login system with forgot and reset password functionality using Next Auth and JWT tokens in cookies.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      categories: ['next'],
      technologies: ['Next.js', 'Mantine UI', 'Zod', 'React Hook Form']
    },
];

export const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 88 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 88 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', level: 94 },
      { name: 'Next.js', level: 90 },
      { name: 'Redux Toolkit', level: 88 },
      { name: 'RTK Query', level: 82 },
      { name: 'React Hook Form', level: 78 },
      { name: 'React Router', level: 84 },
    ],
  },
  {
    title: 'UI & Styling',
    skills: [
      { name: 'Tailwind CSS', level: 92 },
      { name: 'ShadCN UI', level: 84 },
      { name: 'Mantine UI', level: 90 },
      { name: 'Material UI', level: 82 },
      { name: 'Bootstrap', level: 78 },
    ],
  },
  {
    title: 'Validation & Tooling',
    skills: [
      { name: 'Formik', level: 80 },
      { name: 'Yup', level: 78 },
      { name: 'Zod', level: 80 },
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 86 },
      { name: 'GitLab', level: 82 },
      { name: 'Bitbucket', level: 78 },
    ],
  },
];

export const focusAreas = [
  'Authentication and authorization flows',
  'Role-based access control',
  'API integration and state management',
  'Responsive and scalable UI systems',
];

export const approachData = [
  {
    title: 'Scalable Frontends',
    description: 'Building component-driven interfaces that stay maintainable as products grow.',
    iconPath:
      'M4 7h16M4 12h10M4 17h16M17 10l3 2-3 2',
  },
  {
    title: 'Responsive UX',
    description: 'Creating polished layouts and interactions that work smoothly across screen sizes.',
    iconPath:
      'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343',
  },
  {
    title: 'Performance First',
    description: 'Improving rendering, routing, and data flow for fast and reliable product experiences.',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Clean Delivery',
    description: 'Prioritizing readable code, reusable patterns, and smooth collaboration with teams.',
    iconPath:
      'M9 12l2 2 4-4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 12-4.477 10-10 10z',
  },
];
