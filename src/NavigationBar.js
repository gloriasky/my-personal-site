import * as React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import {Navbar} from "react-bootstrap";


export class NavigationBar extends React.Component {

    render() {
        return (
                // <Navbar bg="dark" fixed="top" variant="dark">
                //     <Navbar.Brand href="#home" className="nav-link">Home</Navbar.Brand>
            <div className="navigation-bar row">
                <div className="col-3"><a className="gl-nav-link" href="/">Home</a></div>
                <div className="col-3"><a className="gl-nav-link" href="/aboutme">About me</a></div>
                <div className="col-2"><a className="gl-nav-link" href="/skills">Skills</a></div>
                <div className="col-3"><a className="gl-nav-link" href="/projects">Projects</a></div>
                <div className="col-1 cv-link"><a className="gl-nav-link" href="/cv">CV</a></div>
            </div>

        );
    }
}
