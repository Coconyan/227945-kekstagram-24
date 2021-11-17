import { getData, sendData } from './data.js';
import { getPictures } from './layout-generator.js';
import { showAlert } from './utils/show-alert.js';


getData((data) => {
  console.log(data);
  getPictures(data);
}, showAlert);

