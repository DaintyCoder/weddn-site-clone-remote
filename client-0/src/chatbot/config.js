import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm here to help. What can I do for you?`)],
  botName: "FAQ_ChatBot",
  customComponents: {
    // Replaces the default header
    header: () => <div style={{ backgroundColor: 'rgba(53, 146, 93, 1)', padding: "5px", borderRadius: "3px" }}>FAQ CHATBOT</div>
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "rgba(53, 146, 93, 1)",
    },
    chatButton: {
      backgroundColor: "rgba(53, 146, 93, 1)",
    },
    
  },
};

export default config;
