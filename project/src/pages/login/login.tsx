import HeaderLeft from '../../components/header-left/header-left';
import { Helmet } from 'react-helmet-async';
import { loginAction } from '../../store/api-actions';
import React, { FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import { redirectToRoute } from '../../store/action';
import { AppRoute, CITIES, MAIN_CITY } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { changeSelectedCity } from '../../store/app-process/app-process';
import { arrayRandElement } from '../../utils';

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const randomCity = arrayRandElement(CITIES);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const passwordRule = /^(?=.*\d)(?=.*[A-Za-z]).{2,}$/;

    if (
      loginRef.current !== null &&
      passwordRef.current !== null &&
      passwordRef.current.value.match(passwordRule)
    ) {
      dispatch(changeSelectedCity(MAIN_CITY));
      store.dispatch(
        loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value.trim(),
        })
      );
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLeft />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to="/"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  dispatch(redirectToRoute(AppRoute.Main));
                  dispatch(changeSelectedCity(randomCity));
                }}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default Login;
