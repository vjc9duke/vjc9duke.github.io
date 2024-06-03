import React, {useContext} from "react";
import "./StartupProjects.scss";
import {
  bigProjects,
  multiDiscProjects,
  softwareProjects,
  mechProjects
} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const GetDescBullets = ({descBullets, isDark}) => {
  return descBullets
    ? descBullets.map((item, i) => {
        const parts = item.split(":");
        return (
          <li
            key={i}
            className={
              isDark ? "dark-mode card-skills-subtitle" : "card-skills-subtitle"
            }
          >
            <span className={isDark ? "skill-color-dark" : "skill-color"}>
              {parts[0]}
            </span>
            {parts[1] ? `:${parts[1]}` : ""}
          </li>
        );
      })
    : null;
};

const GetProjectsDiv = ({projects}) => {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{projects.title}</h1>
        <p
          className={
            isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"
          }
        >
          {projects.subtitle}
        </p>

        <div className="projects-container">
          {projects.projects.map((project, i) => {
            return (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
                id={project.projectName.toLowerCase().replace(/\s+/g, "-")}
              >
                <span></span>
                {project.image ? (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    ></img>
                  </div>
                ) : null}
                <div className="project-detail">
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {project.projectName}
                  </h5>
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {project.projectDesc}
                  </p>
                  {project.mainSkills ? (
                    <div className="main-skills">
                      <h5
                        className={
                          isDark
                            ? "card-skills-title-dark"
                            : "card-skills-title"
                        }
                      >
                        {"Main Skills"}
                      </h5>
                      <ul>
                        <GetDescBullets
                          descBullets={project.mainSkills}
                          isDark={isDark}
                        />
                      </ul>
                    </div>
                  ) : null}
                  {project.footerLink ? (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, i) => {
                        return (
                          <span
                            key={i}
                            className={
                              isDark ? "dark-mode project-tag" : "project-tag"
                            }
                            // onClick={() => link.pics ? openGallery(link.pics) : openUrlInNewTab(link.url)}
                            onClick={() => openGallery(link.pics)}
                          >
                            {link.name}
                          </span>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function test() {
  const redSquare = document.createElement('div');
        
  // Add the 'red-square' class to the new div
  redSquare.classList.add('red-square');
  
  // Append the new div to the body
  document.body.appendChild(redSquare);
}


function openGallery(images) {
    const galleryHTML = `
        <div id="galleryOverlay">
            <div id="galleryContainer">
                ${images.map(src => `
                    <img src="${src}" class="galleryImage" />
                `).join('')}
                <button id="closeGalleryButton">Close</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', galleryHTML);

    document.getElementById('closeGalleryButton').onclick = () => {
        document.getElementById('galleryOverlay').remove();
    };

}

export default function StartupProject() {
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px" fraction="0.05">
      <GetProjectsDiv projects={bigProjects} />
      <GetProjectsDiv projects={multiDiscProjects} />
      <GetProjectsDiv projects={softwareProjects} />
      <GetProjectsDiv projects={mechProjects} />
    </Fade>
  );
}
