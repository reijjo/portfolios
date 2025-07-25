"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MyProjects.css";
import { faClose, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";

const MyProjects = () => {
  const [section, setSection] = useState<string | null>(null);

  const toggleSection = (sectionName: string) => {
    if (section === sectionName) {
      setSection(null);
    } else {
      setSection(sectionName);
    }
  };

  console.log("section:", section);

  return (
    <section className="my-projects-section">
      <div className="my-projects-content">
        <div className="my-projects-info">
          <div className="my-projects-title">
            <div className="my-projects-intro-icon">
              <Image
                src="/assets/icons/fish.png"
                alt="Fish Icon"
                width={24}
                height={24}
              />
            </div>
            <h3>Tärpit</h3>
            <p>Sports bet tracking made simple</p>
          </div>
          <div className="my-project-stuff">
            <a className="stuff-what" onClick={() => toggleSection("what")}>
              <h4>What Is This?</h4>
              <button className="plus-button">
                {section === "what" ? (
                  <FontAwesomeIcon icon={faMinus} size="sm" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} size="sm" />
                )}
              </button>
            </a>
            {section === "what" && (
              <div className="open-section what-section">
                <button
                  className="close-section"
                  onClick={() => setSection(null)}
                >
                  <FontAwesomeIcon icon={faClose} size="lg" />
                </button>
                <div className="open-section-text">
                  <p>
                    Tärpit is a personal sports betting tracker designed to help
                    users easily log, organize, and analyze their bets.
                  </p>
                  <p>
                    Whether you're casually betting on your favorite team or
                    tracking performance over time, Tärpit provides a simple,
                    focused UI to keep everything in one place — without the
                    clutter of gambling platforms.
                  </p>
                  <p>
                    This is a fullstack web app I built from scratch to learn
                    production-ready development with authentication, REST APIs,
                    and persistent user data.
                  </p>
                </div>
              </div>
            )}
            <a className="stuff-making" onClick={() => toggleSection("making")}>
              <h4>Why I Built It?</h4>
              <button className="plus-button">
                {section === "making" ? (
                  <FontAwesomeIcon icon={faMinus} size="sm" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} size="sm" />
                )}
              </button>
            </a>
            {section === "making" && (
              <div className="open-section making-section">
                <button
                  className="close-section"
                  onClick={() => setSection(null)}
                >
                  <FontAwesomeIcon icon={faClose} size="lg" />
                </button>
                <div className="open-section-text">
                  <p>
                    I'm an on-and-off sports bettor, and I always found it
                    frustrating to track my bets — especially using Excel on my
                    phone.
                  </p>
                  <p>
                    I wanted something lightweight, fast, and mobile-friendly
                    that actually made it enjoyable to log and view my bets.
                  </p>
                  <p>
                    This project gave me the chance to solve a real problem I’ve
                    had for years, while also sharpening my skills in building a
                    fullstack web app with clean UX, authentication, and data
                    persistence.
                  </p>
                </div>
              </div>
            )}
            <a
              className="stuff-problems"
              onClick={() => toggleSection("problems")}
            >
              <h4>Challenges</h4>
              <button className="plus-button">
                {section === "problems" ? (
                  <FontAwesomeIcon icon={faMinus} size="sm" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} size="sm" />
                )}
              </button>
            </a>
            {section === "problems" && (
              <div className="open-section problems-section">
                <button
                  className="close-section"
                  onClick={() => setSection(null)}
                >
                  <FontAwesomeIcon icon={faClose} size="lg" />
                </button>
                <ul className="problems-list">
                  <li>
                    Designing a layout that works well on mobile without feeling
                    cramped
                  </li>
                  <li>
                    Validating bet data (like odds, amount, and outcomes) in a
                    flexible way
                  </li>
                  <li>
                    Creating secure user accounts with proper error handling
                  </li>
                  <li>
                    Structuring the backend to allow filtering, sorting, and
                    expanding features later
                  </li>
                  <li>
                    Handling API errors cleanly so users always know what’s
                    happening
                  </li>
                </ul>
              </div>
            )}
            <a className="stuff-tools" onClick={() => toggleSection("tools")}>
              <h4>Tech Stack</h4>
              <button className="plus-button">
                {section === "tools" ? (
                  <FontAwesomeIcon icon={faMinus} size="sm" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} size="sm" />
                )}
              </button>
            </a>
            {section === "tools" && (
              <div className="open-section tools-section">
                <button
                  className="close-section"
                  onClick={() => setSection(null)}
                >
                  <FontAwesomeIcon icon={faClose} size="lg" />
                </button>
                <div className="open-section-text">
                  <div className="frontend-stack">
                    <h4>Frontend</h4>
                    <p>React | TypeScript | CSS</p>
                  </div>
                  <div className="backend-stack">
                    <h4>Backend</h4>
                    <p>Bun | Express</p>
                  </div>
                  <div className="database-stack">
                    <h4>Database</h4>
                    <p>PostgreSQL | Sequelize</p>
                  </div>
                  <div className="devops-stack">
                    <h4>DevOps</h4>
                    <p>Docker | GitHub Actions</p>
                  </div>
                  <div className="other-stack">
                    <h4>Other Tools</h4>
                    <p>RestAPI | Redux | RTK Query</p>
                  </div>
                </div>
              </div>
            )}
            <a className="stuff-links" onClick={() => toggleSection("links")}>
              <h4>Links</h4>
              <button className="plus-button">
                {section === "links" ? (
                  <FontAwesomeIcon icon={faMinus} size="sm" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} size="sm" />
                )}
              </button>
            </a>
            {section === "links" && (
              <div className="open-section links-section">
                <button
                  className="close-section"
                  onClick={() => setSection(null)}
                >
                  <FontAwesomeIcon icon={faClose} size="lg" />
                </button>
                <div className="open-section-text links-section">
                  <div className="live-link">
                    <p>Try</p>
                    <a href="https://tarpit.pages.dev/" target="_blank">
                      <h4>Live App</h4>
                    </a>
                  </div>
                  <div className="github-link">
                    <p>Check</p>
                    <a href="https://github.com/reijjo/bet" target="_blank">
                      <h4>GitHub</h4>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="my-projects-images">
          <p>Here you can find a list of my projects.</p>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
