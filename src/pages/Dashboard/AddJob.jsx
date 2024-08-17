import { useDispatch, useSelector } from 'react-redux';
import { FormRow, FormRowSelect, JobInfo } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { toast } from 'react-toastify';
import {
  clearValues,
  createJob,
  editJob,
  handleChange,
} from '../../features/job/jobSlice';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Fill All Fields');
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return nav('/all-jobs');
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
        <div className="form-center">
          <FormRow
            type={'text'}
            name={'position'}
            labelText={'Position'}
            value={position}
            handleChange={handleJobInput}
          ></FormRow>
          <FormRow
            type={'text'}
            name={'company'}
            labelText={'Company'}
            value={company}
            handleChange={handleJobInput}
          ></FormRow>
          <FormRow
            type={'text'}
            name={'jobLocation'}
            labelText={'Job Location'}
            value={jobLocation}
            handleChange={handleJobInput}
          ></FormRow>
          {/* Job type */}
          <FormRowSelect
            labelText={'Job Type'}
            handleChange={handleJobInput}
            list={jobTypeOptions}
            name={'jobType'}
            value={jobType}
          ></FormRowSelect>
          {/* Job Status */}
          <FormRowSelect
            labelText={'Job Status'}
            handleChange={handleJobInput}
            list={statusOptions}
            name={'status'}
            value={status}
          ></FormRowSelect>
          {/* Btn Container*/}
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              Clear
            </button>

            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Loading' : 'Save'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
