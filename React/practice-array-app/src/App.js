import React from 'react';
import './App.css';

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.message}</button>
    )
  }
}

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['hola', 'adiós', 'púlsame', 'úsame']
    }
  }
  render(){
    return(
      <div>
        {
          [<Button message='hola' key='1'/>, <Button message='adiós' key='2'/>]
          // this.state.data.map(word => {
          //   return <Button message={word}/>
          // })
        }
      </div>
    )
  }
}

function App() {
  return (
    <Frame />
  );
}

export default App;
