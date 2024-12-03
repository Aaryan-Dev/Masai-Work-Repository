

function Pagination(props) {

 
  const { current, total, setPa } = props;
  
  const inc = () => {
    setPa(current - 1)
  }
    
  const dec = () => {
    setPa(current + 1)
  }
    

  const prev = <button disabled= {current==1}   data-testid="prev-page" onClick={inc} >PREV</button>;
  const currentPage = <button data-testid="current-page">{current}</button>;
  const next = <button disabled= {current==total}  data-testid="next-page" onClick={dec}  >NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{total}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
