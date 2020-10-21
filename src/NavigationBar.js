import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";


export class NavigationBar extends React.Component {

    render() {
        return (
                <Navbar bg="dark" fixed="top" variant="dark">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                </Navbar>
        );
    }
}
