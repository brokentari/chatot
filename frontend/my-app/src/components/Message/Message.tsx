import React, { Component } from "react";
import "./Message.scss";

interface IMessageProps {
    childnre?: React.ReactNode;
    props?: any;
    message: MessageEvent;
    key: string;
}

interface IMessageState {
    message: string;
}

class Message extends Component<IMessageProps, IMessageState> {
    constructor(props: any) {
        super(props);


        let temp = JSON.parse(this.props.message.data);

        this.state = {
            message: temp.body
        };

        console.log(this.state.message);
    }

    render() {
        return <div className="Message">{this.state.message}</div>
    }
}

export default Message;