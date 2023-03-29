import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */

const PasswordCard = ({ password }) => (
  <Card style={{ width: '18rem', margin: 20, borderColor: 'green' }}>
    <Card.Body>
      <Card.Title>{password.website}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Username: {password.username}</Card.Subtitle>
      <Card.Link to={`/edit/${password._id}`}>Edit</Card.Link>
      <Button style={{ margin: 20 }}> View Password</Button>
    </Card.Body>
  </Card>
);

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
