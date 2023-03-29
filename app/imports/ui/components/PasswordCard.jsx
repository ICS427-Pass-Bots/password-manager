import React from 'react';
import PropTypes from 'prop-types';
import { Card, Modal } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const [modalShow, setModalShow] = React.useState(false);
const handleClose = () => setModalShow(false);
const handleShow = () => setModalShow(true);
const PasswordModal = ({ password }) => (
  <Modal
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">{password.website}</Modal.Title>
    </Modal.Header>
    <Modal.Body>Password: {password.password} </Modal.Body>
  </Modal>
);
const PasswordCard = ({ password }) => (
  <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{password.website}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Username: {password.username}</Card.Subtitle>
        <Card.Link to={`/edit/${password._id}`}>Edit</Card.Link>
        <Card.Link onClick={handleShow}>View Password</Card.Link>
      </Card.Body>
    </Card>
    <PasswordModal
      show={modalShow}
      onHide={handleClose()}
    />
  </>
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

PasswordModal.propTypes = {
  password: PropTypes.shape({
    website: PropTypes.string,
    username: PropTypes.number,
    password: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default PasswordCard;
