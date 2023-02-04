// ATTENTION! CONTINUE THE PROJECT AT THE 'TAKING TURNS' SECTION
// PLEASE FIND IT AT https://reactjs.org/tutorial/tutorial.html#taking-turns

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Button extends React.Component {
    render() {
        return (
            <button>{this.props.message}</button>
        )
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        // let intervalID =
        setInterval(() => {
            this.setState({date: new Date()})
        }, 1000)        
    }

    // componentWillUnmount() {

    // }

    render() {
        return (
            <div className='container'>
                <h1>Hello World!</h1>
                <h2>Current time is {this.state.date.toLocaleTimeString()}.</h2>
                <Button message='Toggle Clock' />
                <Button message='Toggle Precise Mode' />
            </div>
        )
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock />);