import Template from '../templates';

const home = {
  async render() {
    return '<section id="home-page" class="container"></section>';
  },

  async afterRender(courses = []) {
    const container = document.querySelector('#home-page');
    container.innerHTML = Template.CourseListCard(courses);
  },
};

export default home;
