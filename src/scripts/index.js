import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Initiator
import App from './views/app';

// Data
import courses from './data/courses';

const app = new App({
  header: document.querySelector('header'),
  content: document.querySelector('main'),
  courses,
});

window.addEventListener('load', () => {
  app.renderPage();
});

window.addEventListener('popstate', () => {
  app.renderPage();
});
