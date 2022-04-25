import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>ERROR 404</h1>
      <h4>not found</h4>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;
