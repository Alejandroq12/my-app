import React, { Component } from 'react'
import ListCharacters from './ListCharacters'

export default class Pagination extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contador: 1
        }
    }
    
    
    render() {
        console.log(this.state.contador)
        return (
            <div>
                <button type="button" class="btn btn-light" onClick={() => this.setState({contador: this.state.contador -1})}>Preview</button>
                <button type="button" class="btn btn-primary" onClick={() => this.setState({contador: this.state.contador +1})}>Next</button>
                <br/>
                <ListCharacters conteo={this.state.contador}/>
            </div>
        )
    }
}
