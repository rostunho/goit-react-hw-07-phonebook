import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction } from '../../redux/contacts/contacts-actions';
import { FilterBox, FilterInput } from './Filter.styled';

function Filter({ placeholder }) {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  function handleFilter(event) {
    const { value } = event.target;
    dispatch(filterAction(value));
  }

  return (
    <FilterBox>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder={placeholder}
      />
    </FilterBox>
  );
}

Filter.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Filter;
