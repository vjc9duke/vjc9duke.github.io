import {React, useContext} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

let target = "skills";

export function GetSkillButton() {
  function ReturnEvent() {
    const targetDiv = document.getElementById(target); // Replace "yourTargetDivId" with the actual ID of your target div
    targetDiv.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
    document.getElementById("skillButton").style.visibility = "hidden";
  }

  return (
    <button onClick={ReturnEvent} id="skillButton" title="Go back">
      <i className="fas fa-chevron-left" aria-hidden="true"></i>
    </button>
  );
}

function configSkillButton(newTarget) {
  document.getElementById("skillButton").style.visibility = "visible";
  target = newTarget;
}

const scrollToTarget = (title, targetID, isDark) => {
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

  configSkillButton("skills-" + title);
};

const mapSkills = (title, skills, isDark) => {
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
                    title,
                    skills.targetID.map(id =>
                      id.toLowerCase().replace(/\s+/g, "-")
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
};

export function ProgLang() {
  const {isDark} = useContext(StyleContext);
  return mapSkills("languages", skillsSection.programmingLanguages, isDark);
}

export function Technology() {
  const {isDark} = useContext(StyleContext);
  return mapSkills("technologies", skillsSection.technologies, isDark);
}

export function Software() {
  const {isDark} = useContext(StyleContext);
  return mapSkills("software", skillsSection.software, isDark);
}

export function HandsOn() {
  const {isDark} = useContext(StyleContext);
  return mapSkills("hands-on", skillsSection.handson, isDark);
}
