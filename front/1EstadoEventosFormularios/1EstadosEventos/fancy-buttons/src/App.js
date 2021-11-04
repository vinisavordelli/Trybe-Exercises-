import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicksButtonOne: 0,
      clicksButtonTwo: 0,
      clicksButtonThree: 0,
    };
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }
  handleButtonOne() {
    this.setState((previous, _) => ({
      clicksButtonOne: previous.clicksButtonOne +1,
    }), () =>{
      console.log(`${this.getButtonColor(this.state.clicksButtonOne)}`)
    });
  }
  
  handleButtonTwo() {
    this.setState((previous, _) => ({
      clicksButtonTwo: previous.clicksButtonTwo +1,
    }), () => {
      console.log(`${this.getButtonColor(this.state.clicksButtonTwo)}`)
    });
  }
  
  handleButtonThree() {
    this.setState((previous, _) => ({
      clicksButtonThree: previous.clicksButtonThree +1,
    }), () =>{
      console.log(`${this.getButtonColor(this.state.clicksButtonThree)}`)
    });
  }

  getButtonColor(num) {
    // Essa função contém um ternário que realiza a lógica para mudarmos
    // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksButtonOne, clicksButtonTwo, clicksButtonThree } = this.state;
    return (
      <div>
        <button
          onClick={ this.handleButtonOne }
          style={{ backgroundColor: this.getButtonColor(clicksButtonOne) }}
        >
        { clicksButtonOne }
        </button>
        <button
          onClick={ this.handleButtonTwo }
          style={{ backgroundColor: this.getButtonColor(clicksButtonTwo) }}
        >
        { clicksButtonTwo }
        </button>
        <button
          onClick={ this.handleButtonThree }
          style={{ backgroundColor: this.getButtonColor(clicksButtonThree) }}
        >
        { clicksButtonThree }
        </button>
      </div>
    );
  }
}
export default App;