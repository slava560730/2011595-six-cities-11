import {Route, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import { AppRoute } from '../../consts';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import PrivateRoute from '../../pages/private-route/private-route';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthCheckedStatus } from '../../store/user-process/selectors';
import { getOffersDataLoadingState } from '../../store/app-data/selectors';
import { useEffect } from 'react';
import { fetchOffersAction } from '../../store/api-actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingState);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, []);

  if (!isAuthChecked || isOffersDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter basename={"/"} history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room} element={<Room />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
