let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");
let thumbnailsAnchors = document.querySelectorAll(".thumbnails-anchor");

function setDetails(anchor) {
    detailsImage.src = anchor.dataset.detailsImage;
    detailsTitle.innerHTML = anchor.dataset.detailsTitle;
}

for(let i = 0; i < thumbnailsAnchors.length; i++) {
    thumbnailsAnchors[i].addEventListener("click", function() {
        setDetails(thumbnailsAnchors[i]);
    });
}