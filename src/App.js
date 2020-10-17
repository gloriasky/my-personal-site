import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from "./NavigationBar";
import {Card} from "react-bootstrap";
import axios from "axios";
import {properties} from "./properties";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    componentDidMount() {
        axios.get(`${properties.apiUrl}/api/contacts`)
            .then(json => this.setState({email: json.data.email}))
            .catch(error => console.log(error));
    }

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
                                <h5>For contact use <a href='/email'>{this.state.email}</a></h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </header>
            </div>
        );
    }
}

export default App;
