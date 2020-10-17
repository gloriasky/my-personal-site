import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from "./NavigationBar";
import {Card} from "react-bootstrap";

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <NavigationBar />
                <header className="App-header">
                    <h3>Welcome to valadzkokseniya.com!</h3>
                    <h5>For contact use <a href=''>valadzkokseniya@gmail.com</a></h5>
                </header>
            </div>
        );
    }
}

export default App;
