import React from "react";

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numClicked: 0};
        this.setState = this.setState.bind(this);
    }

    onClick() {
        // this.setState({numClicked++}) How to do this???
    }

    render() {
        return (
            <button onClick={this.onClick}>{this.props.text}</button>
        )
    }
}

Button.defaultProps = {
    text: 'Default text'
}

export class Circle extends React.Component { //WHY IS THIS NOT RENDERING?????
    render() {
        return <div style={{
            borderRadious: '20px',
            border: '5px solid black',
            width: '20px',
            height: '20px',
            position: 'absolute',
            top: '100px',
            left: '20px'
        }}></div>
    }
}