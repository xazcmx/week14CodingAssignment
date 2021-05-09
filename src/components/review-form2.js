import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import movieData from './movie-data';

const ReviewForm2 = () => {

        return(
                <Form>
                    <Form.Group>
                    <Form.Label>Review</Form.Label>
                    <Form.Control className={movieData[1].id} type="text" placeholder="Write review here" />
                    <br></br>
                    </Form.Group>
                    <Button className="container justify-content-center" variant="primary" type="submit">
                        This is the submit button for the review
                    </Button>
                </Form>
        )
        }



export default ReviewForm2;



// I ended up not using this component in the end, but i still like the look of it