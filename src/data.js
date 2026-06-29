// Central content source — edit your portfolio data here.

export const PROFILE = {
  name: 'Nukala Manasa',
  roles: ['Frontend Developer', 'React Developer', 'MERN Stack Developer', 'Software Developer'],
  email: 'manasanukala07@gmail.com',
  phone: '8309938824',
  phoneDisplay: '+91 83099 38824',
  github: 'https://github.com/MANASA-NUKALA',
  githubHandle: 'github.com/MANASA-NUKALA',
}

export const SKILLS = [
  { group: 'FRONTEND', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'] },
  { group: 'BACKEND', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { group: 'DATABASES', items: ['MongoDB', 'MySQL'] },
  { group: 'LANGUAGES', items: ['Java', 'JavaScript', 'SQL'] },
  { group: 'TOOLS', items: ['Git', 'GitHub', 'VS Code'] },
  { group: 'CONCEPTS', items: ['DSA', 'REST APIs', 'OOP', 'Problem Solving'] },
]

export const CATEGORIES = ['All', 'MERN', 'AI / ML', 'Computer Vision']

export const PROJECTS = [
  {
    name: 'BloodBridge',
    tag: 'MERN',
    cats: ['MERN'],
    github: 'https://github.com/MANASA-NUKALA/BloodBridge',
    live: '',
    desc: 'A MERN stack blood donation platform connecting donors and recipients. Register as a donor, search for blood, and manage requests through a responsive interface.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    features: ['Donor registration', 'Blood requests', 'Search functionality', 'Responsive UI'],
  },
  {
    name: 'RaithuBuddy',
    tag: 'MERN',
    cats: ['MERN'],
    github: 'https://github.com/MANASA-NUKALA/Raithu-buddy',
    live: 'https://raithu-buddy-p8uk.vercel.app/',
    desc: 'RaithuBuddy is a full-stack web application designed to help farmers by bringing crop guidance, weather updates, government schemes, and product listings into one easy-to-use platform.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    features: ['User registration and login', 'Secure authentication', 'Farmer-friendly dashboard', 'Crop-related information', 'Government scheme information', 'Weather updates', 'Product listings', 'Contact/support section'],
  },
  {
    name: 'PlasticSwap',
    tag: 'MERN',
    cats: ['MERN'],
    github: 'https://github.com/MANASA-NUKALA/PLASTIC-SWAP',
    live: 'https://plastic-swap.vercel.app/',
    desc: 'A MERN stack sustainability platform promoting plastic waste exchange and recycling initiatives through a modern web application.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    features: ['Plastic listing management', 'Recycling awareness', 'User dashboard', 'Responsive design'],
  },
  {
    name: 'Warehouse Box Counter',
    tag: 'Computer Vision',
    cats: ['AI / ML', 'Computer Vision'],
    github: 'https://github.com/MANASA-NUKALA/warehouse-box-counter-cv',
    live: '',
    desc: 'A computer vision solution that automates box detection and counting for warehouse inventory monitoring in real time.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Tkinter'],
    features: ['Object detection', 'Automated box counting', 'Inventory monitoring', 'Real-time processing'],
  },
]

export const CERTIFICATIONS = [
  {
    title: 'FreeCodeCamp — Responsive Web Design',
    issuer: 'FreeCodeCamp',
    image: '/certs/Responsive web design by freecodecamp (1).png',
  },
]

export const RESUME = {
  path: '/resume/Manasa Nukala resume (2).pdf',
  fileName: 'Manasa Nukala resume (2).pdf',
}
