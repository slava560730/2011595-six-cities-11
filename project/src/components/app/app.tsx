import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import {AppRoute, AuthorizationStatus} from '../../consts';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import PrivateRoute from '../../pages/private-route/private-route';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const { isOffersDataLoading } = useAppSelector((state) => state);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room} element={<Room/>} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
