import React, { useEffect, useState, useCallback } from 'react';
import { Input, Button, ChatList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import axios from 'axios';

const ChatbotComponent = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = useCallback((text, type, position) => {
        const newMessage = {
            position: position,
            type: type,
            text: text,
            date: new Date(),
        };
        setMessages(prevMessages => [...prevMessages, newMessage]);
    }, []);

    useEffect(() => {
        addMessage("Welcome to Unboxd faq!", 'text', 'left');
    }, [addMessage]);

    const handleNewUserMessage = async (newMessage) => {
        try {
            const response = await axios.post('http://localhost:5001/chat', { message: newMessage });
            response.data.forEach(message => {
                addMessage(message.text, 'text', 'left');
            });
        } catch (error) {
            console.error('Error during communication with the chatbot:', error);
        }
    };

    const handleSendMessage = (text) => {
        if (text.trim()) {
            addMessage(text, 'text', 'right');
            handleNewUserMessage(text);
        }
    };

    return (
        <div>
            <ChatList
                className="chat-list"
                dataSource={messages.map((msg, index) => ({
                    avatar: '/images/logo/logo-raw.svg',
                    alt: 'Reactjs',
                    title: 'Chatbot',
                    subtitle: msg.text,
                    date: msg.date,
                    unread: 0,
                    position: msg.position,
                }))}
            />
            <Input
                placeholder="Type here..."
                multiline={true}
                rightButtons={
                    <Button
                        color='white'
                        backgroundColor='black'
                        text='Send'
                        onClick={() => handleSendMessage(document.querySelector('.rce-input').value)}
                    />
                }
            />
        </div>
    );
};

export default ChatbotComponent;