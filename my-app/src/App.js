import React from "react";

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numClicked: 0};
        this.onClick = this.onClick.bind(this)
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

export class Circle extends React.Component {
    render() {
        return <div style={{
            border: '2px solid black',
            borderRadius: '35px',
            width: '80px',
            height: '80px',
            margin: '1rem auto'
        }}></div>
    }
}