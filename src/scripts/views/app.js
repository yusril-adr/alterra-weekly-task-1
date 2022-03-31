import HeaderInitiator from '../utils/Header-Initiatior';
import LinkInitiator from '../utils/Link-Initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    header, content, courses,
  }) {
    this._header = header;
    this._content = content;
    this._courses = courses;

    this._initialAppShell();
  }

  async _initialAppShell() {
    HeaderInitiator.init({
      header: this._header,
      courses: this._courses,
    });
  }

  async renderPage() {
    await this._scrollToTop();

    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url] || routes['/'];
    this._content.innerHTML = await page.render();
    await page.afterRender(this._courses);

    LinkInitiator.init();
  }

  async _scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

export default App;
