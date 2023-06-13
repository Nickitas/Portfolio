import {
  frontend,
  aiml,
  backend,
  info_sec,

  javascript,
  typescript,
  python,
  reactjs,
  redux,
  threejs,
  nodejs,
  nginx,
  mongodb,
  tensorflow,
  bash,
  git,
  figma,

  upwork,
  ostk,
  
  control,
  buffets_cams,
  iphone_presentation,
  
  person_1,
  person_2,
  person_3
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'AI/ML Developer',
    icon: aiml,
  },
  {
    title: 'Information Security',
    icon: info_sec,
  },
]

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux ToolKit',
    icon: redux,
  },
  {
    name: 'Tree JS',
    icon: threejs,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'NGINX',
    icon: nginx,
  },
  {
    name: 'mongodb',
    icon: mongodb,
  },
  {
    name: 'TensorFlow',
    icon: tensorflow,
  },
  {
    name: 'Bash',
    icon: bash,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'HTML/CSS layout designer',
    company_name: 'upwork',
    icon: upwork,
    iconBg: '#E6DEDD',
    date: 'Aug 2020 - Oct 2021',
    points: [
      'Layout of websites and applications using HTML, CSS and other front-end technologies.',
      'Creation of user interfaces and visual elements for websites in accordance with the design layout.',
      'Optimizing web pages to improve performance, loading speed and search engine optimization.',
      'Testing and debugging of the developed web pages, as well as support for the operation and maintenance of existing projects.',
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'upwork and some projects',
    icon: upwork,
    iconBg: '#E6DEDD',
    date: 'Dec 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Engineer',
    company_name: 'Department of Technical Control Systems',
    icon: ostk,
    iconBg: '#383E56',
    date: 'Sep 2022 - Aug 2023',
    points: [
      'Development and implementation of software for automating the control of technical processes and equipment, for example: monitoring and control systems for a production line, product quality control systems, etc.',
      'Optimization and improvement of software control systems, development of new modules and functionality.',
      'Providing integration between various software systems and equipment.',
      'Support and maintenance of developed software systems, including technical and operational support, updating versions and patches.',
    ],
  },
  {
    title: 'Information security engineer & Full stack Developer',
    company_name: 'Department of Integrated Security Management',
    icon: ostk,
    iconBg: '#383E56',
    date: 'Aug 2023 - Present',
    points: [
      'Analysis of vulnerabilities, threats and attacks on the information system, identification of vulnerabilities and development and implementation of secure settings to protect against threats.',
      'Development and implementation of components, modules and systems necessary to protect the company`s information resources, including: authorization, authentication, encryption, monitoring and analysis of network and application security.',
      'Thinking through and implementing measures to reduce the time for identifying, responding to and eliminating threats to the security of an information system, including by automating the decision-making process and developing, ensuring the operability of security systems.',
      'Collaboration with other IT departments and teams, including network engineers, software developers, testers and analysts, to ensure synchronism and efficiency in solving complex information security problems.',
    ],
  },
]

const testimonials = [
  {
    testimonial: 'We were impressed with Nikita`s professionalism and experience. He quickly understood our needs and showed excellent communication throughout the project. He was very proactive in coming up with new ideas and improvements that resulted in the expected quality and accuracy of our product.',
    name: 'Eugene Degtyarev',
    designation: 'technical specialist',
    company: 'ГК ФЛАГМАН',
    link: 'EugeneDegtyarev',
    image: person_2,
  },
  {
    testimonial: 'I was very pleased with the experience of working with Nikita. They were fast, responsive, and provided plenty of opportunities for feedback. He created a beautiful and functional website for me, which is very easy to use. Would definitely recommend it to anyone looking for a high quality web development job.',
    name: 'Vlad',
    designation: 'maneger',
    company: 'FullStats',
    link: 'vyatkin37',
    image: person_1,
  },
  {
    testimonial: 'Nikita quickly became an indispensable member of our team. He demonstrated a high level of knowledge and competence when working with engineering and technical information security. His skills exceeded our expectations and he was ready to help at any time. Moreover, he took responsibility for the development of various software for the department.',
    name: 'Vadim Tpufanov',
    designation: 'chief',
    company: 'Integrated Security Management',
    link: '',
    image: person_3,
  },
]

const projects = [
  {
    name: 'Control',
    description: 'High-performance system for administration in the field of access control and management in the enterprise. It` s the Information System for ensuring control and management of access at the facility',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'violet-text-gradient',
      },
      {
        name: 'node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'JWT',
        color: 'pink-text-gradient',
      },
    ],
    image: control,
    source_code_link: 'https://github.com/Nickitas/CONTROL',
  },
  {
    name: 'Buffets Cams',
    description: 'A web application that allows you to search for a suitable buffet, view the number of people in line at the checkout, and find available ones to plan a break from their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'violet-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'cv2',
        color: 'pink-text-gradient',
      },
    ],
    image: buffets_cams,
    source_code_link: 'https://github.com/Nickitas/DSTU_buffets_cams',
  },
  {
    name: 'iPhone Presentation',
    description:
      'Website presentation of iPhone 14 with 3D animation in React, using WebGi (powered by Three.js) and GSAP technologies.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'violet-text-gradient',
      },
      {
        name: 'Three.js',
        color: 'orange-text-gradient',
      },
      {
        name: 'GSAP',
        color: 'pink-text-gradient',
      },
    ],
    image: iphone_presentation,
    source_code_link: 'https://github.com/Nickitas/iPhone_Presentation',
  },
]

export { services, technologies, experiences, testimonials, projects }