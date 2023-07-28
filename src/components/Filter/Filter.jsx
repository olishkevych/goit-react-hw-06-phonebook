import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import setFilter from '../../redux/contactsReducer';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterInput = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.filter}
        placeholder="Search name..."
        onChange={onFilterInput}
        name="filter"
      ></input>
    </div>
  );
};
