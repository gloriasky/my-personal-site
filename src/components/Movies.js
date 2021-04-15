import React from "react";
import {connect} from "react-redux";
import './Movies.css'
import {NavigationBar} from "../NavigationBar";
import axios from "axios";
import {Button, Card} from "react-bootstrap";

class MovieCard extends React.Component {
    render() {


        const {movie} = this.props;

        if (!movie) {
            return null
        }

        console.log(movie)

        const image = movie.Poster

        return (
            <Card style={{width: '15rem', margin: '1rem'}}>
                {image && <Card.Img variant="top" src={image}/>}
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <p>Type: {movie.Type}</p>
                    <p>Year: {movie.Year} </p>
                    <p><a href={'https://www.imdb.com/title/' + movie.imdbID}
                          target="_blank"
                          rel="noopener noreferrer">Open IMDB</a></p>

                </Card.Body>
            </Card>
        );
    }
}

class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }


    componentDidMount() {

    }

    search = event => {
        event.preventDefault();
        let movies = []

        axios.get('http://www.omdbapi.com/?apikey=79a5ec92&s='+this.state.search).then(response => {
            movies =  response.data.Search

            this.setState({movies: movies})
        }).catch(error => {
            console.error(error);
        });
    }

    render() {

        let movies = this.state.movies.map(movie =>{
            return (<MovieCard movie={movie} key={movie.id}/>);
        })

        return (
            <div className='App App-header movies-back'>
                <NavigationBar />

                <div className="container ">
                    <div className=' d-block mx-auto row'>
                    <input style={{width: '30%', margin: '1rem'}} value={this.state.search}
                           placeholder='Input film name'
                           onChange={event => this.setState({search: event.target.value})}
                           />
                           <button style={{width: '10%', margin: '1rem'}} onClick={event => this.search(event)}>Search</button>
                    </div>
                </div>
                <div className='container d-block mx-auto movies-list'><div className='row'>{movies}</div></div>
            </div>
        );
    }
}

export default connect(null)(Movies)
