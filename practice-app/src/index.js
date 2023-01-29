import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Circle extends React.Component {
    render() {
        return (
            <div className='circle'></div>
        );
    }
}

class App extends React.Component {
    render() {
        return <Circle />
    }
}

// =================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);