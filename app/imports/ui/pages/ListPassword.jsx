import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, CardGroup } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Passwords } from '../../api/password/Password';
import LoadingSpinner from '../components/LoadingSpinner';
import PasswordCard from '../components/PasswordCard';

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
            <h2> Passwords</h2>
          </Col>
          <Col>
            <Row>
              {passwords.map((password) => <PasswordCard key={password._id} password={password} />)}
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListPassword;
