import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  return (
    <label htmlFor="filter">
      <h2>Find contacts by name</h2>
      <input onChange={onChange} type="filter" name="filter" />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
