import { FaCalendarAlt } from 'react-icons/fa';
import { FaBriefcase, FaLocationArrow } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';
import moment from 'moment';
import { deleteJob, setEditJobs } from '../features/job/jobSlice';

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format('MMM Do YY');
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo
            icon={<FaLocationArrow></FaLocationArrow>}
            text={jobLocation}
          ></JobInfo>
          <JobInfo text={date} icon={<FaCalendarAlt></FaCalendarAlt>}></JobInfo>
          <JobInfo text={jobType} icon={<FaBriefcase></FaBriefcase>}></JobInfo>
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to={'/add-job'}
              className="btn  edit-btn"
              onClick={() =>
                dispatch(
                  setEditJobs({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                )
              }
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn  delete-btn"
              onClick={() => dispatch(deleteJob(_id))}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
