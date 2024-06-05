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
import lightGallery from "lightgallery";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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
                            onClick={() =>
                              link.pics
                                ? openGallery(link.pics, isDark)
                                : openUrlInNewTab(link.url)
                            }
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

function openGallery(images, isDark) {
  // Create the overlay for the blur effect
  const overlay = document.createElement("div");
  overlay.classList.add("blur-overlay");
  overlay.id = "blurOverlay";

  const galleryPopup = document.createElement("div");
  galleryPopup.classList.add("popup");
  galleryPopup.classList.add(isDark ? "dark" : "light");
  galleryPopup.id = "galleryPopup";

  const gallery = `
  <div id="gallery" class="horizontal-scroll">
  ${images
    .map(
      image => `
    <div class="gallery-item">
      <a>
        <img class="gallery-img" alt="test" src="${image.pic}" />
      </a>
      <div class="caption ${isDark ? "darkc" : "lightc"}">${image.caption}</div>
    </div>
  `
    )
    .join("")}
</div>
`;

  galleryPopup.innerHTML = gallery;

  document.body.appendChild(overlay);
  document.body.appendChild(galleryPopup);

  // Prevent scrolling on the body
  document.body.style.overflow = "hidden";

  const closeButton = document.getElementById("closeGalleryButton");
  // var popup = document.getElementById("close-btn");
  // popup.classList.add("show");

  // Trigger fade-in effect
  requestAnimationFrame(() => {
    overlay.classList.add("visible");
    galleryPopup.classList.add("visible");
    closeButton.classList.add("visible");
  });

  // Add event listener to overlay to close the gallery when clicked
  overlay.addEventListener("click", closeGallery);

  // Prevent clicks inside the galleryPopup from closing the gallery
  galleryPopup.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Add event listener for horizontal scrolling
  const galleryElement = document.getElementById("gallery");
  galleryElement.addEventListener("wheel", function (event) {
    if (event.deltaY !== 0) {
      galleryElement.scrollLeft += event.deltaY;
      event.preventDefault();
    }
  });

  // Add event listener for horizontal scrolling
  let isDown = false;
  let startX;
  let scrollLeft;

  galleryElement.addEventListener("mousedown", function (event) {
    isDown = true;
    startX = event.pageX - galleryElement.offsetLeft;
    scrollLeft = galleryElement.scrollLeft;
  });
  galleryElement.addEventListener("mouseleave", function () {
    isDown = false;
  });
  galleryElement.addEventListener("mouseup", function () {
    isDown = false;
  });
  galleryElement.addEventListener("mousemove", function (event) {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - galleryElement.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scrolling speed
    galleryElement.scrollLeft = scrollLeft - walk;
  });

  // Add tip popup
  var popup = document.getElementById("tip");
  popup.classList.add("show");
  setTimeout(function () {
    popup.classList.remove("show");
  }, 5000);
}

function closeGallery() {
  // FIXME: duplicated with close button code
  const overlay = document.getElementById("blurOverlay");
  const galleryPopup = document.getElementById("galleryPopup");
  const closeButton = document.getElementById("closeGalleryButton");
  if (overlay) {
    overlay.classList.remove("visible");
    overlay.addEventListener("transitionend", () => {
      if (overlay.parentElement) overlay.parentElement.removeChild(overlay);
      document.body.style.overflow = "";
    });
  }

  if (galleryPopup) {
    galleryPopup.classList.remove("visible");
    galleryPopup.addEventListener("transitionend", () => {
      if (galleryPopup.parentElement)
        galleryPopup.parentElement.removeChild(galleryPopup);
    });
  }

  if (closeButton) {
    closeButton.classList.remove("visible");
  }
}

export function CloseGalleryButton() {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <button
        onClick={closeGallery}
        id="closeGalleryButton"
        title="Close Gallery"
        className="close-btn-dark" // TODO: add different modes
      >
        {" "}
        Close Gallery
      </button>
      <div id="tip" className={isDark ? "tip-dark" : "tip-light"}>
        Scroll or drag to see more{" "}
        <i className="fas fa-angles-right arrow-icon"></i>
      </div>
    </div>
  );
}

export function StartupProject() {
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
