import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import movieData from './movie-data';

import { v4 as uuidv4 } from 'uuid';



const AddReviewComp2 = () => {

    

    const [list, setList] = useState(movieData);
    const [review, setReview] = useState(``);

    

    function handleChange(event) {
        
        setReview(event.target.value);
            // track input field's state
        }

    function handleAdd() {
            const newList = list.concat({ review, id: uuidv4() });
         

    
        setList(newList);
            // This is the part of the component that handles
            //the storage of the reviews
        setReview("");
    
        } 
            
        return (
            <div>
                    <ul>
                    {list.map((item) => (
                    <li key={item.id}>{item.review}</li>
                        ))}
                </ul>
                <Form>
                <Form.Group>
                <Form.Label>Review</Form.Label>                    
                    <input  
                        className="container justify-content-center"                                                
                        type="text"
                        value={review}
                        placeholder="Write review here"
                        onChange={handleChange}
                    />
                <br></br>
                </Form.Group>
                <Button 
                    className="container justify-content-center" 
                    variant="primary" 
                    type="button"
                    onClick={handleAdd}
                    >
                    This is the submit button for the review
                </Button>
                </Form>
                              
            </div>
    )
    
    
}

export default AddReviewComp2;




//This component builds the form to accept the input for the review
//it also houses the JSX to display the reviews