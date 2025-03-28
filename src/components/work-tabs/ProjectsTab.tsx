import ProjectCard from '../project-card/ProjectCard';
import { projects } from '../../constants/WorkPageConstants';

export default function ProjectsTab() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
} 