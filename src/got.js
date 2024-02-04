const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class");

const HIDDEN = "hidden";

function showDetailsElement() {
    mainElement.classList.remove(HIDDEN);
}

function hideDetailsElement() {
    mainElement.classList.add(HIDDEN);
}

for (let i = 0; i < thumbnailsAnchors.length; i++) {
    thumbnailsAnchors[i].addEventListener("click", function() {
        detailsImage.src = thumbnailsAnchors[i].dataset.detailsImage;
        detailsTitle.innerHTML = thumbnailsAnchors[i].dataset.detailsTitle;
        showDetailsElement();
    });
}
document.querySelector("#hide-button").addEventListener("click", () => hideDetailsElement());