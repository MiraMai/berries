import React, { Component } from 'react';
import '../App.css';


export default class History extends Component {
    render() {
        let historyList = 
        this.props.historyItems.map((item,index)=>{
            return (
                <li key={index}>
                    <p>{item.type}</p>
                </li>
            );
        });
        
    return (
        <div>
            History: <ul>{historyList}</ul>
        </div>
    );    
    }
}


