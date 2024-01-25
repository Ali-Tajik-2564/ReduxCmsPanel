import React, { useEffect, useState } from 'react';
import './Pagination.css';
import { useParams, Link } from 'react-router-dom';

export default function Pagination({
  pathname,
  items,
  itemCount,
  setShownCourses,
}) {
  const [pageCount, setPageCount] = useState(null);
  const { page } = useParams();

  useEffect(() => {
    let endIndex = itemCount * page;
    let startIndex = endIndex - itemCount;
    let paginatedItems = items.slice(startIndex, endIndex);
    setShownCourses(paginatedItems);

    let pageNumber = Math.ceil(items.length / itemCount);
    setPageCount(pageNumber);
  }, [page, items]);
  return (
    <div class="my-12">
      <ul class="flex item-center justify-center">
        {Number(page) !== 1 && (
          <li class="courses__pagination-item">
            <Link
              to={`${pathname}/${Number(page) - 1}`}
              class="flex w-16 h-16 justify-center items-center text-base bg-primaryInput text-primaryItem mx-2 rounded-lg hover:bg-primarySide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </Link>
          </li>
        )}

        {Array(pageCount)
          .fill(0)
          .map((item, index) => (
            <li className="courses__pagination-item">
              {index + 1 === Number(page) ? (
                <Link
                  to={`${pathname}/${index + 1}`}
                  class="flex w-16 h-16 justify-center items-center text-base bg-primaryButton text-white mx-2 rounded-lg hover:bg-primarySide">
                  {index + 1}
                </Link>
              ) : (
                <Link
                  to={`${pathname}/${index + 1}`}
                  class="flex w-16 h-16 justify-center items-center text-base bg-primaryInput text-primaryItem mx-2 rounded-lg hover:bg-primarySide">
                  {index + 1}
                </Link>
              )}
            </li>
          ))}
        {Number(page) !== pageCount && (
          <li class="courses__pagination-item">
            <Link
              to={`${pathname}/${Number(page) + 1}`}
              class="flex w-16 h-16 justify-center items-center text-base bg-primaryInput text-primaryItem mx-2 rounded-lg hover:bg-primarySide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

// pathname='/courses'
//             itemCount={3}
//             items={courses}
//             setShownCourses={setShownCourses}
