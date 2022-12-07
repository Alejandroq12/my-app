import React, { Component } from 'react';
import Card from './Card';

export default class ListCharacters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            characters: []
        }
    }


    fetchApi = async () => {
        let response = await fetch('https://rickandmortyapi.com/api/character/?page=2')
        let data = await response.json()

        // console.log(data.results);

        this.setState({
            characters: [...data.results]
        })
    }

    componentDidMount() {
        this.fetchApi();
    }

    render() {
        return (
            this.state.characters.map((pj, index)=>{
                return <Card key={index} {...pj}/>
            })
        )
    }

}