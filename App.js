import React, {Component} from 'react';
import './App.css';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';

class App extends Component {
  state = {
    username: "Fadil"
  }

handleUsernameOfMyChoice = () =>{
  this.setState({
    username: "General"
  })
}


  handleUsername =(event)=>{
    this.setState({
      username: event.target.value
      
    })
  
  }

  render(){
  
  return (
    <div className="App">
     <h1>Faditech Learn React Tutorials on components interactivity</h1>
    
     <UserOutput  username="Fadil"/>
     <UserOutput  click={this.handleUsernameOfMyChoice}/>
     <UserInput 
     
      username ={this.state.username}
      changeName={this.handleUsername}/>
    </div>
  );
  }
}

export default App;
