import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from "./NavigationBar";
import axios from "axios";
import {properties} from "./properties";
import {Footer} from "./Footer";



class App extends React.Component{



    render() {



        return (
            <div className="App">
                <div className="App-header">
                    <NavigationBar />
                    <div className="app-background-gradient">
                        <div className="app-welcome-label text-center">
                            Welcome To My
                        </div>
                        <div className="app-welcome-label">
                            Online Portfolio
                        </div>

                    </div>
                    <Footer />
                </div>

            </div>
        );
    }
}

export default App;
