import React, { Component } from 'react'

class Formulaire extends Component {
    state = {
        message:'',
        length: this.props.length
    }
    
    createMessage = () => {
        const { addMessage, pseudo, length} = this.props
        const message = {
            pseudo,
            message: this.state.message
        }
        addMessage(message)

        // Reset, je vide le message après l'envoi
        this.setState({ message: '', length })
    }

    handleSubmit = event => {
    event.preventDefault()
    this.createMessage()
    }
    
    handleChange = event => {
        // je stock le message dans une variable
        const message = event.target.value
        // taille max du component moins la longueur du message que l'on entre
        const length = this.props.length - message.length
        // je met à jour le message
        this.setState({ message, length })
    }

    handleKeyUp = event => {
        console.log(event.key)
        // if (event.key === 'Enter') {
        //     this.createMessage()
        // }
    }  //onKeyUp event lorsque l'on relâche une touche, identique à un submit dans notre fonction
   

    render () {
        return (
            <form
                className='form'
                onSubmit={this.handleSubmit}>
                <textarea
                value={this.state.message}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                maxLength={this.props.length}
                required
                >
                </textarea>
                <div className='info'>
                    {this.state.length}
                </div>
                <button type='submit'>
                    Envoyer!
                </button>
            </form>
        )
    }
}

export default Formulaire