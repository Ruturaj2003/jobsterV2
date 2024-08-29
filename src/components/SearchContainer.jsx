import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/SearchContainer';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice';
import { useMemo, useState } from 'react';

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(
      handleChange({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  const debounce = () => {
    let timeoutId;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1347);
    };
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch('');
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>Search Form</h4>
        <div className="form-center">
          {/* Search Position*/}
          <FormRow
            type={'text'}
            labelText={'Search'}
            name={'search'}
            value={localSearch}
            handleChange={optimizedDebounce}
          ></FormRow>
          {/* Search by Status */}
          <FormRowSelect
            labelText={'Status'}
            name={'searchStatus'}
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          ></FormRowSelect>
          {/* Search by type */}
          <FormRowSelect
            labelText={'Type'}
            name={'searchType'}
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          ></FormRowSelect>
          {/* Search by Sort */}
          <FormRowSelect
            labelText={'Sort'}
            name={'sort'}
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          ></FormRowSelect>
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear Filter
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
