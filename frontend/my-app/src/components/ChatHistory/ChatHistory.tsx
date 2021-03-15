import React, { Component } from "react";
import Message from "../Message";
import './ChatHistory.scss'

interface IChatHistoryProps {
    children?: React.ReactNode;
    props?: any;
    chatHistory: string[];
}

class ChatHistory extends Component<IChatHistoryProps> {
    render() {
        console.log(this.props.chatHistory);
        const messages = this.props.chatHistory.map(msg => <Message message={msg} />);

        return (
            <div className="ChatHistory">
                <h2>Chat History</h2>
                {messages}
            </div>
        );
    };
}

export default ChatHistory;
