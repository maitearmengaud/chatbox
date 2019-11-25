import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
    state={
        pseudo:'',
        goToChat: false
    }

handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
}

handleSubmit = event => {
    // j'annule l'event par defaut du navigateur et je lui donne mes indications
    event.preventDefault()
    this.setState({ goToChat: true })
}

    render(){
        if (this.state.goToChat) {
            // si gotTochat a été cliqué on return un component Redirect qui nous redirige vers une nvlle url avec la value du pseudo
            // Redirect remplace dans l'historique la page de navigation et push me permet de garder ma page dans l'historique de navigation
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
        }

        return (
            <div className='conexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                    <input
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder='Pseudo'
                    type='text'
                    required
                    >
                    </input>
                    <button type='submit'>
                        GO
                    </button>
                 </form>
            </div>
        )
    }
}

export default Connexion