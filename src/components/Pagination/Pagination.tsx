import './Pagination.scss';
import classnames from 'classnames';
import { DOTS, usePagination } from './usePagination';

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange: (number | string)[] =
    usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    }) || [];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames(
        'pagination-container',
        className ? { [className]: true } : undefined,
      )}
    >
      <li
        key="previous"
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow arrow-left left" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={`dots-${index}`} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={pageNumber}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() =>
              onPageChange(typeof pageNumber === 'number' ? pageNumber : 1)
            }
          >
            {pageNumber}
          </li>
        );
      })}
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
