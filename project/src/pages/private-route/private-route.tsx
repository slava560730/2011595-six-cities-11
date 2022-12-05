import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getAuthLoggedStatus } from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const isAuthLoggedStatus = useAppSelector(getAuthLoggedStatus);

  return isAuthLoggedStatus ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
