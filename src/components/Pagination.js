import ReactPaginate from "react-paginate";
const Pagination = ({ totalPage, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={<i className="fas fa-arrow-left"></i>}
      nextLabel={<i className="fas fa-arrow-right"></i>}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={totalPage}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};
export default Pagination;
