import ProjectCard from "./ProjectCard.jsx";

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="text-center text-muted py-4">No projects found.</p>;
  }
  return (
    <div className="row g-4">
      {projects.map((project) => (
        <div className="col-md-6 mb-4" key={project.id}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}