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
  // Scroll down for more if more than one target id
  if (targetID.length > 1) {
    var popup = document.getElementById("popup");
    popup.classList.add("show");
    setTimeout(function () {
      popup.classList.remove("show");
    }, 5000);
  }
};

const mapSkills = (skills, isDark) => {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
                onClick={() =>
                  scrollToTarget(
                    skills.targetID.map(id =>
                      id.toLocaleLowerCase().replace(/\s+/g, "-")
                    ),
                    isDark
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

export function ProgLang() {
  const {isDark} = useContext(StyleContext);
  return mapSkills(skillsSection.programmingLanguages, isDark);
}

export function Technology() {
  const {isDark} = useContext(StyleContext);
  return mapSkills(skillsSection.technologies, isDark);
}

export function Software() {
  const {isDark} = useContext(StyleContext);
  return mapSkills(skillsSection.software, isDark);
}

export function HandsOn() {
  const {isDark} = useContext(StyleContext);
  return mapSkills(skillsSection.handson, isDark);
}
