import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */

const PasswordCard = ({ password }) => {
  const [show, setShow] = useState(true);
  return (
    <Card style={{ width: '18rem', margin: 20, borderColor: 'green' }}>
      <Card.Body>
        <Card.Title>{password.website}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Username: {password.username}</Card.Subtitle>
        <ButtonGroup>
          <Link to={`/edit/${password._id}`}><Button variant="secondary">Edit</Button></Link>
          <Link to={`/deletetoo/${password._id}`}><Button variant="danger">Delete</Button></Link>
        </ButtonGroup>
        <Button style={{ margin: 20 }} onClick={() => setShow(!show)}>{show ? 'View Password' : password.password}</Button>
      </Card.Body>
    </Card>
  );
};

// Require a document to be passed to this component.
PasswordCard.propTypes = {
  password: PropTypes.shape({
    website: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default PasswordCard;
