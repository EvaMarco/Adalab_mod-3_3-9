import React from 'react';
import './App.scss';

const numbers = [1, 4, 6, 8, 45, 89];
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Value : 0,
      Even: 'false'
    }
    this.getNumber = this.getNumber.bind(this);
    this.getEvenNum = this.getEvenNum.bind(this);
  }
  getNumber(event){
    const tgValue = event.currentTarget.value;
    this.setState ({Value: tgValue});
  }
  getEvenNum(){ 
    this.setState((prevState) => ({Even : prevState.Even === 'true' ? 'false' : 'true'}))
  }
  render() {
    return (
      <div className="App">
        <h1>Mi array modificable</h1>
        <ul className="list">
          {[...numbers]
            .map((b,index) => <li key = {index} className = 'list__item'> {b} </li>)
          }
        </ul>

        <form className = 'form'>
          <label htmlFor="number" className = 'label'> Escoge el valor mínimo de los elementos de tu array:</label>
          <input type="number" name="number" id="number" onChange= {this.getNumber} className = 'input' />
          <label htmlFor="even" className= "check">Mostrar solo elementos pares.</label>
          <input type="checkbox" name="even" id="even" onChange = {this.getEvenNum} className = 'check'/>
        </form>
        <h2>Esta es mi array modificada.</h2>
        <ul className="list">
          {numbers
            .filter(a => a > this.state.Value)
            .filter((el) => {
                if (this.state.Even === 'true') {
                  return el%2 === 0;
                }
                else {
                  return el;
                }})
            .map((b,index) => <li key = {index} className = 'list__item'> {b} </li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
