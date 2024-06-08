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

function preloadImages(imageUrls) {
  const loadPromises = imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(img); // Resolve with the image element
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    });
  });

  return Promise.all(loadPromises);
}

function openGallery(images, isDark) {
  // Create the overlay for the blur effect
  const overlay = document.createElement("div");
  overlay.classList.add("blur-overlay");
  overlay.id = "blurOverlay";

  const galleryPopup = document.createElement("div");
  galleryPopup.classList.add("popup");
  galleryPopup.classList.add(isDark ? "dark" : "light");
  galleryPopup.id = "galleryPopup";
  if (window.innerWidth <= 768) galleryPopup.classList.add("vertical-scroll");

  // Add overlay
  const loadIcon = document.getElementById("loadicon");
  document.body.style.overflow = "hidden";
  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.classList.add("visible");
    loadIcon.classList.add("show");
  });

  // Add event listener to overlay to close the gallery when clicked
  overlay.addEventListener("click", closeGallery);

  preloadImages(images.map(image => image.pic))
    .then(loadedImages => {
      const galleryHTML = `
      <div id="gallery" ${
        window.innerWidth > 768
          ? 'class="horizontal-scroll"'
          : "vertical-scroll"
      }>
      ${images
        .map(
          (image, index) => `
        <div class="gallery-item">
          <a>
            <img class="gallery-img" alt="${image.caption}" src="${
            loadedImages[index].src
          }" />
          </a>
          <div class="caption ${isDark ? "darkc" : "lightc"}">${
            image.caption
          }</div>
        </div>
      `
        )
        .join("")}
      </div>
    `;

      // Inject the gallery into the DOM
      galleryPopup.innerHTML = galleryHTML;
      document.body.appendChild(galleryPopup);

      applyGalleryScripts(galleryPopup, images);
    })
    .catch(error => {
      console.error("Error preloading images:", error);
    });
}

function applyGalleryScripts(galleryPopup, images) {
  const closeButton = document.getElementById("closeGalleryButton");
  const loadIcon = document.getElementById("loadicon");
  // var popup = document.getElementById("close-btn");
  // popup.classList.add("show");

  // Trigger fade-in effect
  requestAnimationFrame(() => {
    closeButton.classList.add("visible");
    loadIcon.classList.remove("show");
  });
  galleryPopup.classList.remove("fade-out");
  galleryPopup.classList.add("fade-in");

  // Prevent clicks inside the galleryPopup from closing the gallery
  galleryPopup.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Add event listener for horizontal scrolling
  const galleryElement = document.getElementById("gallery");
  galleryElement.addEventListener("wheel", function (event) {
    if (window.innerWidth > 768) {
      if (event.deltaY !== 0) {
        galleryElement.scrollLeft += event.deltaY;
        event.preventDefault();
      }
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
  if (images.length > 1) {
    var popup = document.getElementById("tip");
    popup.classList.add("show");
    setTimeout(function () {
      popup.classList.remove("show");
    }, 5000);
  }
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
    galleryPopup.classList.remove("fade-in");
    galleryPopup.classList.add("fade-out");
    galleryPopup.addEventListener("animationend", () => {
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
        {window.innerWidth > 768 ? (
          <div>
            Scroll or drag <i className="fas fa-angle-right arrow-icon"></i>
          </div>
        ) : (
          <div>
            Swipe down <i className="fas fa-angle-down arrow-icon"></i>
          </div>
        )}
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
