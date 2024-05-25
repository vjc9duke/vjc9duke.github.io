import {React, useContext} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const scrollToTarget = (targetID, isDark) => {
  const targetDiv = document.getElementById(targetID[0]);
  if (targetDiv) {
    // Scroll to the target div
    targetDiv.scrollIntoView({behavior: "smooth"});
  }
  targetID.forEach(function (id) {
    const div = document.getElementById(id);
    if (div) {
      const glowingClass = isDark ? "glowing-dark" : "glowing-light";
      div.classList.add(glowingClass);

      // Remove the glowing class after 2 seconds
      setTimeout(function () {
        div.classList.remove(glowingClass);
      }, 10000);
    }
  });
};

export function ProgLang() {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.programmingLanguages.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
                onClick={() =>
                  scrollToTarget(
                    skills.targetID.map(id =>
                      id.toLocaleLowerCase().replace(/\s+/g, "-")
                    ), isDark
                  )
                }
                style={{cursor: "pointer"}}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function Technology() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.technologies.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function Software() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.software.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function HandsOn() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.handson.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
