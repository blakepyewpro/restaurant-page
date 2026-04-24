import friedEgg from "./assets/fried-egg.png";

export default function displayHomePage(parent) {
  parent.replaceChildren();

  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("id", "title");
  const egg1 = document.createElement("img");
  egg1.src = friedEgg;
  const egg2 = document.createElement("img");
  egg2.src = friedEgg;
  const header = document.createElement("h1");
  header.innerText = "Crazy Eggs!";
  titleDiv.appendChild(egg1);
  titleDiv.appendChild(header);
  titleDiv.appendChild(egg2);
  parent.appendChild(titleDiv);

  const aboutDiv = document.createElement("div");
  aboutDiv.id = "about";
  const aboutHeader = document.createElement("p");
  aboutHeader.classList.add("bold");
  aboutHeader.innerText = "Crazy Eggs are our passion...";
  const aboutText = document.createElement("p");
  aboutText.innerText = "Vestibulum varius quam dignissim elit dictum porta. Proin erat quam, sagittis sit amet commodo ut, hendrerit et tellus. Duis eu tincidunt odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Praesent id tellus justo.";
  aboutDiv.appendChild(aboutHeader);
  aboutDiv.appendChild(aboutText);
  parent.appendChild(aboutDiv);

  const hoursDiv = document.createElement("div");
  hoursDiv.id = "hours";
  const hoursHeader = document.createElement("p");
  hoursHeader.classList.add("bold");
  hoursHeader.textContent = "Hours";

  const hoursList = document.createElement("ul");
  const schedules = ["Sunday: 6am - 2pm", "Monday: 6am - 2pm",
    "Tuesday: 6am - 2pm", "Wednesday: Closed", "Thursday: Closed",
    "Friday: 6am - 6pm", "Saturday: 6am - Who Knows?"
  ]
  for (const schedule of schedules) {
    const listItem = document.createElement("li");
    listItem.innerText = schedule;
    hoursList.appendChild(listItem);
  }

  hoursDiv.append(hoursHeader, hoursList);
  parent.append(hoursDiv);

  const locDiv = document.createElement("div");
  locDiv.id = "location";
  const locHeader = document.createElement("p");
  locHeader.classList.add("bold");
  locHeader.innerText = "Come Visit Us!"
  locDiv.append(locHeader);
  const locBody = document.createElement("p");
  locBody.innerHTML = "123 Heuvo Street<br>Polloville, CK";
  locDiv.append(locBody);
  parent.append(locDiv);
}