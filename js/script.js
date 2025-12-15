function shuffleImages() {
  const imageContainer = document.getElementById("imageContainer");
  const images = imageContainer.getElementsByTagName("img");
  const imageCount = images.length;

  // Generate two random indices
  let index1 = Math.floor(Math.random() * imageCount);
  let index2 = Math.floor(Math.random() * imageCount);

  // Ensure the indices are different
  while (index2 === index1) {
    index2 = Math.floor(Math.random() * imageCount);
  }

  // Get the two images to swap
  const image1 = images[index1];
  const image2 = images[index2];

  // Fade out the images
  image1.style.opacity = 0;
  image2.style.opacity = 0;

  // Swap the source attributes after a delay
  setTimeout(() => {
    const tempSrc = image1.src;
    const tempAlt = image1.alt;
    image1.src = image2.src;
    image2.src = tempSrc;
    image1.alt = image2.alt;
    image2.alt = tempAlt;

    // Fade in the images
    image1.style.opacity = 1;
    image2.style.opacity = 1;
  }, 1618); // Adjust the delay time as needed
}

// Call the shuffleImages function at a specified time interval
setInterval(shuffleImages, 4236); // Adjust the interval time as needed
