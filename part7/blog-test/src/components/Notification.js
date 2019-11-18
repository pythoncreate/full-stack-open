import React from "react";
import { Container, Message } from "semantic-ui-react";
import { connect } from "react-redux";

const Notification = props => {
  const { notification } = props;

  return (
    notification && (
      <Container>
        <Message>{notification}</Message>
      </Container>
    )
  );
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(Notification);
