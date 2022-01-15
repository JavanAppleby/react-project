import axios from "axios";

export class MarvelService {

    static get ENDPOINTS() {
        return {
            comic: 'https://gateway.marvel.com:443/v1/public/comics',
            comics: 'https://gateway.marvel.com:443/v1/public/comics',
            character: 'https://gateway.marvel.com:443/v1/public/characters',
            characters: 'https://gateway.marvel.com:443/v1/public/characters',
        };
    }
    constructor(config) {
        this.apiKey = config.apiKey;
    }
    getAuthConfig() {
        return { apiKey: this.apiKey };
    }

    getCharacters(config = {}) {

    }

    getCharacter(id, config = {}) {
        
    }
}