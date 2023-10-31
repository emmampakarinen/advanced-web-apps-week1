import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  //document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  let container = document.getElementById("container");
  for (let i = 0; i < 5; i++) {
    let item = document.createElement("div");
    item.classList.add("wiki-item");
    container.appendChild(item);

    let header = document.createElement("h1");
    header.classList.add("wiki-header");
    header.innerText = "Breed X";
    item.appendChild(header);

    let contentContainer = document.createElement("div");
    contentContainer.classList.add("wiki-content");
    item.appendChild(contentContainer);

    let content = document.createElement("p");
    content.classList.add("wiki-text");
    content.innerHTML = "Some text about this breed";
    contentContainer.appendChild(content);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    contentContainer.appendChild(imgContainer);

    let img = document.createElement("img");
    img.classList.add("wiki-img");
    imgContainer.appendChild(img);
  }
}
