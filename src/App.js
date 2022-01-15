import './App.css';
import React from 'react';
import { MarvelService } from './services/MarvelService';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            results: [],
            selectedResult: null,
        };

        this.fetchCharacters = this.fetchCharacters.bind(this);
        this.fetchCharacter = this.fetchCharacter.bind(this);

        this.MarvelService = new MarvelService({
            apiKey: this.props.apiKey,
        });
    }

    render() {
        const resultsElem = this.state.hasError
            ? <Error />
            : this.st
    }
}

export default App;