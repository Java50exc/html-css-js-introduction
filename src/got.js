const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class");
const detailsContainerElement = document.querySelector(".details-container");

const HIDDEN = "hidden";
const IS_POINT = "is-point";

function showDetailsElement() {
    mainElement.classList.remove(HIDDEN);
    detailsContainerElement.classList.add(IS_POINT);

    setTimeout(function() {
        detailsContainerElement.classList.remove(IS_POINT);
    });
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