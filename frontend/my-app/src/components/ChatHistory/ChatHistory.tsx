import React, { Component } from "react";
import './ChatHistory.scss'

interface IChatHistoryProps {
    children?: React.ReactNode;
    props?: any;
    chatHistory: any[];
}

class ChatHistory extends Component<IChatHistoryProps> {

    render() {
        const messages = this.props.chatHistory.map((msg, index) => (
            <p key={index}>{msg.data}</p>
        ));

        return (
            <div className="ChatHistory">
                <h2>Chat History</h2>
                {messages}
            </div>
        );
    }
}

export default ChatHistory;
