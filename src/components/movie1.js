import React from 'react';
import movieData from "./movie-data";
import Card from 'react-bootstrap/Card';

import StarRating from "./star-rating"


import AddReviewComp1 from './review1';



export default class Movie1 extends React.Component {
    render() {
        return(
        <div className="container justify-content-center">
            <Card className="container justify-content-center" style={{ width: '50' }}>
                <Card.Title className="card-header text-center bg-secondary">
                    {movieData[0].name}
                </Card.Title>
            <Card.Img className="img-poster" src={movieData[0].poster} />
            <Card.Body>
                <Card.Text>
                    {movieData[0].plot}
                </Card.Text>
                <StarRating />
                <AddReviewComp1 />
            </Card.Body>
            </Card>
        </div>
        );
    }

}


//This is the main content container
//most things are built here, then displayed in the movie list component