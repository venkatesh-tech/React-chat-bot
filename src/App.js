import React from 'react';
import Chatbot from 'react-chatbot-kit'
import config from './chatbot/config';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import "./App.css"

function App() {
  return (
    <div className="App">
      <div style={{maxwidth:"300px"}}></div>
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </div>
  )
}
export default App