import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add("icon");

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
