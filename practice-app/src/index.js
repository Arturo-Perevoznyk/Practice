import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
        this.handlelClick = this.handlelClick.bind(this);
    }

    handlelClick(e) {
        this.setState({
            number: this.state.number +1,
        })
    }

    render() {
        return (
            <div className='circle' onClick={this.handlelClick}>
                {this.state.number}
            </div>
        );
    }
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        }
        this.handlelClick = this.handlelClick.bind(this);
    }

    handlelClick() {
        const total = this.state.clicks;
        this.setState({
            clicks: total + 1,
        })
    }

    render() {
        return(
            <div className='parent'>
                <Children onClick={this.handlelClick}/>
                <p>Total clicks: {this.state.clicks}</p>
            </div>
        )
    }
}

class Children extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: undefined,
        }
    }    

    render() {
        return (
            <div className='children' onClick={this.props.onClick}>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Circle/>
                <Parent/>
            </div>
        )
    }
}

// =================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);