const getFullscreenImage = (data) => {
  const allPictures = document.querySelectorAll('.picture');
  console.log(allPictures);
  allPictures.forEach(picture => {
  picture.addEventListener('click', (event) => {
    const parentElement = event.target.parentElement;
    if (parentElement.classList.contains('picture__info')) {
      const imageSrc = parentElement.parentElement.querySelector('img').src;
    } else {
      const imageSrc = parentElement.querySelector('img').src;
    }
    const idFromSrc = imageSrc.slice(-6).match(/\d+/)[0];
    console.log(idFromSrc);
    })
  });
}

export { getFullscreenImage }