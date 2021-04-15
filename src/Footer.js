import * as React from "react";
import './Footer.css'
import axiosConfig from "./apis/axiosConfig";
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


export class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }

    componentDidMount() {
        axiosConfig.get(`/contact-links`)
            .then(json => this.setState({links: json.data}))
            .catch(error => console.log(error));
    }

    render() {
        let links = this.state.links.map((link, ind) => <ContactLink link={link} key={ind}/>);

        return (
            <div className="app-footer text-center row fixed-bottom">
                <div style={{marginLeft: '15vw'}}> For contact use: </div>
                <div style={{marginLeft: 25}} className="app-contacts row">
                    {links}
                </div>
            </div>
        );
    }

}
