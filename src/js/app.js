import 'normalize.css/normalize.css';
import '../scss/styles.scss';
import { importImages } from './importImages'
importImages() // Import something from /src/js/importImages.js so webpack will put the images into /dist/img when building
import { initApp } from './Model/initApp'

// Initialize app
initApp()
