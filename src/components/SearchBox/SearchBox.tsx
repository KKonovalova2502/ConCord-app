import style from './SearchBox.module.css';
import {
  changeFilterByName,
  changeFilterByNumber,
} from '../../redux/filters/slice';
import {
  selectNameFilter,
  selectNumberFilter,
} from '../../redux/filters/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const SearchBox = () => {
  const dispatch = useAppDispatch();
  const filterByName = useAppSelector(selectNameFilter);
  const filterByNumber = useAppSelector(selectNumberFilter);

  const handleFilterChangeByName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilterByName(e.target.value));
  };

  const handleFilterChangeByNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilterByNumber(e.target.value));
  };

  return (
    <div className={style.container}>
      <p className={style.text}>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={filterByName}
        onChange={handleFilterChangeByName}
      ></input>

      <p className={style.text}>Find contacts by number</p>
      <input
        className={style.input}
        type="text"
        value={filterByNumber}
        onChange={handleFilterChangeByNumber}
      ></input>
    </div>
  );
};

export default SearchBox;
