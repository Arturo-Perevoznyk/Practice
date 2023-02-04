// ATTENTION! CONTINUE THE PROJECT AT THE 'TAKING TURNS' SECTION
// PLEASE FIND IT AT https://reactjs.org/tutorial/tutorial.html#taking-turns

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Image from './heart.png';
import AudioChop from './chopAudio.mp3';

const audioChop = new Audio();
audioChop.src = AudioChop;
// audioChop.src = './chopAudio.mp3';


class Corachon extends React.Component {
    render() {
        return <img onClick={audioChop.play} src={Image} alt="Corachon"/> //This gives an error 
    }
}

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }



    render() {
        return (
            <>
                <Corachon/>
            </>
        )
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);