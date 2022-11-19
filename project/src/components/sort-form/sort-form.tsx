import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { SELECT_OPEN, SortType } from '../../consts';
import { sortOffersByType } from '../../store/action';

function SortForm(): JSX.Element {
  const currentSortType = useAppSelector((state) => state.currentSortType);
  const selectState = useAppSelector((state) => state.selectState);
  const offersByCity = useAppSelector((state) => state.offersByCity);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() =>
          dispatch(sortOffersByType(offersByCity, currentSortType || SortType.Popular,
            SELECT_OPEN))}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options places__options--custom', {
          'places__options--opened': selectState,
        })}
      >
        {Object.values(SortType).map((type) => (
          <li
            key={type}
            className={cn('places__option', { 'places__option--active': currentSortType === type })}
            onClick={() => {
              dispatch(sortOffersByType(offersByCity, type, !SELECT_OPEN));
            }}
            tabIndex={0}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortForm;
