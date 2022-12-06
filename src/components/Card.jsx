import React, { Component } from 'react'

export default class Card extends Component {

    render() {
        return ( 
        <div style={{display: 'inline-block'}}>
        <div className="card m-2" style={{width: '20rem', height: '30rem'}}>
          <img src={this.props.image} className="card-img-top" alt="..."/>
          <div className="card-body">
               <p className="card-text text-black">{this.props.name}</p>
            </div>
            </div>
        </div>
        )
    }
}