import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction, logoutAction } from '../../store/api-actions';
import React, { useEffect } from 'react';
import { AppRoute } from '../../consts';
import { getAvatarUrl, getUserEmail } from '../../store/user-process/selectors';
import { getFavoriteOffersCount, getPostFavoriteStateStatus } from '../../store/app-data/selectors';

function HeaderAuth(): JSX.Element {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getUserEmail);
  const avatarUrl = useAppSelector(getAvatarUrl);
  const favoriteOffersCount = useAppSelector(getFavoriteOffersCount);
  const postFavoriteStateStatus = useAppSelector(getPostFavoriteStateStatus);

  useEffect(() => {
    if (!postFavoriteStateStatus) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [postFavoriteStateStatus]);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link headerhg__nav-link--profile" to={AppRoute.Favorites}>
            <div
              className="header__avatar-wrapper user__avatar-wrapper"
              style={{ backgroundImage: `url("${avatarUrl}")`, borderRadius: '50%' }}
            />
            <span className="header__user-name user__name">{userEmail}</span>
            <span className="header__favorite-count">{favoriteOffersCount}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            to={AppRoute.Main}
            onClick={() => {
              dispatch(logoutAction());
            }}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderAuth;
