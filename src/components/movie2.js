import React from 'react';
import movieData from "./movie-data";
import Card from 'react-bootstrap/Card';

import StarRating from "./star-rating"


import AddReviewComp2 from './review2';




export default class Movie2 extends React.Component {
    render() {
        return(
        <div className="container justify-content-center">
            <Card className="container justify-content-center" style={{ width: '50' }}>
                <Card.Title className="card-header text-center bg-secondary">
                    {movieData[1].name}
                </Card.Title>
            <Card.Img className="img-poster" src={movieData[1].poster} />
            <Card.Body>
                <Card.Text>
                    {movieData[1].plot}
                </Card.Text>
                <StarRating />
                <AddReviewComp2 />              
            </Card.Body>
            </Card>
        </div>
        );
    }

}


//This is the main content container
//most things are built here, then displayed in the movie list component