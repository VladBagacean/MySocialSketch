//GITHUB BUTTONS
// Get references to the div elements using their IDs
const frontendH2 = document.getElementById("frontend");
const backendH2 = document.getElementById("backend");
const mysqlH2 = document.getElementById("mysql");

frontendH2.addEventListener("click", () => {
  // Navigate to your Github page for frontend
  console.log("button clicked");
  window.open(
    "https://github.com/VladBagacean/CVWebsite/tree/main/Front-End",
    "_blank"
  );
});

backendH2.addEventListener("click", () => {
  // Navigate to your Github page for backend
  console.log("button clicked");
  window.open(
    "https://github.com/VladBagacean/CVWebsite/tree/main/Back-End",
    "_blank"
  );
});

mysqlH2.addEventListener("click", () => {
  // Navigate to your Github page for MySQL
  console.log("button clicked");
  window.open("https://github.com/VladBagacean?tab=repositories", "_blank");
});
