import React from 'react';


export default class Clock extends React.Component {
    constructor(){
        super();
        this.state = {time : new Date };   
    }
     
    render(){
        setTimeout(() => this.setState( { time : new Date}) , 1000);
        return(            
            <div> {this.state.time.toString()} </div>
        );
    }
}