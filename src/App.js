import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from "./NavigationBar";
import axios from "axios";
import {properties} from "./properties";

class ContactLink extends React.Component {

    render() {

        let link = this.props.link;

        return (
            <a className={`app-${link.className}`}
               href={link.link}
               key={this.props.key}
               target="_blank"
               aria-hidden="true"
               rel="noopener noreferrer">{null}</a>
        );
    }

}

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }

    componentDidMount() {
        axios.get(`${properties.apiUrl}/api/contact-links`)
            .then(json => this.setState({links: json.data}))
            .catch(error => console.log(error));
    }

    render() {

        let links = this.state.links.map((link, ind) => <ContactLink link={link} key={ind}/>);

        return (
            <div className="App">
                <div className="App-header">
                    <NavigationBar />
                    <div className="app-background">
                        <div className="app-background-gradient">
                            <div className="app-welcome-label">
                                Welcome to my personal website
                            </div>
                            <div className="app-main-picture">

                            </div>
                            <div className="app-contacts-label">
                                For contact use:
                            </div>
                            <div className="app-contacts row">
                                {links}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
