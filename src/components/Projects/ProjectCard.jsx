export default function ProjectCard({ project }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={project.image}
        className="card-img-top"
        alt={project.title}
        /** 200px height and objectFit: cover to ensure the image covers the entire card height. */
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text text-muted flex-grow-1">
          {project.description}
        </p>
      </div>
    </div>
  );
}
