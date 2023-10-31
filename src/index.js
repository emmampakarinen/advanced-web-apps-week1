import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

async function initializeCode() {

  let container = document.getElementById("container");
  let breedList = ["terrier/westhighland", 'labrador', 'terrier/scottish', 'retriever/golden', 'poodle/standard', 'corgi', 'terrier/norwich']
  let wikiList = ['West highland white terrier', 'Labrador', 'Scottish terrier', 'Golden retriever', 'Standard poodle', 'Corgi', 'Norwich terrier']

  for (let i in breedList) {
    let breed = breedList[i]
    let url1 = "https://dog.ceo/api/breed/" + breed +  "/images/random"
    let url2 = "https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(wikiList[i])


    let promise = await fetch(url1)
    let data = await promise.json()

    let wikiPromise = await fetch(url2)
    let wikiData = await wikiPromise.json()

    let dogUrl = data.message

    let item = document.createElement("div");
    item.classList.add("wiki-item");
    container.appendChild(item); 

    let header = document.createElement("h1");
    header.classList.add("wiki-header");


    header.innerText = wikiList[i];
    item.appendChild(header);

    let contentContainer = document.createElement("div");
    contentContainer.classList.add("wiki-content");
    item.appendChild(contentContainer);

    let content = document.createElement("p");
    content.classList.add("wiki-text");
    content.innerHTML = wikiData.extract;
    contentContainer.appendChild(content);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    contentContainer.appendChild(imgContainer);

    let img = document.createElement("img");
    img.src = dogUrl
    img.classList.add("wiki-img");
    imgContainer.appendChild(img);
  }
}
