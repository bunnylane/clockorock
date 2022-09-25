import React from 'react'
import { render } from 'react-dom';
import './app.css';
import Navbar from './components/navbar';

class App extends React.Component {
    render(){
      
    return (
        <div className="App">
             <Navbar/>
            <p>Header</p>
            <header className="App-header">
                <p>Initialize</p>
            </header>
        </div> 
    );
    }
   
}

export default App;