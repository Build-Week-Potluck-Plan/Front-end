// import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { appetizers } from './ListItems/appetizers';
import { entrees } from './ListItems/entrees';
import { desserts } from './ListItems/desserts';
import { drinks } from './ListItems/drinks';
import { alcohol } from './ListItems/alcohol';


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

            <div className="Appetizers">
                <h3>Select an appetizer</h3>
                <ul className="appetizer-list">
                    {appetizers.map(({ name }, index) => {
                        return (
                            <li key={index}>

                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </li>
                        )
                    })}
                </ul>

                <div className="Entrees">
                    <h3>Select an entree</h3>
                    <ul className="entree-list">
                        {entrees.map(({ name }, index) => {
                            return (
                                <li key={index}>

                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </li>
                            )
                        })}
                    </ul>


                </div>

                <div className="Dessert">
                    <h3>Select a dessert</h3>
                    <ul className="dessert-list">
                        {desserts.map(({ name }, index) => {
                            return (
                                <li key={index}>

                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </li>
                            )
                        })}
                    </ul>


                </div>

                <div className="Drinks">
                    <h3>Select a drink</h3>
                    <ul className="drinks-list">
                        {drinks.map(({ name }, index) => {
                            return (
                                <li key={index}>

                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </li>
                            )
                        })}
                    </ul>


                </div>

                <div className="Alcohol">
                    <h3>Select Alcohol</h3>
                    <ul className="alcohol-list">
                        {alcohol.map(({ name }, index) => {
                            return (
                                <li key={index}>

                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </li>
                            )
                        })}
                    </ul>


                </div>
            </div>
        </Container>
    )
}
