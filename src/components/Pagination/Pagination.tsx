import React from 'react';
import classnames from 'classnames';

import './Pagination.scss';

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const DOTS = '...';

export const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const lastPage = Math.ceil(totalCount / pageSize);
  const maxSiblings = siblingCount * 2;
  const showDots = lastPage > maxSiblings;

  const range: (number | string)[] = [];
  for (let i = 1; i <= lastPage; i++) {
    if (
      i === 1 ||
      i === lastPage ||
      (i >= currentPage - siblingCount && i <= currentPage + siblingCount)
    ) {
      range.push(i);
    } else if (showDots && range[range.length - 1] !== DOTS) {
      range.push(DOTS);
    }
  }

  if (range.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul className={classnames('pagination-container', className)}>
      <li
        key="previous"
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow arrow-left left" />
      </li>
      {range.map((pageNumber, index) => (
        <li
          key={index}
          className={classnames('pagination-item', {
            selected: pageNumber === currentPage,
          })}
          onClick={() => {
            if (pageNumber !== DOTS) {
              onPageChange(pageNumber as number);
            }
          }}
        >
          {pageNumber === DOTS ? DOTS : pageNumber}
        </li>
      ))}
      <li
        key="next"
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow arrow-right right" />
      </li>
    </ul>
  );
};
