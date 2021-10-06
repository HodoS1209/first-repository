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
            type="text" 
            value={this.props.bytesValue} 
            onChange={(event) => {
                this.props.changeBytes(
                    event.target.value, this.props.bytesName
                    );
                }}
            />
        </> 
        );
    }
}

export default BytesBox;