import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute } from '../../consts';
import { Helmet } from 'react-helmet-async';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities: 404 error</title>
      </Helmet>
      <Header />
      <section
        className="404-wrapper"
        style={{ textAlign: 'center', marginTop: '6em', width: '100%' }}
      >
        <h1 style={{ fontSize: '4em' }}>404. Page not found</h1>
        <Link to={AppRoute.Main}>Вернуться на главную</Link>
      </section>
    </>
  );
}

export default NotFoundScreen;
