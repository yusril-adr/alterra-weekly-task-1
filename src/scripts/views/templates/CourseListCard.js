import CourseItemCard from './CourseItemCard';

const CourseListCard = (courses) => {
  let template = '<div class="row">';
  courses.forEach((course, courseIdx) => {
    template += CourseItemCard(course, courseIdx);
  });
  template += '</div>';

  return template;
};

export default CourseListCard;
