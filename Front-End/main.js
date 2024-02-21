const form = document.getElementById("form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
let posts = document.getElementById("posts");
//GITHUB BUTTONS
// Get references to the div elements using their IDs
const frontendH2 = document.getElementById("frontend");
const backendH2 = document.getElementById("backend");
const mysqlH2 = document.getElementById("mysql");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank!";
    console.log("failure");
  } else {
    msg.innerHTML = "";
    console.log("success");
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div>
  <p>${data.text}</p>
  <span class="options">
    <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
    <i onClick="deletePost(this)" class="fa-solid fa-trash"></i>
  </span>
</div>
`;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

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
