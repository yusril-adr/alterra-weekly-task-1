const CourseItemCard = ({ name, id }, courseIdx) => (`
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card mb-4">
      <img src="./images/placeholder.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Materi ke-${courseIdx + 1}</p>
        <a href="/${id}" class="link btn btn-primary">Detail</a>
      </div>
    </div>
  </div>
`);

export default CourseItemCard;
