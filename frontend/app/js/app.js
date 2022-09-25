import React from 'react'
import { render } from 'react-dom';
import './app.css';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';

class App extends React.Component {
    render(){
      
    return (
        <div className="App">
             <Navbar/>
            <p>Header</p>
            <header className="App-header">
                <p>Initialize</p>
            </header>
            <Footer/>
        </div> 
    );
    }
   
}
export default App;