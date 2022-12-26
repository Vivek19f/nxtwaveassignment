import { useMemo, useState } from "react";
import { INC_VALUE } from "../../pages/constants";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import SearchBar from "../searchbar/SearchBar";

// handle pagination for all cards.

function ManageResource({ data, handleSearch }) {
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = useMemo(() => data.length / INC_VALUE, [data]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      let start = startPage + INC_VALUE;
      let end = endPage + INC_VALUE;

      setCurrentPage(page);
      setStartPage(start);
      setEndPage(end);
    }
  };

  if (!data) {
    return <span>loading...</span>;
  }

  return (
    <>
      <div className="container">
        <SearchBar handleOnChange={handleSearch} />
        {data.slice(startPage, endPage).map((x) => {
          return <Card key={x.id} data={x} />;
        })}
      </div>

      <div className="container">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          endPage={endPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default ManageResource;
