import { useAppSelector } from '../../hooks';
import { getServerError } from '../../store/app-data/selectors';
import './loading-style.css';

function LoadingScreen(): JSX.Element {
  const isServerError = useAppSelector(getServerError);

  return (
    <>
      <div className="pos-center">
        <div className="loader"></div>
      </div>
      <section
        className="404-wrapper"
        style={{ textAlign: 'center', marginTop: '6em', width: '100%' }}
      >
        {isServerError ? <h1 style={{ fontSize: '3em' }}>The server is unavailable</h1> : ''}
      </section>
    </>
  );
}

export default LoadingScreen;
