import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/JobsContainer';
import Job from './Job';
import Loading from './Loading';
import { useEffect } from 'react';
import { getAllJobs } from '../features/allJobs/allJobsSlice';

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center={true}></Loading>
      </Wrapper>
    );
  }

  if (jobs.length == 0) {
    return (
      <Wrapper>
        <h2>Sorry ,It looks like no Job matches your criteria</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>Jobs Info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job}></Job>;
        })}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
