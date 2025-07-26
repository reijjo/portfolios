"use client";

import { Fragment } from "react";
import "./MyProjects.css";

import ProjectItem from "./ProjectItem";

const MyProjects = () => {
  const projectInfo = [
    {
      id: "tarpit",
      logo: "/assets/icons/fish.png",
      title: "Tärpit",
      description: "Sports bet tracking made simple",
      whatIs: [
        "Tärpit is a personal sports betting tracker designed to help users easily log, organize, and analyze their bets.",
        "Whether you're casually betting on your favorite team or tracking performance over time, Tärpit provides a simple, focused UI to keep everything in one place — without the clutter of gambling platforms.",
        "This is a fullstack web app I built from scratch to learn production-ready development with authentication, REST APIs, and persistent user data.",
      ],
      why: [
        "I'm an on-and-off sports bettor, and I always found it frustrating to track my bets — especially using Excel on my phone.",
        "I wanted something lightweight, fast, and mobile-friendly that actually made it enjoyable to log and view my bets.",
        "This project gave me the chance to solve a real problem I’ve had for years, while also sharpening my skills in building a fullstack web app with clean UX, authentication, and data persistence.",
      ],
      challenges: [
        "Designing a layout that works well on mobile without feeling cramped",
        "Validating bet data (like odds, amount, and outcomes) in a flexible way",
        "Creating secure user accounts with proper error handling",
        "Structuring the backend to allow filtering, sorting, and expanding features later",
        "Handling API errors cleanly so users always know what’s happening",
      ],
      stack: {
        frontend: "React | TypeScript | CSS",
        backend: "Bun | Express",
        database: "PostgreSQL | Sequelize",
        devops: "Docker | GitHub Actions",
        other: "RestAPI | Redux | RTK Query",
      },
      links: {
        github: "https://github.com/reijjo/bet",
        live: "https://tarpit.pages.dev/",
      },
      images: { desktop: [], mobile: [] },
    },
  ];

  return (
    <>
      {projectInfo.map((project) => (
        <Fragment key={project.id}>
          <ProjectItem {...project} />
          <div className="projects-divider"></div>
        </Fragment>
      ))}
    </>
  );
};

export default MyProjects;
