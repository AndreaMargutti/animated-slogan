const slogan = document.getElementById("slogan");

const titles = slogan.getElementsByTagName("h1");

const coordinatesText = document.querySelector("#coordinates p");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  coordinatesText.innerText = `X: ${x} Y: ${y}`;

  for (let i = 0; i < titles.length; i++) {
    titles[i].style.setProperty("--x", `${x}px`);
    titles[i].style.setProperty("--y", `${y}px`);
  }
});
