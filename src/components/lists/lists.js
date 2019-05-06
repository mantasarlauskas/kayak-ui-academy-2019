import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../spinner';

const Lists = ({ lists, isLoading, removeList }) => (
  <div className="container">
    <div className="clearfix">
      <Link to="/add-list" className="btn btn-primary float-right mt-3 mb-3">
        Add new list
      </Link>
    </div>
    {isLoading ? (
      <Spinner />
    ) : lists.length > 0 ? (
      <Fragment>
        <h2 className="text-centered mb-3">My lists</h2>
        <table className="table table-hover text-centered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lists.map(({ id, name }, index) => (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/list/${id}`}>{`${name}`}</Link>
                </td>
                <td>
                  <Link className="btn btn-primary" to={`/edit-list/${id}`}>
                    Edit
                  </Link>
                </td>
                <td>
                  <button className="btn btn-danger" type="button" onClick={() => removeList(id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    ) : (
      <div className="alert alert-warning mt-3">There are no lists yet</div>
    )}
  </div>
);

Lists.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  removeList: PropTypes.func.isRequired
};

export default Lists;
