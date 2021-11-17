

const getPictures = (data) => {  
  data.forEach(element => {
    const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);
    const pictures = document.querySelector('.pictures');
    const pictureInfo = pictureTemplate.querySelector('.picture__info');
    const pictureImg = pictureTemplate.querySelector('img');
    const pictureComments = pictureInfo.querySelector('.picture__comments');
    const pictureLikes = pictureInfo.querySelector('.picture__likes');
    const pictureFragment = document.createDocumentFragment().appendChild(pictureTemplate);

    pictureImg.src = element.url;
    pictureComments.textContent = element.comments.length;
    pictureLikes.textContent = element.likes;
    pictureFragment.appendChild(pictureInfo);
    pictureFragment.appendChild(pictureImg);

    pictures.appendChild(pictureFragment);
  });
}

export { getPictures };