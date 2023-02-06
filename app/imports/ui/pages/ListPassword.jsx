import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Passwords } from '../../api/password/Password';
import PasswordItem from '../components/PasswordItem';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Password documents. Use <StuffItem> to render each row. */
const ListPassword = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, passwords } = useTracker(() => {

    const subscription = Meteor.subscribe(Passwords.userPublicationName);
    const rdy = subscription.ready();
    const passwordsItems = Passwords.collection.find({}).fetch();
    return {
      passwords: passwordsItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>List Passwords</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {passwords.map((password) => <PasswordItem key={password._id} password={password} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListPassword;
