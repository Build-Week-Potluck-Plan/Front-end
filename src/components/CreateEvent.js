///////////////////////////////IMPORTS/////////////////////////////////////////////////

import { Container, Card, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';


//////////////////////////////DECLARED CONSTANTS//////////////////////////////////////

//arrays for date and time
const day = [];
for(let i=1;i<32;i++){
    day.push(`${i}`)
}

const year = [];
for(let i=21;i<50;i++){
    year.push(`20${i}`)
}

const hour = [];
for(let i=1;i<13;i++){
    hour.push(`${i}`)
}

const minutes = [];
for(let i=0;i<10;i++){
    minutes.push(`${i}`)
}
for(let i=10;i<60;i++){
    minutes.push(`${i}`)
}

//form schema
const schema = yup.object().shape({
    title: yup.string().required('title is required').min('2', 'your title must be at least 2 characters'),
    description: yup.string(),
    month: yup.string().required('month is required').oneOf(['1','2','3','4','5','6','7','8','9','10','11','12'], 'you must select a month'),
    day: yup.string().required('day is required').oneOf(day, 'you must select a day'),
    year: yup.string().required('year is required').oneOf(year, 'you must select a year'),
    hour: yup.string(),
    minutes: yup.string(),
    ampm: yup.string(),
    zone: yup.string(),
    location: yup.string().required('location is required').min('5', 'your location must be at least 5 characters'),
})

//empty form for resets
const emptyForm = {
    title: '',
    description:'',
    month: '',
    day: '',
    year: '',
    time: '',
    location: '',
}


////////////////////////////////////////DEFAULT FUNCTION/////////////////////////////////

export default function CreateAnEvent() {
    //set up state
    const [form,setForm] = useState(emptyForm);
    const [errors,setErrors] = useState(emptyForm);
    const [events,setEvents] = useState([]);
    const [disabled,setDisabled] = useState(true);
    const [show,setShow] = useState(false);
    

    //function for validating form entries according to schema
    const setFormErrors = (name,value) => {
        yup.reach(schema,name).validate(value)
            .then(() => setErrors({...errors, [name]:''}))
            .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }
    
    
    //function that handles form update upon changes made
    const change = event => {
        const { value, name } = event.target;
        setFormErrors(name, value);
        setForm({ ...form, [name]: value});
    }

    //function that enables submit button if form is valid
    useEffect(() => {
        schema.isValid(form)
                .then(valid => setDisabled(!valid))
    },[form]);

    //function that handles form submission
    const submitForm = (event) => {
        event.preventDefault();

        const newEvent = {
            title: form.title,
            description: form.description,
            month: form.month,
            day: form.day,
            year: form.year,
            time: form.hour+':'+form.minutes+form.ampm+form.zone,
            location: form.location,
        } 
        
        setShow(true);
        console.log(newEvent);

        axios.post(``, newEvent)
                .then(res => {
                setEvents([res.data, ...events])
                setForm(emptyForm)
                })
                .catch(err => {
                    console.error('uh-oh, there was an error sending your order',err)
                })
    }

   //function for handling success pop-up
    const clicky = () => {
        setShow(false)
    }

    ////////////////////////////////////RETURN STATEMENT///////////////////////////////////////////////

    return (
        <Container>

 {/*          /////////////////////////////////////FORM/////////////////////////////////////            */}
         
           <Form onSubmit={submitForm}>

           {/* title input */}
             <br></br>
             <Form.Group className="mb-3">
               <Form.Label column="lg">Event Name</Form.Label>
               <Form.Control size="lg" 
                             type="text" 
                             placeholder="*enter the name of your party here*"
                             name="title"
                             value={form.title}
                             onChange={change} />
                             {errors.title}
             </Form.Group>

           {/* description input */}
             <Form.Group className="mb-3">
               <Form.Label>Description</Form.Label>
               <Form.Control type="text" 
                             placeholder="enter a description of your party here"
                             name="description"
                             value={form.description}
                             onChange={change} />
             </Form.Group>

           {/* date input: month, day, year */}
             <Form.Group className="mb-3">
               <Form.Label>Date</Form.Label>
                 <Row>
                   <Col>
                     <Form.Label column="sm" sm={2}>Month</Form.Label>
                       <Form.Select size="sm"
                                    name="month"
                                    value={form.month}
                                    onChange={change}>
                           <option>*select a month*</option>
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
                       {errors.month}
                   </Col>
                   <Col>
                    <Form.Label column="sm" sm={2}>Day</Form.Label>
                      <Form.Select size="sm"
                                   name="day"
                                   value={form.day}
                                   onChange={change}>
                          <option> *select a day* </option>
                          {day.map(item => 
                            <option>{item}</option>)}
                      </Form.Select>
                      {errors.day}
                   </Col>
                   <Col>
                    <Form.Label column="sm" sm={2}>Year</Form.Label>
                      <Form.Select size="sm"
                                   name="year"
                                   value={form.year}
                                   onChange={change}>
                          <option> *select a year* </option>
                          {year.map(item =>
                            <option>{item}</option>)}
                      </Form.Select>
                      {errors.year}
                   </Col>
                 </Row>
             </Form.Group>

           {/* time input */}
           <Form.Group>
               <Form.Label>Time</Form.Label>
                 <Row>
                   <Col xs="auto">
                     <Form.Select size="sm"
                                  name="hour"
                                  value={form.hour}
                                  onChange={change}>
                       <option></option>
                       {hour.map(item =>
                        <option>{item}</option>)}
                     </Form.Select>
                   </Col>
                   :
                   <Col xs="auto">
                     <Form.Select size="sm"
                                  name="minutes"
                                  value={form.minutes}
                                  onChange={change}>
                        <option></option>
                        {minutes.map(item => 
                            <option>{item}</option>)}
                     </Form.Select>
                   </Col>

                   <Col xs={2}>
                     <Form.Select size="sm"
                                  name="ampm"
                                  value={form.ampm}
                                  onChange={change}>
                       <option></option> 
                       <option>AM</option>
                       <option>PM</option>
                     </Form.Select>
                   </Col>

                   <Col xs={3}>
                     <Form.Select size="sm"
                                  name="zone"
                                  value={form.zone}
                                  onChange={change}>
                       <option> time zone </option>
                       <option>Pacific</option>
                       <option>Mountain</option>
                       <option>Central</option>
                       <option>Eastern</option>
                     </Form.Select>
                   </Col>
                 </Row>
           </Form.Group>
           <br></br>

           {/* location input */}
           <Form.Group>
             <Form.Label>Location</Form.Label>
               <Form.Control type="text" 
                             placeholder="*enter the location of your party here*"
                             name="location"
                             value={form.location}
                             onChange={change} />
           </Form.Group>
           {errors.location}
           
           {/* Submit Button */}
           <br></br>
           <Form.Group style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
             <Button variant="primary" 
                     type="submit"
                     disabled={disabled}>Create Event</Button>
             {disabled && <p style={{color: 'slategrey'}}>* indicates required field </p>}
           </Form.Group>
          </Form>

{/*         ///////////////////////////SUCCESS POP-UP///////////////////////////////////////           */}

          <Modal show={show}
                 border="light"
                 size="lg"
                 centered>
            <Card.Img src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      style={{opacity: '.5',}}/>
              <Card.ImgOverlay style={{ padding: '3%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{}}>
                  <Card.Title style={{textShadow: '1px 1px darkslategrey', fontWeight: 'bold', fontSize: '3rem', color: 'salmon', fontFamily: 'Indie Flower', opacity: '1'}}> Happy Feasting!</Card.Title>
                  <Card.Text style={{textShadow: '1px 1px darkslategrey', fontSize: '1.5rem',fontFamily: 'Indie Flower', opacity: '1'}}>
                  Your potluck event has been successfully created! 
                  </Card.Text>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%',}}>
                <Button as={Link} 
                        to="/create-an-event" 
                        variant="primary" 
                        onClick={clicky}
                        style={{textAlign: 'center', width: '50%'}}>New Potluck Event</Button>
                <Button as={Link} 
                        to="/" 
                        variant="primary" 
                        style={{textAlign: 'center', width: '20%'}}> Home </Button>
                </div>
              </Card.ImgOverlay>
          </Modal>

        </Container>
    )
}
