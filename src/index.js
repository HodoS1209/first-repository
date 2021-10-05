import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World!</h1> 


class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "World"
        }
    }

    handleChange(event) {
        const newName = event.target.value;
        this.setState({ name: newName });
    }

    render() {
        return <>
         <h1>Hello {this.state.name}</h1>
         <input type="text" onChange={(event) => this.handleChange(event)} />
        </> 
    }
}

ReactDOM.render(<Hello />, document.getElementById("root"));