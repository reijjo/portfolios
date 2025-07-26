"use client";

import { Fragment } from "react";
import "./MyProjects.css";
import { projectInfo } from "../../../data/projects";

import ProjectItem from "./ProjectItem";

const MyProjects = () => {
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
