import React, { Component } from "react";
import "./Message.scss";

interface IMessageProps {
    childnre?: React.ReactNode;
    props?: any;
    message: string;
}

interface IMessageState {
    message?: string;
}

class Message extends Component<IMessageProps, IMessageState> {
    constructor(props: any) {
        super(props);
        let temp = this.props.message;

        this.state = {
            message: temp
        };
    }

    render() {
        return <div className="Message">{this.state.message}</div>
    }
}

export default Message;