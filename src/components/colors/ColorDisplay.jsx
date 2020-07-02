import React, { Component } from "react";
import ColorButtonComponent from "./ColorButton";

class ColorDisplay extends Component{ 

    constructor(){
        super();
        this.state = {
            displayColor : '#000000'
        }

        this.setDisplayColor = this.setDisplayColor.bind(this);
        this.resetDisplay = this.resetDisplay.bind(this);
    }

    render(){
        return(
            <div className="colorDisplay">
                This is color display
                <div>
                    <ColorButtonComponent buttonColor='#335580' setDisplayColor={this.setDisplayColor} buttonName='blue'></ColorButtonComponent>
                    <ColorButtonComponent buttonColor='#995577' setDisplayColor={this.setDisplayColor} buttonName='violet'></ColorButtonComponent>
                    <ColorButtonComponent buttonColor='#665533' setDisplayColor={this.setDisplayColor} buttonName='green'></ColorButtonComponent>
                    <div>
                        <span className="display" style={{color : this.state.displayColor}}>This will display color on click</span>
                    </div>
                    <div>
                        <button onClick = {this.resetDisplay} >Reset Color</button>
                    </div>
                </div>
            </div>
        );
    }


    setDisplayColor(newColor){
        console.log("Setting color in parent"+newColor);
        this.setState({
            displayColor : `${newColor}`
        })
    }

    resetDisplay(){
        console.log("Reset Color")
        this.setState({
            displayColor : '#000000'
        })
    }
    
}

export default ColorDisplay;