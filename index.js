const button = document.querySelector(".share_button");
const socials = document.querySelector(".socials_contact");
const svg_share = document.querySelector(".share_button > svg > path");

// transition time for hide/show social icons
const transitionTime = ".3s";

// eventlistener for button
button.addEventListener("click", () => {
  socials.style.transitionDuration = transitionTime;
  socials.style.opacity = "1";
  socials.style.visibility = "visible";
  button.style.transitionDuration = transitionTime;
  button.style.backgroundColor = "hsl(214, 17%, 51%)";
  svg_share.transitionDuration = transitionTime;
  svg_share.style.fill = "white";
});

// eventlistener to remove social icons when clicked outside
document.addEventListener("click", (event) => {
  if (!button.contains(event.target) && !socials.contains(event.target)) {
    socials.style.visibility = "hidden";
    socials.style.transitionDuration = transitionTime;
    socials.style.opacity = "0";
    button.style.transitionDuration = transitionTime;
    button.style.backgroundColor = "hsl(210, 46%, 95%)";
    svg_share.transitionDuration = transitionTime;
    svg_share.style.fill = "#6E8098";
  }
});
