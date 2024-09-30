import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    prevenirDefault(e) {
        e.preventDefault()
    }

    traerDatos(e) {
        this.setState({
            value: e.target.value,
        }, () => this.props.filtrarPelis(this.state.value)
        )
    }


    render() {
        return (
            <form onSubmit={(e) => this.prevenirDefault(e)}>
                <input type="text" name="usuario" value={this.state.value} onChange={(e) => this.traerDatos(e)}></input>
            </form>
        )
    }
}

export default Form;