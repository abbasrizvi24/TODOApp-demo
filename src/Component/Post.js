import React, { Component } from 'react';

export default class Posts extends Component
{
    render()
    {
        return (
            <div>
                <li>
                    Task = {this.props.id}
                    <br></br>
                    {this.props.body}
                    <br></br>
                    <button onClick={this.props.delete}>Delete</button>
                    <hr></hr>
                </li>
            </div>
        )
     }
 }