import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const PasswordItem = ({ password }) => (
  <tr>
    <td>{password.website}</td>
    <td>{password.username}</td>
    <td>{password.password}</td>
    <td>
      <Link to={`/edit/${password._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
PasswordItem.propTypes = {
  password: PropTypes.shape({
    website: PropTypes.string,
    username: PropTypes.number,
    password: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default PasswordItem;
