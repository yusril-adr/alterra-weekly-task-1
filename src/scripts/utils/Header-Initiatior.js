import Template from '../views/templates';

const HeaderInitiator = {
  init({ header, courses }) {
    this._renderCollapseList(header, courses);
  },

  _renderCollapseList(header, courses) {
    const collapseElem = header.querySelector('#navbarNav ul');
    collapseElem.innerHTML = '';
    courses.forEach((course) => {
      collapseElem.innerHTML += Template.NavListCollapse(course);
    });
  },
};

export default HeaderInitiator;
