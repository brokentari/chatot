import React, { Component, KeyboardEvent } from 'react';
import './App.scss';
import { connect, sendMsg } from "./api"
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory'
import ChatInput from './components/ChatInput';

interface IProps {

}

interface IState {
  chatHistory: MessageEvent[];
}

class App extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      chatHistory: []
    };
  }

  componentDidMount() {
    connect((msg: MessageEvent) => {
      console.log("new message");

      this.setState({
        chatHistory: [...this.state.chatHistory, msg]
      })

      console.log(this.state);
    });
  }

  send = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      sendMsg((event.target as HTMLInputElement).value);
      (event.target as HTMLInputElement).value = "";
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    )
  }
}

export default App;