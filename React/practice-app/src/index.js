import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const PICTURES =  {
    lamp: 'https://dlw70zpqr11kj.cloudfront.net/wp-content/uploads/2018/10/RLG47750_2-1.jpg',
    tree: 'https://www.kathykeating.org/wp-content/uploads/2010/06/woollybutt_tree-800x1067.jpg',
    ball: 'https://www.williamklein.com.au/assets/full/1928_1929.jpg?20200703031414',
    leave: 'https://jooinn.com/images/leave-2.jpg',
}

class Picture extends React.Component {
    render() {
        return <img src={this.props.picture} alt=''/>
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        const name = e.target.value;
        this.props.choosePicture(name);
        console.log(name)
    }

    render() {
        return (
            /* Inside the form, 'name' is used to wrapp all the inputs. If there was no 'name',
            you could check all the inputs at a time, as they would behave as independent ones.*/
            <form onClick={this.handleClick}>
                <input type="radio" name="things" value="tree"/> Tree
                <input type="radio" name="things" value="ball"/> Ball
                <input type="radio" name="things" value="lamp"/> Lamp
                <input type="radio" name="things" value="leave"/> Leave
            </form>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: PICTURES.ball,
        };
        this.choosePicture = this.choosePicture.bind(this);
    }

    choosePicture(name) {
        this.setState({src: PICTURES[name]})
    }

    render() {
        return (
            <>
                <h1>SELECT A PICTURE</h1>
                <Menu choosePicture={this.choosePicture}/>
                <Picture  picture={this.state.src}/>
            </>
        )
    }
}

// =================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);