var button = document.getElementById("btn");
var title = document.getElementById("title");
var activeTheme = "light";

function change_theme() {
  if (activeTheme == "dark") {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#121212";
    button.value = "Switch to Dark Theme";
    title.innerText = "JS Homework 2 (Light Mode)";
    activeTheme = "light";
  } else {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
    button.value = "Switch to Light Theme";
    title.innerText = "JS Homework 2 (Dark Mode)";
    activeTheme = "dark";
  }
}
button.addEventListener("click", change_theme);
