import { useNavigate } from "react-router-dom";
import { useLoaderData, useLocation } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(search);
  // console.log(meta);
  const { page, pageCount } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const handlePageChange = (pageNumber) => {
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  if (pageCount < 2) return null;

  return (
    <div className="flex justify-center mt-16 ">
      <div className="join">
        <button
          className={`join-item btn btn-xs sm:btn-md capitalize ${
            page == 1 ? "btn-disabled" : ""
          } `}
          onClick={() => {
            let prevPage = page - 1;
            console.log(page);

            handlePageChange(prevPage);
          }}
        >
          prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`join-item btn btn-xs sm:btn-md ${
                pageNumber === page ? "btn-active" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          className={`join-item btn btn-xs sm:btn-md capitalize ${
            page == pageCount ? "btn-disabled" : ""
          } `}
          onClick={() => {
            let nextPage = page + 1;
            console.log(page);

            handlePageChange(nextPage);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
