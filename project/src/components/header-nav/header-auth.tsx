import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import React from 'react';
import { AppRoute } from '../../consts';
import { getAvatarUrl, getUserEmail } from '../../store/user-process/selectors';

function HeaderAuth(): JSX.Element {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getUserEmail);
  const avatarUrl = useAppSelector(getAvatarUrl);

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
            <span className="header__favorite-count">3</span>
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
