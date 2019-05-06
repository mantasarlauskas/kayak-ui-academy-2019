import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ itemsPerPage, data, Component, additionalProps }) => {
  const [page, setPage] = useState(0);
  const [paginatedData, setPaginatedData] = useState([]);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    paginateData();
  }, [page, data]);

  const paginateData = () => {
    const newData = data.filter(
      (item, index) => index >= page * itemsPerPage && index < page * itemsPerPage + itemsPerPage
    );
    setPaginatedData(newData);
  };

  const handlePageChange = newPage => {
    if (newPage >= 0 && newPage < pageCount) {
      setPage(newPage);
    }
  };

  const renderPage = (e, i) => (
    <li key={i} className={`page-item ${page === i && 'active'}`}>
      <button type="button" className="page-link" onClick={() => setPage(i)}>
        {i + 1}
      </button>
    </li>
  );

  return (
    <Fragment>
      <div className="row justify-content-center">
        {paginatedData.map(item => (
          <div className="col-4" key={item.id}>
            <Component {...item} {...additionalProps} />
          </div>
        ))}
      </div>
      <nav className="clearfix mb-5">
        <ul className="pagination float-right">
          <li className="page-item">
            <button type="button" className="page-link" onClick={() => handlePageChange(page - 1)}>
              Previous
            </button>
          </li>
          {[...Array(pageCount)].map(renderPage)}
          <li className="page-item">
            <button type="button" className="page-link" onClick={() => handlePageChange(page + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  Component: PropTypes.elementType.isRequired,
  additionalProps: PropTypes.object
};

Pagination.defaultProps = {
  additionalProps: {}
};

export default Pagination;
