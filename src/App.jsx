import { useState } from "react";
import NavBar from "./components/Layout/NavBar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import SearchBar from "./components/Projects/SearchBar.jsx";
import ProjectForm from "./components/Projects/ProjectForm.jsx";
import ProjectList from "./components/Projects/ProjectList.jsx";
import Footer from "./components/Layout/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  /*
   * PROJECTS STATE SHAPE:
   * We initialize the state with an array of objects.
   * Each object represents a project and must follow this exact structure:
   *
   * {
   *   id: string,          // Unique identifier for React keys (e.g., "1", "2")
   *   title: string,       // The name of the project
   *   description: string, // A short summary of the project
   *   image: string        // The URL to the project's cover image
   * }
   */
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-stack MERN application for a local bookstore.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&q=80",
    },
    {
      id: "2",
      title: "Weather Dashboard",
      description: "Real-time weather tracking using OpenWeather API.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&q=80",
    },
    {
      id: "3",
      title: "Aurora Brand Refresh",
      description:
        "A complete identity system for a modern wellness brand, including logo, typography, and digital guidelines.",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "4",
      title: "Mobile Banking App",
      description:
        "A user-centered mobile banking experience focused on quick transfers, clear spending insights, and accessibility.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "5",
      title: "Studio Analytics Dashboard",
      description:
        "A responsive analytics dashboard that helps creative teams track project performance and client engagement.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
  ]);

  /*
   * SEARCH STATE SHAPE:
   * We use a simple string to track what the user types.
   *
   * searchQuery: string
   */
  const [searchQuery, setSearchQuery] = useState("");

  /*
   * HANDLE ADD PROJECT:
   * This function is passed down to the ProjectForm component.
   * It receives a `newProject` object (shaped exactly like the state objects above).
   *
   * We use the functional update pattern: setProjects((prev) => [newProject, ...prev])
   * This ensures we don't lose data if the state updates asynchronously.
   * The spread operator (...) takes the previous projects and adds them to the new array,
   * while the new project is placed at the very front (index 0).
   */
  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [newProject, ...prevProjects]);
  };

  /*
   * FILTERING LOGIC:
   * This runs on every render. It checks the `searchQuery` against
   * the title and description of every project (case-insensitive).
   * If it matches, the project stays in the `filteredProjects` array.
   */
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Fixed Navbar (Layout domain) */}
      <NavBar />

      {/* The main wrapper with the light background */}
      <main className="bg-light" id="home">
        {/* Offcanvas Contact Menu (Contact domain) */}
        <Contact />

        {/* Hero Banner (Hero domain) */}
        <Hero />

        {/* PROJECTS SECTION (Projects domain) */}
        <section
          className="container pt-5 pb-5"
          id="projects"
          aria-label="Projects"
        >
          <section className="row" aria-label="Project search and results">
            {/* 
              LEFT COLUMN: STICKY TOOLS 
              We use `sticky-top` to keep the search bar and form 
              visually attached to the screen as the user scrolls down the project list.
              `top: "80px"` offsets it so it doesn't hide under the fixed Navbar.
            */}
            <aside className="col-md-4 mb-4" aria-label="Project tools">
              <section
                className="sticky-top"
                style={{ top: "80px", zIndex: 10 }}
              >
                {/* Search Bar Component */}
                <section className="mb-4" aria-label="Search projects">
                  <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                </section>

                {/* Form Component (Receives the handleAddProject callback) */}
                <ProjectForm onAddProject={handleAddProject} />
              </section>
            </aside>

            {/* 
              RIGHT COLUMN: PROJECT GRID 
              Receives the filtered array and maps it to individual ProjectCards.
            */}
            <section className="col-md-8" aria-label="Project list">
              <ProjectList projects={filteredProjects} />
            </section>
          </section>
        </section>
      </main>

      {/* Footer (Layout domain) */}
      <Footer />
    </>
  );
}

export default App;
