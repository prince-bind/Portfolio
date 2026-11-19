const GH = 'https://github.com/prince-bind'

export const profile = {
  name: 'Prince Bind',
  roles: ['full-stack apps', 'RAG assistants', 'LLM agents', 'secure REST APIs'],
  lede: 'Final-year Engineering Physics student at Delhi Technological University. I ship real products for real clients.',
  email: 'princebind1905@gmail.com',
  github: GH,
  linkedin: 'https://www.linkedin.com/in/prince-bind/',
}

export const stats = [
  { n: 3, s: '', l: 'client sites live' },
  { n: 250, s: '+', l: 'LeetCode problems' },
  { n: 45, s: '', l: 'automated tests written' },
  { n: 8, p: 'Top ', s: '', l: 'Synapse.AI Hackathon' },
]

export const projects = [
  {
    name: 'BuyWizly', tag: 'RAG-powered shopping assistant',
    points: [
      'End-to-end RAG pipeline: heading-aware chunking, ChromaDB embeddings, hybrid dense and keyword retrieval, cited answers.',
      'An answerability gate refuses low-confidence questions instead of making things up. An offline eval harness tracks Hit@k and MRR.',
      'Tool-routing LLM agent (LangChain, Groq, Llama 3.3) for product search, order tracking, policy questions and comparisons. Budget and category limits are enforced in SQL, so the model only ranks results.',
      'Answers stream over SSE to a React UI with product cards and citations. Admin console, stock-safe checkout, JWT role-based access, rate limiting and a 19-test pytest suite with CI.',
    ],
    stack: ['FastAPI', 'Python', 'React', 'ChromaDB', 'LangChain', 'PostgreSQL', 'SSE'],
    links: [['GitHub', GH]],
  },
  {
    name: 'Uniroost', tag: 'Student accommodation platform',
    points: [
      'Found and fixed a privilege-escalation bug that let clients pick an admin role at signup. Added Zod validation on 10+ endpoints and rate limiting on auth routes.',
      'Paginated, filterable REST API with 6 combinable search parameters and 7 composite indexes, capped at 50 results per page.',
      'GitHub Actions CI/CD: lint, typecheck, 26-test Vitest suite and build against a live Postgres container on every push.',
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Zod'],
    links: [['GitHub', GH]],
  },
  {
    name: 'PrepMateAI', tag: 'AI-assisted preparation tool',
    points: ['An AI project built to help with preparation. Full write-up coming soon; the source is on GitHub.'],
    stack: [],
    links: [['GitHub', GH + '/PrepMateAI']],
  },
  {
    name: 'Huffman Compressor', tag: 'Lossless compression with Huffman coding',
    points: [
      'Huffman coding builds a binary tree from character frequencies, so frequent symbols get short bit codes and rare ones get longer codes.',
      'The result is a prefix-free code: no code is the start of another, so compressed data decodes without ambiguity and without losing anything.',
      'Compressing replaces each character with its code. Decompressing walks the tree to recover the original data exactly.',
      'Source and implementation details are in the repository.',
    ],
    stack: [],
    links: [['GitHub', GH + '/HuffmanCompressor']],
  },
]

export const client = [
  {
    name: 'RK Technical Institute', tag: 'Training institute, Azamgarh',
    text: 'Website for a hands-on technical institute: course catalogue, student certificate verification, staff login and a contact page, in Hindi and English.',
    links: [['Visit site', 'https://www.rktechnical.in']],
  },
  {
    name: 'Perfect Advice', tag: 'Next.js web app',
    text: 'Client website built with Next.js and Tailwind CSS, delivered from requirements to deployment.',
    links: [['Visit site', 'https://www.perfectadvice.in/']],
  },
  {
    name: 'Jain Piyush & Co.', tag: 'Chartered accountancy firm',
    text: 'Website for a Delhi CA firm: 12 service pages, a guide for foreign entrepreneurs entering India, careers, blog and updates sections, and a contact form.',
    links: [['Visit site', 'https://www.jainpiyushandco.in/']],
  },
]

export const experience = [
  {
    when: 'Sep 2025 – Feb 2026', role: 'Full-stack developer', org: 'DTU IIF (PARK It Up)',
    points: [
      'Built a real-time parking-availability feature in Next.js that made search faster.',
      'Cached Google Maps API responses to cut latency and cloud API costs.',
      'Designed role-based access for four roles (User, Valet, Manager, Admin) with no unauthorized-access incidents in three months of testing.',
    ],
    stack: ['Next.js', 'Node.js', 'TypeScript', 'JWT'],
  },
  {
    when: 'Sep – Dec 2024', role: 'Web designer intern', org: 'VDSemiX, DTU',
    points: [
      'Rebuilt the official website as a responsive React SPA, lifting session duration by about 20%.',
      'Created 15+ reusable UI components, speeding up feature work by about 30%.',
      'Improved page load time by about 25% across 5+ screen sizes.',
    ],
    stack: ['React', 'JavaScript', 'CSS3'],
  },
  {
    when: 'Jan – Jun 2024', role: 'Teaching assistant intern', org: 'DTU Lab on Wheels, Delhi',
    points: [
      'Delivered hands-on computer-literacy training to 15 government school students, covering basic computer operations, office tools and internet safety in structured, beginner-friendly sessions.',
      'Mentored students one-on-one and managed classroom activities, building communication, mentoring and classroom-management skills while simplifying technical concepts for first-time learners.',
    ],
    stack: [],
  },
]

export const skills = {
  Languages: ['C++', 'JavaScript', 'TypeScript', 'Java', 'Python', 'SQL'],
  Frontend: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  'Backend and data': ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'REST APIs', 'JWT', 'Spring Boot', 'JPA', 'Hibernate'],
  GenAI: ['RAG', 'LLM agents', 'LangChain', 'ChromaDB', 'Embeddings', 'Prompt engineering', 'Retrieval evaluation'],
  Tools: ['Git', 'GitHub', 'Postman', 'Docker', 'AWS', 'GitHub Actions'],
  'Core CS': ['DSA', 'OOP', 'DBMS', 'Operating systems'],
}

export const about = {
  education: [
    'B.Tech, Engineering Physics, Delhi Technological University, 2023–2027. CGPA 6.73 / 10.',
    'Class XII (CBSE) 2022: 76.8%. Class X (CBSE) 2020: 80.4%. Govt. S.B.V Rouse Avenue, New Delhi.',
  ],
  beyond: [
    'Top-8 finish at the Synapse.AI Hackathon (DTU), building an AI solution under time pressure.',
    'Completed 3 freelance projects from requirements to deployment.',
    'Taught a basic computer course to 15+ Delhi government school students (USIP, DTU Lab on Wheels).',
  ],
}
