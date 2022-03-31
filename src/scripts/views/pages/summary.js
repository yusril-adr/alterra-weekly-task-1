import UrlParser from '../../routes/url-parser';
import Template from '../templates';

const summary = {
  async render() {
    return (`
      <section id="summary-page" class="container"></section>
    `);
  },

  // eslint-disable-next-line consistent-return
  async afterRender(courses = []) {
    const courseId = UrlParser.parseActiveUrlWithoutCombiner().id;
    const course = courses.find(({ id }) => id === courseId);

    if (!course) {
      return 'Not Found';
    }

    const courseIdx = courses.findIndex(({ id }) => id === courseId);

    const container = document.querySelector('#summary-page');
    container.innerHTML = Template.CourseDetailCard(course, courseIdx);
  },
};

export default summary;
