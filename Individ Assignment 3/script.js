function showEnlarged(image){
    let enlarged = document.getElementById("enlarged");
    let enlargedImg = document.getElementById("enlarged-img");
    let enlargedText = document.getElementById("enlarged-text");

    enlargedImg.src = image.src;
    enlargedText.textContent = image.getAttribute("data-desc");
    enlarged.style.display = "flex";
}

function closeEnlarged(event) {
    let enlarged = document.getElementById("enlarged");
    let enlargedImg = document.getElementById("enlarged-img");
    let enlargedText = document.getElementById("enlarged-text");

    
    if (event.target !== enlargedImg && event.target !== enlargedText) {
        enlarged.style.display = "none";
    }
}