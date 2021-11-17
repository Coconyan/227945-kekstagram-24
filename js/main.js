import { getData, sendData } from './data.js';
import { getFullscreenImage } from './fullscreen.js';
import { getPictures } from './layout-generator.js';
import { showAlert } from './utils/show-alert.js';


getData((data) => {
  console.log(data);
  getPictures(data);
  getFullscreenImage(data);  
}, showAlert);

// const allPictures = document.querySelectorAll('.picture');
// console.log(allPictures);
// allPictures.forEach(picture => {
//   picture.addEventListener('click', (event) => {
//     console.log(event);
//   })
// });

