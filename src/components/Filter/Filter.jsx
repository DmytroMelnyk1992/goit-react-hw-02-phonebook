import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onChange }) => {
  return (
    <label htmlFor="filter">
      <h2 className={css.title}>Find contacts by name</h2>
      <div className={css.input}>
        <input onChange={onChange} type="filter" name="filter" />
      </div>
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
