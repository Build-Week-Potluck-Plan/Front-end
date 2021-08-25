// import React, { useState, useEffect } from 'react';
import FromPropertyDescriptor from 'es-abstract/5/FromPropertyDescriptor';
import { Card, Container, Form } from 'react-bootstrap';
import './FoodList.css'
// import { appetizers } from './ListItems/appetizers';
// import { entrees } from './ListItems/entrees';
// import { desserts } from './ListItems/desserts';
// import { drinks } from './ListItems/drinks';
// import { alcohol } from './ListItems/alcohol';


// const initialFoodValues = {
//     //Appetizers
//     stuffpeppers: '',
//     buffalowings: '',
//     artichokedip: '',
//     shrimpcocktail: '',

//     //Entrees
//     bakedziti: '',
//     ribs: '',
//     orozosalad: '',
//     pulledpork: '',

//     //Desserts
//     cheesecake: '',
//     redvelvet: '',
//     fruitsalad: '',
//     applepie: '',

//     //Drinks
//     soda: '',
//     icedtea: '',
//     smoothie: '',
//     lemonwater: '',

//     //Alcholic drinks
//     maragritas: '',
//     sangira: '',
//     mimosas: '',
//     winecooler: '',
// }



export default function FoodList() {



    return (
        <Container>
            Make a Food List Test

            <Form>

                <div className="buttonHeader">
                    <h2>What will you bring?</h2>
                </div>

                <div className="radioButtons">
                    <label> Appetizers
                        <input
                            type="radio"
                            name="appetizers"
                        />
                    </label>

                    <label> Entrees
                        <input
                            type="radio"
                            name="entrees"
                        />
                    </label>

                    <label> Dessert
                        <input
                            type="radio"
                            name="dessert"
                        />
                    </label>

                    <label> Non-Alcoholic Drinks
                        <input
                            type="radio"
                            name="drinks"
                        />
                    </label>

                    <label> Alcoholic Drinks
                        <input
                            type="radio"
                            name="alcohol"
                        />
                    </label>
                </div>

                {/* <div className="textHeader">
                    <h2>Specify what you are bringing</h2>
                </div>

                <div className="textBox">
                <label> 
                    <input 
                    type="text"
                    name="description"
                    />
                </label>
                </div> */}



                <Form.Group className="textBox">
                    <Card.Title>
                        <Card.Text style={{fontsize:'25px',}}>Specify what you are bringing</Card.Text>
                    </Card.Title>
                    <Form.Control type="text" placeholer="Enter dish here" />
                </Form.Group>
            </Form>

        </Container>
    )
}
