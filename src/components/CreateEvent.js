import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import * as yup from 'yup';
import React, { useState,useEffect } from 'react';


//arrays for date and time
const day = [];
for(let i=1;i<32;i++){
    day.push(<option>{i}</option>)
}

const year = [];
for(let i=21;i<50;i++){
    year.push(<option>20{i}</option>)
}

const hour = [];
for(let i=1;i<13;i++){
    hour.push(<option>{i}</option>)
}

const minutes = [];
for(let i=0;i<10;i++){
    minutes.push(<option>0{i}</option>)
}
for(let i=10;i<60;i++){
    minutes.push(<option>{i}</option>)
}


//schema


export default function CreateAnEvent() {
    //set up state

    //on change event hangler

    //validate schema function

    //on submit event handler


    return (
        <Container>
           {/* make a form */}
           <Form>

           {/* title input */}
             <Form.Group className="mb-3">
               <Form.Label column="lg">Event Name</Form.Label>
               <Form.Control size="lg" type="text" placeholder="enter the name of your party here" />
             </Form.Group>

           {/* description input */}
             <Form.Group className="mb-3">
               <Form.Label>Description</Form.Label>
               <Form.Control type="text" placeholder="enter a description of your party here" />
             </Form.Group>

           {/* date input: month, day, year */}
             <Form.Group className="mb-3">
               <Form.Label>Date</Form.Label>
                 <Row>
                   <Col>
                     <Form.Label column="sm" sm={2}>Month</Form.Label>
                       <Form.Select size="sm">
                           <option>select a month</option>
                           <option value="1">January</option>
                           <option value="2">February</option>
                           <option value="3">March</option>
                           <option value="4">April</option>
                           <option value="5">May</option>
                           <option value="6">June</option>
                           <option value="7">July</option>
                           <option value="8">August</option>
                           <option value="9">September</option>
                           <option value="10">October</option>
                           <option value="11">November</option>
                           <option value="12">December</option>
                       </Form.Select>
                   </Col>
                   <Col>
                    <Form.Label column="sm" sm={2}>Day</Form.Label>
                      <Form.Select size="sm">
                          <option> select a day </option>
                          {day}
                      </Form.Select>
                   </Col>
                   <Col>
                    <Form.Label column="sm" sm={2}>Year</Form.Label>
                      <Form.Select size="sm">
                          <option> select a year </option>
                          {year}
                      </Form.Select>
                   </Col>
                 </Row>
             </Form.Group>

           {/* time input */}
           <Form.Group>
               <Form.Label>Time</Form.Label>
                 <Row>
                   <Col xs="auto">
                     <Form.Select>
                       <option></option>
                       {hour}
                     </Form.Select>
                   </Col>
                   :
                   <Col xs="auto">
                     <Form.Select>
                        {minutes}
                     </Form.Select>
                   </Col>

                   <Col xs={2}>
                     <Form.Select>
                       <option></option> 
                       <option>AM</option>
                       <option>PM</option>
                     </Form.Select>
                   </Col>

                   <Col xs={3}>
                     <Form.Select>
                       <option> time zone </option>
                       <option>Pacific</option>
                       <option>Mountain</option>
                       <option>Central</option>
                       <option>Eastern</option>
                     </Form.Select>
                   </Col>
                 </Row>
           </Form.Group>

           {/* location input */}
           <Form.Group>
             <Form.Label>Location</Form.Label>
               <Form.Control type="text" placeholder="enter the location of your party here" />
           </Form.Group>
           
           {/* Submit Button */}
           <br></br>
           <Form.Group>
             <Button variant="primary" type="submit">Create Event</Button>
           </Form.Group>
          </Form>

        </Container>
    )
}
