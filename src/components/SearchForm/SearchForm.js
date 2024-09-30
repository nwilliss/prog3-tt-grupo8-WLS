import React from "react"
import { Component } from "react"
import "./SearchForm.css";

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }
  handleChanges = (evento) => {
    this.setState({ input: evento.target.value })
  }

  handleSubmit = () => {
    this.props.history.push("/search", { query: this.state.input })
  }

  handleDefault(e) { e.preventDefault() }

  render() {
    return (
      <div className="search-form">
        <form onSubmit={(e) => this.handleDefault(e)}>
          <input value={this.state.input} name="query" onChange={this.handleChanges} className="search-input" type="text" placeholder="Buscar películas y mas..." />
          <button onClick={() => this.handleSubmit()}>Search Movie</button>
        </form>
      </div>
    )
  }

}

export default SearchForm;