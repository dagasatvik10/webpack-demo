import _ from "lodash";
// import Print from "./print.js";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // element.onclick = Print.bind(null, "Hello webpack!");

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
