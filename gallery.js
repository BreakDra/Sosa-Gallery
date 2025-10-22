function upDate(previewPic) {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
  imageDiv.style.backgroundSize = "cover";
  imageDiv.style.backgroundRepeat = "no-repeat";
  imageDiv.style.backgroundPosition = "center"; // <-- This centers the image
  imageDiv.style.color = "transparent";
  imageDiv.innerHTML = previewPic.alt;
}


function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "none";
  imageDiv.style.color = "black";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
