import React, { Component } from "react"
import "./ChatInput.scss"

interface IChatInputProps {
    children?: React.ReactNode;
    props?: any;
    send: any;
}

class ChatInput extends Component<IChatInputProps> {
    render() {
        return (
            <div className="ChatInput">
                <input onKeyDown={this.props.send} />
            </div>
        )
    }
}

export default ChatInput;