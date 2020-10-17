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
                    <Card bg='secondary'>
                        <div className="justify-content-center">
                        <Card.Img  style={{width:180, padding:10}} variant="top" src="https://sun9-57.userapi.com/KN3wL4K36o9GyzQkL3k_P8G3BgZheCoLLWHQoQ/FB7c78WCIsI.jpg" />
                        </div>
                        <Card.Body>
                            <Card.Text>
                                <h3>Welcome to valadzkokseniya.com!</h3>
                                <h5>For contact use <a href='/email'>valadzkokseniya@gmail.com</a></h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </header>
            </div>
        );
    }
}

export default App;
