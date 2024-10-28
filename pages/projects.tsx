// pages/projects.tsx
import Layout from '../components/Layout';

const projects = [
  { title: 'Project 1', description: 'Description of project 1', link: '#' },
  { title: 'Project 2', description: 'Description of project 2', link: '#' },
  // Add more projects
];

const Projects: React.FC = () => (
  <Layout title="Projects - My Portfolio">
    <h1>Projects</h1>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </li>
      ))}
    </ul>
  </Layout>
);

export default Projects;
