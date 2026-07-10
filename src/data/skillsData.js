import {
  FaJava,
  FaJs,
  FaPython,
  FaDatabase,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaDocker,
  FaJenkins,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiHibernate,
  SiPostman,
  SiIntellijidea,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiKubernetes,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { MdArchitecture } from "react-icons/md";

export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    skills: [
      { name: "Java", icon: FaJava, level: 85 },
      { name: "JavaScript", icon: FaJs, level: 80 },
      { name: "Python", icon: FaPython, level: 75 },
      { name: "SQL", icon: FaDatabase, level: 80 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, level: 80 },
      { name: "HTML5", icon: FaHtml5, level: 90 },
      { name: "CSS3", icon: FaCss3Alt, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 80 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, level: 82 },
      { name: "Spring MVC", icon: SiSpringboot, level: 78 },
      { name: "Hibernate", icon: SiHibernate, level: 75 },
      { name: "REST APIs", icon: TbApi, level: 85 },
      { name: "Microservices", icon: MdArchitecture, level: 70 },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql, level: 82 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 72 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaAws, level: 65 },
      { name: "Docker", icon: FaDocker, level: 68 },
      { name: "Jenkins", icon: FaJenkins, level: 60 },
      { name: "Git", icon: FaGitAlt, level: 85 },
      { name: "GitHub", icon: FaGithub, level: 85 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Postman", icon: SiPostman, level: 80 },
      { name: "VS Code", icon: VscVscode, level: 90 },
      { name: "IntelliJ IDEA", icon: SiIntellijidea, level: 80 },
    ],
  },
  {
    id: "learning",
    title: "Learning",
    skills: [
      { name: "Artificial Intelligence", icon: GiBrain, level: 40 },
      { name: "Machine Learning", icon: GiBrain, level: 45 },
      { name: "System Design", icon: MdArchitecture, level: 50 },
      { name: "Kubernetes", icon: SiKubernetes, level: 35 },
    ],
  },
];

export const learningTech = [
  { name: "Artificial Intelligence", icon: GiBrain },
  { name: "Machine Learning", icon: GiBrain },
  { name: "Cloud", icon: FaAws },
  { name: "System Design", icon: MdArchitecture },
  { name: "Kubernetes", icon: SiKubernetes },
];
