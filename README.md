# portfolio-app

A modern, responsive Single Page Application (SPA) built with **React**, **Vite**, and **Bootstrap 5**. This platform allows a creative agency to showcase past projects, filter them dynamically, and add new work in real-time.

## Creative Portfolio Platform

A dynamic Single Page Application (SPA) built for a creative agency to showcase their work.
**Core Features:**

- **Dynamic Project Showcase:** Displays a responsive grid of past projects.
- **Live Search Filtering:** Instantly filters projects by title or description using React state.
- **Dynamic Form Handling:** Allows users to add new projects to the portfolio in real-time.
- **Modern Architecture:** Built with React, Vite, and Bootstrap 5 for a seamless user experience.

**Tech Stack:**

> React, Vite, Bootstrap, JavaScript (ES6+).

## Component Architecture (Hierarchy Tree)

The application follows **Domain-Driven Design (DDD)**. Components are grouped by their feature domain, and state is lifted to the highest necessary parent.

```text
App (State: projects[], searchQuery)
│
├── Layout/
│   ├── NavBar (Fixed Top Navigation)
│   └── Footer (Copyright info)
│
├── Contact/
│   └── Contact (Offcanvas Form)
│
├── Hero/
│   └── Hero (Marketing Banner)
│
└── Projects/ (Main Feature)
    ├── SearchBar (Props: searchQuery, setSearchQuery)
    ├── ProjectForm (Props: onAddProject)
    │   └── Form (Controlled inputs: title, description, image)
    │
    └── ProjectList (Props: projects)
        └── ProjectCard (Props: project)
            ├── Image
            ├── Title
            └── Description
```
