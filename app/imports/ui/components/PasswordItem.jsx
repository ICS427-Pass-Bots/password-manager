import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* const toggleCell = () => {
  const cell = document.getElementById('hidden-cell');
  if (cell.classList.contains('hidden')) {
    cell.classList.remove('hidden');
  } else {
    cell.classList.add('hidden');
  }
}; */

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const PasswordItem = ({ password }) => {
  const [show, setShow] = useState(true);
  return (
    <tr>
      <td>{password.website}</td>
      <td>{password.username}</td>
      {show ? <td>{password.password}</td> : null}
      <td>
        <button type="button" onClick={() => setShow(!show)}>
          Toggle Password
        </button>
      </td>
      <td>
        <Link to={`/edit/${password._id}`}>Edit</Link>
      </td>
    </tr>
  );
};

// Require a document to be passed to this component.
PasswordItem.propTypes = {
  password: PropTypes.shape({
    website: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    buttonID: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

export default PasswordItem;
