import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

const scrollToTarget = targetID => {
  const targetDiv = document.getElementById(targetID);
  if (targetDiv) {
    // Scroll to the target div
    targetDiv.scrollIntoView({behavior: "smooth"});

    // Add the glowing class to apply the glow effect
    targetDiv.classList.add("glowing");

    // Remove the glowing class after 2 seconds
    setTimeout(function () {
      targetDiv.classList.remove("glowing");
    }, 2000);
  }
};

export function ProgLang() {
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
                    skills.targetID[0].toLowerCase().replace(/\s+/g, "-")
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
