import React, {Components} from "react";
import ReactDOM, { render } from "react-dom";

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            byte: 0,
            kilobyte:0,
            megabyte:0,
        }
    }


    changeBytes(value,scale){
        switch(scale){
            case "byte":
                this.setState({megabyte: value / 1048576 , kilobyte: value / 1024, byte: value});
                return;
            case "kilobyte":
                this.setState({megabyte: value * 1024 , kilobyte: value , byte: value * 1024});
                return;
            case "megabyte":
                this.setState({megabyte: value , kilobyte: value * 1024, byte: value * 1048576});
                return;
        }
    }

    render() {
        return <>
         <h1>This is byte converter</h1>
         <p>Bytes</p>
         <input type="text" value={this.state.byte} onChange={(event) => this.changeBytes(event.target.value, "byte")}/>
         <p>Kilobytes</p>
         <input type="text" value={this.state.kilobyte} onChange={(event) => this.changeBytes(event.target.value, "kilobyte")}/>
         <p>Megabytes</p>
         <input type="text" value={this.state.megabyte} onChange={(event) => this.changeBytes(event.target.value, "megabyte")}/>
        </> 
    }
}

export default Converter;