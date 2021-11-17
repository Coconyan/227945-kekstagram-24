import { getData, sendData } from './data.js';
import { showAlert } from './utils/show-alert.js';

getData((data) => {
  console.log(data)
}, showAlert);