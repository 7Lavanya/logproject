import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';
function App() {
    const [state,setState]=useState({
        username:'',
        password:''
    });
    const handleInputChange = (e) => {
        //Why Array Destructre used here
        setState((props) =>({...props,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefoult();
        alert(state);
        //And How To Validate username and password
        //After Validate it how to show Success Message
    }
  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <div>
                <span>Username</span>
                <input type='name' name='username' id='username' value={state.username} placeholder='Enter username' onChange={handleInputChange}></input>
            </div>
            <div>
                <span>Password</span>
                <input type='password' name='password' id='password' value={state.password} placeholder='Enter Password' 
                onChange={handleInputChange}></input>
            </div>
            <div>
                <button name='submit' type='sbumit'>Login</button>
            </div>
        </form>
    </div>
  );
}

export default App;
