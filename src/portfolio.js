/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "Sumit Yadav's Portfolio",
  description:
    "Computer Science undergraduate passionate about building intelligent applications using Artificial Intelligence, Machine Learning, Generative AI, and backend technologies.",
  og: {
    title: "Sumit Yadav Portfolio",
    type: "website",
    url: "https://sumityadav026.github.io/",
  },
};

// Home Page
const greeting = {
  title: "Sumit Yadav",
  logo_name: "SumitYadav",
  nickname: "sumityadav026",
  subTitle:
    "A Computer Science undergraduate passionate about building intelligent applications using Artificial Intelligence, Machine Learning, Generative AI, and backend technologies. Experienced in building RAG systems, Computer Vision pipelines, and data-driven solutions.",
  resumeLink: process.env.PUBLIC_URL + "/Sumit_Yadav_Resume.pdf",
  portfolio_repository: "https://github.com/sumityadav026/My_Portfolio",
  githubProfile: "https://github.com/sumityadav026",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/sumityadav026",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sumityadav26/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:sumityadav6563@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "AI, Machine Learning & Computer Vision",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing intelligent applications using Machine Learning, Deep Learning, and Generative AI",
        "⚡ Building Retrieval-Augmented Generation (RAG) pipelines with FAISS, Sentence Transformers, and vector embeddings",
        "⚡ Experience in Computer Vision with U-Net semantic segmentation, YOLOv8 damage detection, and OpenAI CLIP zero-shot classification",
        "⚡ Data analysis, augmentation, and modeling with Scikit-learn, PyTorch, NumPy, and Pandas",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
      ],
    },
    {
      title: "Backend Engineering & Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building scalable backend REST APIs using FastAPI, Python, and Java",
        "⚡ Designing relational database schemas and queries with PostgreSQL and MySQL",
        "⚡ Implementing vector similarity search and document indexing using FAISS",
        "⚡ Developing interactive web interfaces with React.js, JavaScript, and Streamlit",
      ],
      softwareSkills: [
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos-c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos-mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos-git-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos-linux-tux",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Core CS & Algorithmic Problem Solving",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Strong foundation in Data Structures and Algorithms with 150+ LeetCode problems solved",
        "⚡ Deep understanding of Operating Systems (OS), Database Management Systems (DBMS), and Computer Networks (CN)",
        "⚡ Proficient in Object-Oriented Programming (OOPs) and clean software engineering practices",
        "⚡ Competitive programming practice focused on structured problem-solving and algorithmic optimization",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos-c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",
          style: {
            color: "#0284c7",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos-git-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos-linux-tux",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/0fjfzfy7jz/",
    },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/sumityadav026",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/sumityadav6563",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/free_gnats_96",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "lpu_logo.png",
      alt_name: "Lovely Professional University",
      duration: "Jul' 2024 - Present",
      descriptions: [
        "⚡ Pursuing Bachelor of Technology in Computer Science and Engineering with current CGPA of 8.74.",
        "⚡ Studied core CS fundamentals: Data Structures & Algorithms (DSA), DBMS, Operating Systems (OS), Computer Networks (CN), and Object-Oriented Programming (OOPs).",
        "⚡ Specialized coursework and project development in Machine Learning, RAG, Computer Vision, and Backend Engineering.",
      ],
      website_link: "https://www.lpu.in",
    },
    {
      title: "Army Public School",
      subtitle: "Intermediate & Matriculation (CBSE)",
      logo_path: "aps_logo.png",
      alt_name: "Army Public School Prayagraj",
      duration: "Mar' 2020 - May' 2023",
      descriptions: [
        "⚡ Senior Secondary Education (Class XII): 87.8% (2023).",
        "⚡ Secondary Education (Class X): 92.4% (2021).",
        "⚡ Solid foundation in Mathematics, Physics, and Computer Science.",
      ],
      website_link: "https://www.apsprayagraj.org",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Certified Foundations Associate Agentic AI",
      subtitle: "- Oracle",
      logo_path: "oracle_logo.png",
      certificate_link:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=890D69893EEE4C7F5D404308FC48C2F14F7DBF44EB32AB24C14AA31ED3B28900",
      alt_name: "Oracle",
      color_code: "#ffffff",
    },
    {
      title: "Programming Using C++",
      subtitle: "- Infosys",
      logo_path: "infosys_logo.png",
      certificate_link: "infosys_cpp_certificate.jpg",
      alt_name: "Infosys",
      color_code: "#ffffff",
    },
    {
      title: "MOOC on REACT.js",
      subtitle: "- TechVeda",
      logo_path: "techveda_logo.png",
      certificate_link: "techveda_react_certificate.jpg",
      alt_name: "TechVeda",
      color_code: "#ffffff",
    },
    {
      title: "Basic to Beyond Python",
      subtitle: "- CsePathshala",
      logo_path: "csepathshala_logo.png",
      certificate_link: "csepathshala_python_certificate.jpg",
      alt_name: "CsePathshala",
      color_code: "#000000",
    },
    {
      title: "Cloud Computing",
      subtitle: "- NPTEL (IIT Kharagpur)",
      logo_path: "nptel_logo.png",
      certificate_link: "nptel_cloud_computing_certificate.jpg",
      alt_name: "NPTEL",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience, Training & Projects",
  description:
    "My hands-on experience covers AI model evaluation and multimodal data assessment, structured competitive programming training, and applied deep learning engineering.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "AI Model Evaluator",
          company: "Outlier AI – Aether Project",
          company_url: "https://outlier.ai/",
          logo_path: "outlier_logo.png",
          duration: "2026",
          location: "Remote",
          description:
            "• Evaluated AI-generated image, video, audio, and text outputs to assess quality, accuracy, consistency, and relevance.\n• Performed comparative analysis of AI responses, identifying visual inconsistencies, transcription errors, factual inaccuracies, and reasoning issues.\n• Delivered structured human feedback and evidence-based judgments to improve AI model performance through human-in-the-loop (HITL) evaluation workflows.\n• Completed paid AI evaluation tasks for a global AI training initiative, demonstrating strong analytical reasoning and attention to detail.\n\nTech / Skills: AI Model Evaluation, Multimodal AI, NLP, Human-in-the-Loop (HITL), Image & Video Analysis, Audio Evaluation, Quality Assessment.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Training",
      work: true,
      experiences: [
        {
          title: "Competitive Programming Trainee",
          company: "Programming Pathshala (Summer PEP Training 2026 - CP 2028)",
          company_url: "https://www.programmingpathshala.com/",
          logo_path: "programming_pathshala_logo.png",
          duration: "Jul' 2026",
          location: "Remote",
          description:
            "Strengthened problem-solving and algorithmic thinking through structured CP training. Practiced core DSA concepts and efficient algorithmic approaches for programming problems. Developed skills in analyzing problems, optimizing solutions, and applying programming fundamentals.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Academic & Leadership",
      experiences: [
        {
          title: "Coordinator",
          company: "Student Academic Advisory Committee (CSE Department)",
          company_url: "https://www.lpu.in",
          logo_path: "lpu_logo.png",
          duration: "Jan' 2025 - Present",
          location: "Phagwara, Punjab",
          description:
            "Helped restructure and modernise the Computer Science curriculum by providing recommendations on relevant technologies, courses, and industry-oriented skills.",
          color: "#4285F4",
        },
        {
          title: "Hackathon Finalist",
          company: "Dev Storm Hackathon",
          company_url: "https://github.com/sumityadav026",
          logo_path: "syncgaze_logo.png",
          duration: "Aug' 2026",
          location: "Punjab, India",
          description:
            "Advanced to the final round by developing and presenting a competitive technical solution combining machine learning models with robust backend software engineering.",
          color: "#0C9D58",
        },
        {
          title: "150+ LeetCode Problems Solved",
          company: "LeetCode Practice",
          company_url: "https://leetcode.com/u/0fjfzfy7jz/",
          logo_path: "leetcode_logo.png",
          duration: "Aug' 2025",
          location: "Online",
          description:
            "Solved 150+ LeetCode problems across core Data Structures and Algorithms topics, including arrays, strings, trees, graphs, and dynamic programming.",
          color: "#F79F1B",
        },
      ],
    },
    {
      title: "Projects & Engineering",
      experiences: [
        {
          title: "Deep Learning Engineer",
          company: "Landcover Segmentation",
          company_url:
            "https://github.com/sumityadav026/landcover-segmentation",
          logo_path: "data_science.svg",
          duration: "Nov' 2026",
          location: "Phagwara, Punjab",
          description:
            "Developed a semantic segmentation pipeline using PyTorch, implementing U-Net and DeepLabV3+ with pretrained ResNet-34 to classify satellite imagery into five land-cover classes. Implemented data augmentation, class-weighted Cross-Entropy and Dice Loss to address class imbalance and evaluated models using mIoU, F1-score and Pixel Accuracy. Built a Streamlit inference application.",
          color: "#10b981",
        },
        {
          title: "AI & Multimodal Systems Developer",
          company: "ClaimShield — Insurance Claim Analysis",
          company_url: "https://github.com/sumityadav026/ClaimShield",
          logo_path: "deeplearning_ai_logo.png",
          duration: "Aug' 2026",
          location: "Phagwara, Punjab",
          description:
            "Built a multimodal AI system combining NLP, Computer Vision, and document retrieval for automated insurance claim analysis. Developed pipelines to analyze claim descriptions and damage images, identifying inconsistencies between reported information and visual evidence. Integrated RAG-based policy retrieval and FastAPI APIs.",
          color: "#38bdf8",
        },
        {
          title: "Generative AI Developer",
          company: "AI Digital Asset Manager",
          company_url:
            "https://github.com/sumityadav026/Ai-Digital-Asset-Manager",
          logo_path: "developerActivity.svg",
          duration: "Apr' 2026",
          location: "Phagwara, Punjab",
          description:
            "Built an AI-powered document management system implementing RAG with FAISS, vector embeddings and Groq LLMs for context-aware document question answering. Developed semantic and hybrid search with intelligent chunking, similarity retrieval, conversational memory and source citations. Integrated multimodal AI using OpenAI CLIP for zero-shot image classification and Tesseract OCR.",
          color: "#818cf8",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of modern technology tools. I specialize in building AI/ML solutions, Computer Vision pipelines, RAG-based Generative AI applications, and scalable FastAPI backend services.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research & Benchmarks",
  description: "Applied research, project benchmarks, and technical studies.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "landcover-segmentation",
      name: "Landcover Semantic Segmentation Benchmark",
      createdAt: "2026-11-01T00:00:00Z",
      description:
        "Aerial satellite imagery semantic segmentation pipeline using PyTorch, U-Net, DeepLabV3+, and ResNet-34 evaluated on mIoU and Dice Loss.",
      url: "https://github.com/sumityadav026/landcover-segmentation",
    },
    {
      id: "algochowk-nifty-research",
      name: "NIFTY 50 Post-Crash Recovery Dynamics Event Study",
      createdAt: "2026-08-01T00:00:00Z",
      description:
        "Econometric event study analyzing post-crash recovery dynamics across 4,660+ trading days (2007–2026) with Holm-adjusted statistical tests.",
      url: "https://github.com/sumityadav026/Algochowk-Nifty-Research",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sumit_avatar.png",
    description:
      "I am available on LinkedIn and Email. Feel free to reach out to me for AI/ML projects, backend development, or collaboration opportunities.",
  },
  blogSection: {
    title: "GitHub Activity",
    subtitle:
      "Explore my open-source code repositories, contributions, and machine learning experiments on GitHub.",
    link: "https://github.com/sumityadav026",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Phagwara, Punjab / Prayagraj, Uttar Pradesh, India",
    locality: "Phagwara",
    country: "India",
    region: "Punjab",
    postalCode: "144411",
    streetAddress: "Lovely Professional University",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://maps.google.com/?q=Lovely+Professional+University",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8318104113",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
