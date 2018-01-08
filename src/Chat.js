import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../Backend';

export default class Chat extends Component {
  state = {
    messages: [],

  };
  componentWillMount(){
    
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => {
          Backend.sendMessage(messages);
        }}
        user={{
          _id: Backend.getUid(),
          name: this.props.username,
        }}
      />
    );
  }
  componentDidMount(){
    Backend.loadMessages((messages) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, messages),
        };
      });
    });
  }
  componentWillUnmount(){
    Backend.closeChat();
  }
}

Chat.defaultProps = {
  username: 'Johnny',
};

Chat.propTypes = {
  username: PropTypes.string,
};
