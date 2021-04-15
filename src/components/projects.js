import React from "react";
import {connect} from "react-redux";
import axiosConfig from "../apis/axiosConfig";
import {NavigationBar} from "../NavigationBar";
import {getProjects} from "../actions/actions";
import './projects.css'
import {Card, Button, Form} from "react-bootstrap";

export class CreateProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            projectUrl: '',
            description: '',
            isActive: false
        }
    }

    onSubmit = event => {
        event.preventDefault();
        axiosConfig.post('/projects/create', {...this.state}).then(response => {
            alert('Created!')
        })
    }



    render() {
        return (
            <Card style={{margin: '1rem'}} className='d-block mx-auto col-6' >
                <Card.Header>Create new project</Card.Header>
                <Card.Body>
                    <Form onSubmit={event => this.onSubmit(event)}>
                        <Form.Group controlId="form-project-create">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control value={this.state.name}
                                          onChange={event => this.setState({name: event.target.value})}
                                          type="text"
                                          placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="form-image-create">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control type="text"
                                          value={this.state.imageUrl}
                                          onChange={event => this.setState({imageUrl: event.target.value})}
                                          placeholder="Enter image url" />
                        </Form.Group>

                        <Form.Group controlId="form-link-create">
                            <Form.Label>Project URL</Form.Label>
                            <Form.Control type="text"
                                          value={this.state.projectUrl}
                                          onChange={event => this.setState({projectUrl: event.target.value})}
                                          placeholder="Enter project url" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Project Description</Form.Label>
                            <Form.Control as="textarea"
                                          value={this.state.description}
                                          onChange={event => this.setState({description: event.target.value})}
                                          rows={3} />
                        </Form.Group>


                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox"
                                        value={this.state.isActive}
                                        onChange={event => this.setState({isActive: event.target.checked})}
                                        label="Check as active" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

class ProjectPreview extends React.Component {
    render() {

        const {project} = this.props;

        return (
            <Card style={{width: '18rem', margin: '1rem'}}>
                <Card.Img variant="top" src={project.imageUrl}/>
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                        {project.description}
                    </Card.Text>
                    <Button variant="primary float-right"><a style={{color: 'white'}}
                                                             target="_blank"
                                                             rel="noopener noreferrer"
                                                             href={project.projectUrl}>Open</a></Button>
                </Card.Body>
            </Card>
        );
    }
}


class Projects extends React.Component {

    componentDidMount() {
        this.props.getProjects();


    }

    render() {

        let projects = this.props.projects.map(project => {
            return (
                <ProjectPreview project={project} key={project._id}/>
            );
        })

        return (
            <div className='App App-header projects-background'>
                <NavigationBar />
                <div className='container-fluid'><div className='row'>{projects}</div></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps, {getProjects})(Projects)
