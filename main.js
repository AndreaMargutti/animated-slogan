const slogan = document.getElementById("slogan");
console.log(slogan);

let x = 0;
let y = 0;

slogan.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  console.log(x, y);
});
