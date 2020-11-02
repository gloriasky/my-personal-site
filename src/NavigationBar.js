import * as React from "react";
import './NavigationBar.css'


export class NavigationBar extends React.Component {

    render() {
        return (
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
