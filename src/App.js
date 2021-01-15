
import {Router, Link } from '@reach/router';
import Input from './components/Input';
import Home from './components/Home';
import Color from './components/Color';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
            
    

      <Router>
        <Home path="/"></Home>
        <Input path="/:input"></Input>
        <Color path="/:input/:color"></Color>
        <Background path="/:input/:color/:background"></Background>    
      
      </Router>

    </div>
);
}

export default App;
