import React from "react";
import ReactDOM from "react-dom";
import BytesBox from "./components/BytesBox";


class Converter extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                byte: 0,
                kilobyte: 0,
                megabyte: 0,
            };

        this.changeBytes = this.changeBytes.bind(this);
    }

 


    changeBytes(value,scale){
        switch(scale){
            case "byte":
                this.setState({ megabyte: value / 1048576 , kilobyte: value / 1024, byte: value });
            return;

            case "kilobyte":
                this.setState({ megabyte: value * 1024 , kilobyte: value , byte: value * 1024 });
            return;

            case "megabyte":
                this.setState({ megabyte: value , kilobyte: value * 1024, byte: value * 1048576 });
            return;
        }
    }

    render() {
        return ( 
        <>
            <BytesBox
                bytesName="byte"
                bytesValue={this.state.byte}
                changeBytes={this.changeBytes}
            />

            <BytesBox
                bytesName="kilobyte"
                bytesValue={this.state.kilobyte}
                changeBytes={this.changeBytes}
            />

            <BytesBox
                bytesName="megabyte"
                bytesValue={this.state.megabyte}
                changeBytes={this.changeBytes}
            />

        </>
        ) 
    }
}

ReactDOM.render(<Converter />, document.getElementById('root'));