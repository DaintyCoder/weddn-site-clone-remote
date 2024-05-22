class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleMessage = async (message) => {
      try {
        const response = await fetch('http://localhost:5001/webhooks/rest/webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sender: 'user', message: message }),
        });
        const data = await response.json();
  
        data.forEach((msg) => {
          const botMessage = this.createChatBotMessage(msg.text);
          this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
          }));
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };
  }
  
  export default ActionProvider;
  