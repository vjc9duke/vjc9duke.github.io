import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences, otherExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div>
        <Fade bottom duration={1000} distance="20px" fraction="0.05">
          <div id="internship">
            <div className="experience-container" id="internshipContainer">
              <div>
                <h1 className="experience-heading">Internships</h1>
                <div className="experience-cards-div">
                  {workExperiences.experience.map((card, i) => {
                    return (
                      <ExperienceCard
                        key={i}
                        isDark={isDark}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets,
                          mainSkills: card.mainSkills
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>{" "}
        </Fade>
        <Fade bottom duration={1000} distance="20px" fraction="0.05">
          <div id="otherExperience">
            <div className="experience-container" id="otherExperienceContainer">
              <div>
                <h1 className="experience-heading">Other Work Experience</h1>
                <div className="experience-cards-div">
                  {otherExperiences.experience.map((card, i) => {
                    return (
                      <ExperienceCard
                        key={i}
                        isDark={isDark}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets,
                          mainSkills: card.mainSkills
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
