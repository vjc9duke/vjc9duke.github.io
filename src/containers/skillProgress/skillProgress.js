import React, {useContext} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage,
                backgroundColor: (() => {
                  if (parseInt(exp.progressPercentage, 10) < 25) {
                    return "#fe797b";
                  } else if (parseInt(exp.progressPercentage, 10) < 70) {
                    return "#ffb750";
                  } else if (parseInt(exp.progressPercentage, 10) < 85) {
                    return "#8fe968";
                  } else {
                    return "#36CEDC";
                  }
                })()
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
            <p>&nbsp;</p>
            <div className={isDark ? "info-box-dark" : "info-box-light"}>
              <pre>
                <i class="fa-solid fa-circle-info"></i>
                {"  "}
                <i
                  class="fa-solid fa-circle small-space"
                  style={{color: "#36CEDC"}}
                ></i>
                Expert{"  "}
                <i
                  class="fa-solid fa-circle small-space"
                  style={{color: "#8fe968"}}
                ></i>
                Advanced{"  "}
                <i
                  class="fa-solid fa-circle small-space"
                  style={{color: "#ffb750"}}
                ></i>
                Intermediate{"  "}
                <i
                  class="fa-solid fa-circle small-space"
                  style={{color: "#fe797b"}}
                ></i>
                Beginner
              </pre>
            </div>
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
