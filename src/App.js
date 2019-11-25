import React, { Component, createRef } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import base from './base'

class App extends Component {
    state = {
      messages: {},
      // je récupère le pseudo via les params de router
      pseudo: this.props.match.params.pseudo
    }

     messageRef = createRef()

    componentDidMount () {
      //on synchronise un state avec la base de donnée
      base.syncState('/', { // je stock à la racine
        context: this, 
        state: 'messages' // je synchronise le state messages
      })
    }

    componentDidUpdate () {
      const ref = this.messageRef.current
      ref.scrollTop = ref.scrollHeight
    }

    addMessage = message => {
      const messages = {...this.state.messages}
      //forme du message avec une clé unique grâce à Date.now
      messages[`message-${Date.now()}`] = message

      Object.keys(messages).slice(0,-10).forEach(key => { messages[key] = null })
      this.setState({ messages })
    }

    render () {
      const messages = Object
      .keys(this.state.messages)
      .map( key =>  (
        // pour chaque clé tu vas me faire le rendu du component Message
        <Message
          key={key}
          pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message}
          // je récupère le pseudo et le message
        ></Message>
      ))

      return (
        <div className='box'>
          <div>
            <div className='messages' ref= { this.messageRef }>
              <div className='message'>
                { messages }
              </div>
            </div>
          </div>
          <Formulaire
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
          />
        </div>
      )
    }
}

export default App
