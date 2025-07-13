const darkInput = document.getElementById("dark");
const lightInput = document.getElementById("light");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  lightInput.checked = true;
} else {
  darkInput.checked = true;
}

darkInput.addEventListener("change", () => {
  if (darkInput.checked) {
    localStorage.setItem("theme", "dark");
  }
});

lightInput.addEventListener("change", () => {
  if (lightInput.checked) {
    localStorage.setItem("theme", "light");
  }
});
