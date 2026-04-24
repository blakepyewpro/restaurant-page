import "./styles.css"
import displayHomePage from "./home.js";

const homeBtn = document.querySelector("button#home");
const menuBtn = document.querySelector("button#menu");
const contactBtn = document.querySelector("button#contact");
const displayArea = document.querySelector("div#content");

displayHomePage(displayArea);

homeBtn.addEventListener("click", () => {
  displayHomePage(displayArea);
});