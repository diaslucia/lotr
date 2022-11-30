import ReactPaginate from 'react-paginate';
import './Pagination.scss';

const Pagination = ({ handlePageNumber }) => {
  return (
    <ReactPaginate
      className='pagination'
      activeLinkClassName='active-link'
      activeClassName='active'
      pageCount={78}
      nextLabel='>>'
      previousLabel='<<'
      breakLabel=''
      pageRangeDisplayed={4}
      marginPagesDisplayed={0}
      onPageChange={data => handlePageNumber(data.selected)}
    />
  );
};

export default Pagination;
