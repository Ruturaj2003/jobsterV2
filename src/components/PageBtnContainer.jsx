import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi2';
import { changePage } from '../features/allJobs/allJobsSlice';

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);

  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft></HiChevronDoubleLeft>
        prev
      </button>

      <div className="btn-container">
        {pages.map((pageNumber, index) => {
          return (
            <button
              key={index}
              type="button"
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight></HiChevronDoubleRight>
        Next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
