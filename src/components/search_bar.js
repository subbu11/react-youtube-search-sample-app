import React, { Component } from 'react'

const SearchBarOld = function() {
    return (
            <input />
    )
}

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { term : "" }

        this.onInputChange = this.onInputChange.bind(this)
    }
    render() {
        return (
            <div className="search-bar">
                <input onChange={ this.onInputChange } aria-label="search..."/>
            </div>
        )
    }

    onInputChange(event) {
        console.log(event.target.value)
        console.log(this.state.term)
        this.setState({term: event.target.value})
        this.props.onTermChange(this.state.term)
    }
}

export default SearchBar