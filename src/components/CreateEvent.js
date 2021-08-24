import { Container, Card, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import React, { useState } from 'react';


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


//form schema
const schema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
    month: yup.string(),
    day: yup.string(),
    year: yup.string(),
    time: yup.string(),
    location: yup.string(),
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


export default function CreateAnEvent() {
    //set up state
    const [form,setForm] = useState(emptyForm);
    const [errors,setErrors] = useState();
    const [events,setEvents] = useState([]);
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
    // useEffect(() => {
    //     schema.isValid(form)
    //             .then(valid => setDisabled(!valid))
    // },[form]);

    //function for handling success pop-up
    const clicky = () => {
        setShow(false)
    }


    //function that handles form submission
    const submitForm = (event) => {
        event.preventDefault();

        const newEvent = {
            title: form.title,
            description: form.description,
            month: form.month,
            day: form.day,
            year: form.year,
            time: form.hour+form.minute+form.ampm+form.zone,
            location: form.location,
        } 
        
        setShow(true);

        axios.post(``, newEvent)
                .then(res => {
                setEvents([res.data, ...events])
                setForm(emptyForm)
               
                })
                .catch(err => {
                    console.error('uh-oh, there was an error sending your order',err)
                })
    }



    return (
        <Container>
         
           <Form onSubmit={submitForm}>

           {/* title input */}
             <br></br>
             <Form.Group className="mb-3">
               <Form.Label column="lg">Event Name</Form.Label>
               <Form.Control size="lg" 
                             type="text" 
                             placeholder="enter the name of your party here"
                             name="title"
                             value={form.title}
                             onChange={change} />
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
                      <Form.Select size="sm"
                                   name="day"
                                   value={form.day}
                                   onChange={change}>
                          <option> select a day </option>
                          {day}
                      </Form.Select>
                   </Col>
                   <Col>
                    <Form.Label column="sm" sm={2}>Year</Form.Label>
                      <Form.Select size="sm"
                                   name="year"
                                   value={form.year}
                                   onChange={change}>
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
                     <Form.Select size="sm"
                                  name="hour"
                                  value={form.hour}
                                  onChange={change}>
                       <option></option>
                       {hour}
                     </Form.Select>
                   </Col>
                   :
                   <Col xs="auto">
                     <Form.Select size="sm"
                                  name="minutes"
                                  value={form.minutes}
                                  onChange={change}>
                        {minutes}
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
                             placeholder="enter the location of your party here"
                             name="location"
                             value={form.location}
                             onChange={change} />
           </Form.Group>
           
           {/* Submit Button */}
           <br></br>
           <Form.Group>
             <Button variant="primary" 
                     type="submit">Create Event</Button>
           </Form.Group>
          </Form>

          <Modal show={show}
                 border="light"
                 centered>
            <Card.Img src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      style={{opacity: '.5',}}/>
              <Card.ImgOverlay style={{ padding: '3%', }}>
                <Card.Title style={{textShadow: '1px 1px darkslategrey', fontWeight: 'bold', fontSize: '3rem', color: 'salmon', fontFamily: 'Indie Flower', opacity: '1'}}> Happy Feasting!</Card.Title>
                <Card.Text style={{textShadow: '1px 1px darkslategrey', fontSize: '2rem',fontFamily: 'Indie Flower', opacity: '1'}}>
                  Your potluck event has been successfully created! If you want to create another event, click below.
                </Card.Text>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
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
