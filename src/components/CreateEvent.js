import { Container, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import * as yup from 'yup';
import React, { useState,useEffect } from 'react';


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
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                      </Form.Select>
                   </Col>
                   <Col>
                    <Form.Label column="sm" sm={2}>Year</Form.Label>
                      <Form.Select size="sm">
                          <option> select a year </option>
                          <option>2021</option>
                          <option>2022</option>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                          <option>2029</option>
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
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                       <option>5</option>
                       <option>6</option>
                       <option>7</option>
                       <option>8</option>
                       <option>9</option>
                       <option>10</option>
                       <option>11</option>
                       <option>12</option>
                     </Form.Select>
                   </Col>
                   :
                   <Col xs="auto">
                     <Form.Select>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                        <option>32</option>
                        <option>33</option>
                        <option>34</option>
                        <option>35</option>
                        <option>36</option>
                        <option>37</option>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
                        <option>44</option>
                        <option>45</option>
                        <option>46</option>
                        <option>47</option>
                        <option>48</option>
                        <option>49</option>
                        <option>50</option>
                        <option>51</option>
                        <option>52</option>
                        <option>53</option>
                        <option>54</option>
                        <option>55</option>
                        <option>56</option>
                        <option>57</option>
                        <option>58</option>
                        <option>59</option>
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
           
           
           </Form>

        </Container>
    )
}
