function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
  console.log(createArrayOfSize(totalPages));

  let pages = createArrayOfSize(totalPages).map((a, i) => (
    <button
      onClick={handlePageChange}
      disabled={i + 1 == currentPage}
      data-testid="page-btn"
    >
      {i + 1}{" "}
    </button>
  ));

  return <div>{pages}</div>;
}

export default Pagination;
