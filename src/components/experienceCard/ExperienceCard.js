import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const GetSkillBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => {
          const parts = item.split(":");
          return (
            <li
              key={i}
              className={isDark ? "subTitle dark-mode-text" : "subTitle"}
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

  console.log(JSON.stringify(cardInfo));

  return (
    <div
      className={isDark ? "experience-card-dark" : "experience-card"}
      id={
        cardInfo.company.toLowerCase() === "duke university"
          ? cardInfo.role.toLowerCase().replace(/\s+/g, "-")
          : cardInfo.company.toLowerCase().replace(/\s+/g, "-")
      }
    >
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
        {cardInfo.mainSkills ? (
          <div className="main-skills">
            <h5
              className={
                isDark ? "card-skills-title-dark" : "card-skills-title"
              }
              style={{textAlign: "center", fontSize: "25px"}}
            >
              {"Main Skills"}
            </h5>
            <ul>
              <GetSkillBullets
                descBullets={cardInfo.mainSkills}
                isDark={isDark}
              />
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
