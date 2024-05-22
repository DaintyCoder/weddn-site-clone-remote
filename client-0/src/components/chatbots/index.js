import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../../chatbot/config';
import MessageParser from '../../chatbot/MessageParser';
import ActionProvider from '../../chatbot/ActionProvider';

const ChatbotComponent = () => {
  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
      <style>
        {`
          .react-chatbot-kit-chat-input {
            color: #000000;
            /* Add any other custom styles you want to override */
          }
        `}
      </style>
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
};

export default ChatbotComponent;