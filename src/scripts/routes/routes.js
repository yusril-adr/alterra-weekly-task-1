import home from '../views/pages/home';
import summary from '../views/pages/summary';

const routes = {
  '/': home, // default page
  '/:id': summary,
};

export default routes;
