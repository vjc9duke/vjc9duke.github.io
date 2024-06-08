import "./LoadIcon.scss";
import StyleContext from "../../contexts/StyleContext";
import React, {useContext} from "react";

export default function GetLoadIcon() {
  const {isDark} = useContext(StyleContext);
  return (
    <div
      id="loadicon"
      class={"load-icon" + (isDark ? " dark-load" : " light-load")}
    >
      <div>Images Loading</div>
    </div>
  );
}
