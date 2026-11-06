import { useState } from "react";

export default function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const { title, description, image } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const newProject = {
      // crypto.randomUUID() generates a strict, unique string ID (e.g., "3b241101-e2bb-4255-8caf-4136c566a962")
      id: crypto.randomUUID(),
      title,
      description,
      image:
        image ||
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
    };

    onAddProject(newProject);

    // Clear form
    setFormData({ title: "", description: "", image: "" });
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="h5 mb-3">Add New Project</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              id="project-title"
              name="title"
              aria-label="Project Title"
              className="form-control"
              placeholder="Project Title"
              value={title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <textarea
              id="project-description"
              name="description"
              aria-label="Project Description"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <input
              type="url"
              id="project-image"
              name="image"
              aria-label="Image URL"
              className="form-control"
              placeholder="Image URL (optional)"
              value={image}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
}
