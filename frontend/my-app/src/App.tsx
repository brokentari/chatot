import React, { Component } from 'react';
import './App.scss';
import { connect, sendMsg } from "./api"
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory'

interface IProps {

}

interface IState {
  chatHistory: any[];
}

class App extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      chatHistory: []
    };
  }

  componentDidMount() {
    connect((msg: any) => {
      console.log("new message");

      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))

      console.log(this.state);
    });
  }

  send = () => {
    sendMsg("hello");
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Hit</button>
      </div>
    )
  }
}

export default App;