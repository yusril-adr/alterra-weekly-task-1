/* eslint-disable no-param-reassign */
const renderLearnedPoints = (element, course) => {
  course.learnedPoints.forEach(({ title, description }, pointIdx) => {
    element.innerHTML += `
      <p class="card-text"><strong>${pointIdx + 1}. ${title}</strong></p>
      <p>${description}</p>
    `;
  });
};

const renderTasks = (element, course) => {
  element.innerHTML += '<p class="card-title h5">Task</p>';
  course.tasks.forEach(({ title, description }, taskIdx) => {
    element.innerHTML += `
      <p class="card-text"><strong>${taskIdx + 1}. ${title}</strong></p>
      <p>${description}</p>
    `;
  });
};

const renderLinks = (element, course) => {
  element.innerHTML += '<p class="card-title h5">Link : </p>';
  course.links.forEach(({ name, url }) => {
    element.innerHTML += `
      <p class="card-text">
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          ${name}
        </a>
      </p>
    `;
  });
};

const renderScreenshots = (element, course) => {
  if (course.screenshots.length < 1) {
    return;
  }

  element.innerHTML += '<p class="card-title h5">Screenshots : </p>';
  course.screenshots.forEach((img) => {
    element.innerHTML += `
      <img src="${img}" class="w-100" />
    `;
  });
};

const CardDetailCard = (course, courseIdx) => {
  // Create container VDOM
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        Materi ke-${courseIdx + 1}
      </div>
      <div class="card-body">
        <p class="card-title h5 mb-3">${course.name}</p>
      </div>
    </div>
  `;

  const cardBody = container.querySelector('.card-body');

  renderLearnedPoints(cardBody, course);
  renderTasks(cardBody, course);
  renderLinks(cardBody, course);
  renderScreenshots(cardBody, course);

  cardBody.innerHTML += '<a href="/" class="link btn btn-primary mt-4">Kembali</a>';

  // Clean container VDOM
  const result = container.innerHTML;
  document.body.appendChild(container);
  document.body.removeChild(container);
  return result;
};

export default CardDetailCard;
