import React from "react";
import ReactDOM from "react-dom";

class BytesBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <>
         <p>{this.props.bytesName}</p>
         <input 
            type="number" 
            value={this.props.bytesValue} 
            onChange={(event) => {
                this.props.changeBytes(
                    parseFloat(event.target.value), this.props.bytesName
                    );
                }}
            />
        </> 
        );
    }
}

export default BytesBox;