export const siteConfig = {
  name: "Oussama Chaouachi",
  title: "DevOps Engineer - SRE",
  description: "Portfolio website of Oussama Chaouachi",
  accentColor: "#1d4ed8",
  social: {
    email: "och.chaouachi@gmail.com",
    linkedin: "https://www.linkedin.com/in/oussama-chaouachi/",
    whatsapp: "tel:+21653408293",
    github: "https://github.com/oussamachaouachii",
  },
  aboutMe:
    "I have been growing with a big interest and hunger for the IT field since the first touch of a computer. I I am a DevSecOps engineer with a strong foundation in cybersecurity and network engineering, focused on integrating security throughout the software development lifecycle. My expertise includes automating secure processes, enhancing platform security. With a deep understanding of CI/CD pipelines, containerization, and automated security solutions, I am dedicated to building resilient and secure systems.",
  skills: ["CI/CD", "Automation", "Security monitoring and surveillance", "Backend Development", "Cloud", "Dockerization"],
  projects: [
    {
      name: "Malware Analysis on cloud",
      description:
        "Malware Analysis on cloud - Automating static and dynamic malware analysis to run on cloud - Generating a report containing the findings.",
      link: "",
      skills: ["Golang", "Docker", "Azure blobs", "Azure"],
    },
    {
      name: "SIEM - Security Information and Event Management",
      description:
        "Automating network configuration with Ansible and implementing a SIEM solution formonitoring logs and events.",
      link: "",
      skills: ["Ansible", "ELK", "Cisco", "SIEM", "Syslog", "Sysmon", "Wazuh", "Graylog", "MISP", "Grafana"],
    },
  ],
  experience: [
    {
      company: "Predisurge",
      title: "DevOps Engineer - Intern",
      dateRange: "April 2025 - September 2025",
      bullets: [
        "Improving automation and efficiency in simulation workflows.",
        "Implemented asynchronous CI pipelines to improve the handling of long and heavyprocesses.",
        "Helped integrate quality control and documentation processes.",
        "Binding c++ code to python to ensure interoperability.",
      ],
      skills: ["Bitbucket Pipelines", "Bash", "SonarCloud", "Doxygen", "CMake", "Systemd", "DVC", "S3", "ECR", "PyBind11"],

    },
    {
      company: "Speedykom Group",
      title: "DevSecOps Engineer - Working Student Position",
      dateRange: "April 2024 - Mars 2025",
      bullets: [
        "Worked on building secure E-Health platforms.",
        "Helped improve security and system monitoring.",
        "Implementation of security scans and monitoring tools.",
        "Solved infrastructure problems and supported system stability.",
        "Managed CI/CD processes to improve delivery quality."
      ],
      skills: ["SonarQube", "ClamAv", "Wazuh", "ELK", "Github Actions", "Keycloak", "Apache Airflow", "Apache Hop", "Django"],
    },
    {
      company: "Trustable",
      title: "Cyber Security Intern",
      dateRange: "July 2023 - August 2023",
      bullets: [
        "Development of a Dark Web Monitoring tool, Crawling-based System for theDetection of Data Breaches and Leaks.",
      ],
      skills: ["Python", "Selenium", "EC2", "ClickHouse DBMS", "Proxies"],
    },
    {
      company: "Pwn & Patch",
      title: "Security Software Developer",
      dateRange: "July 2022 - May 2023",
      bullets: [
        "Initially joining the company as an intern and subsequently transitioning into apart-time role.",
        "Backend development of Oktoboot Cyber Threat Intelligence Platform and Webscraping.",
      ],
      skills: ["Ruby On Rails", "Python", "MongoDB", "Linux"],
    },
  ],
  education: [
    {
      school: "INSAT - National Institute of Applied Sciences and Technology",
      degree: "ICT Engineering - DevSecOps Specialization",
      dateRange: "2020 - 2025",
      achievements: [
        "Expertise in protocols, security, bandwidth management, network virtualization, andsupervision. Possesses extensive experience working in various sectors such astelecommunications, IT, network security, and information technology consulting.",
      ],
    },
  ],
};
