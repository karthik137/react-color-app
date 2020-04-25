import React, { Component } from "react";

class ColorButton extends Component{

    constructor(){
        super();
        this.setParentColor = this.setParentColor.bind(this);
    }

    render(){
        return(
            <div className="colorButton">
                <button onClick={this.setParentColor} >{this.props.buttonName}</button>
            </div>
        );
    }

    setParentColor(){
        console.log("Printing color : "+this.props.buttonColor);
        //Set new display color
       this.props.setDisplayColor(this.props.buttonColor);
    }
}

export default ColorButton;