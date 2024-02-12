// Get references to the div elements using their IDs
const frontendDiv = document.getElementById("frontend");
const backendDiv = document.getElementById("backend");
const mysqlDiv = document.getElementById("mysql");

frontendDiv.addEventListener("click", () => {
    // Navigate to your Github page for frontend
    window.open("https://github.com/VladBagacean/CVWebsite/tree/main/Front-End", "_blank");
});

backendDiv.addEventListener("click", () => {
    // Navigate to your Github page for backend
    window.open("https://github.com/VladBagacean?tab=repositories", "_blank");
});

mysqlDiv.addEventListener("click", () => {
    // Navigate to your Github page for MySQL
    window.open("https://github.com/VladBagacean?tab=repositories", "_blank");
});

function openPostDialog() {
    document.getElementById("post-dialog").classList.remove("hidden");
}

function submitPost() {
    // Add logic to handle the submitted post
    alert("Post submitted!");
}