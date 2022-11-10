import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import { AppRoute, AuthorizationStatus } from '../../consts';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import PrivateRoute from '../../pages/private-route/private-route';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { HelmetProvider } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

type AppProps = {
  placeCardCount: number;
  reviews: Review[];
  offers: Offer[];
};

function App({ placeCardCount, offers, reviews }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main placeCardCount={placeCardCount} offers={offers} />}
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites offers={offers} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room} element={<Room offers={offers} reviews={reviews} />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
