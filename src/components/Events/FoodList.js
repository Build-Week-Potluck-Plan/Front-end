import { Card, Container, Form, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import './FoodList.css'


const emptyList = {
    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: '',
    description: '',
}

const schema = yup.object().shape({
    item1: yup
        .boolean(),
    item2: yup
        .boolean(),
    item3: yup
        .boolean(),
    item4: yup
        .boolean(),
    item5: yup
        .boolean(),
    description: yup
        .string()
        .min(3, 'More characters are needed')
        .max(120, 'Max character limit reached')
});

export default function FoodList() {


    const [list, setList] = useState(emptyList);
    const [errors, setErrors] = useState(emptyList);
    const [events, setEvents] = useState([]);
    const [disabled, setDisabled] = useState();

    const setListErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({ ...errors, [name]: '' }))
            .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    const change = event => {
        const { value, name } = event.target;
        setListErrors(name, value);
        setList({ ...list, [name]: value });
    }

    useEffect(() => {
        schema.isValid(list)
            .then(valid => setDisabled(!valid))
    }, [list]);

<<<<<<< HEAD





    // const { values, update, submit } = props;

    const onSubmit = evt => {

        evt.preventDefault();

        const newEvent = {
            item1: list.item1,
            item2: list.item2,
            item3: list.item3,
            item4: list.item4,
            item5: list.item5,
            description: list.description,
        }

        axios.post(``, newEvent)
            .then(res => {
                setEvents([res.data, ...events])
                setList(emptyList)
            })
            .catch(err => {
                console.error('jeez this is embarassing, looks like there is an error')
            })
    }


    return (
        <>
            <Container>
                Make a Food List Test

                <Form onSubmit={onSubmit}>

                    <div className="buttonHeader">
                        <h2>What will you bring?</h2>
                    </div>



                    <div className="radioButtons">
                        <div className="rowOne">
                            <label> Appetizers
                                <input
                                    type="checkbox"
                                    name="item1"
                                    value={list.item1}
                                    onChange={change}
                                />
                            </label>

                            <label> Entrees
                                <input
                                    type="checkbox"
                                    name="item2"
                                    value={list.item2}
                                    onChange={change}
                                />
                            </label>


                            <label> Dessert
                                <input
                                    type="checkbox"
                                    name="item3"
                                    value={list.item3}
                                    onChange={change}
                                />
                            </label>
                        </div>

                        <div className="rowTwo">
                            <label> Non-Alcoholic Drinks
                                <input
                                    type="checkbox"
                                    name="item4"
                                    value={list.item4}
                                    onChange={change}
                                />
                            </label>


                            <label> Alcoholic Drinks
                                <input
                                    type="checkbox"
                                    name="item5"
                                    value={list.item5}
                                    onChange={change}
                                />
                            </label>
                        </div>
                    </div>



                    <Form.Group className="textBox">
                        <Card.Title>
                            <Card.Text style={{ fontsize: '25px', }}>Specify what you are bringing</Card.Text>
                        </Card.Title>
                        <Form.Control
                            type="text"
                            name="description"
                            value={list.description}
                            onChange={change}
                            placeholder="Enter dish here" />
                    </Form.Group>


                    <Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            disabled={disabled}
                            style={{ justifyContent: 'center', marginTop: '30px' }}>Submit</Button>
                    </Form.Group>

                </Form>

            </Container>
        </>
    )
=======
export default function FoodList(props) {
	const { submit } = props

	const onSubmit = evt => {
		evt.preventDefault()

		submit()
	}

	return (
		<>
			<Container>
				Make a Food List Test
				<Form onSubmit={onSubmit}>
					<div className='buttonHeader'>
						<h2>What will you bring?</h2>
					</div>

					<div className='radioButtons'>
						<div className='rowOne'>
							<label>
								{' '}
								Appetizers
								<input type='radio' name='appetizers' />
							</label>

							<label>
								{' '}
								Entrees
								<input type='radio' name='entrees' />
							</label>

							<label>
								{' '}
								Dessert
								<input type='radio' name='dessert' />
							</label>
						</div>

						<div className='rowTwo'>
							<label>
								{' '}
								Non-Alcoholic Drinks
								<input type='radio' name='drinks' />
							</label>

							<label>
								{' '}
								Alcoholic Drinks
								<input type='radio' name='alcohol' />
							</label>
						</div>
					</div>

					<Form.Group className='textBox'>
						<Card.Title>
							<Card.Text style={{ fontsize: '25px' }}>Specify what you are bringing</Card.Text>
						</Card.Title>
						<Form.Control type='text' placeholer='Enter dish here' />
					</Form.Group>

					<Form.Group>
						<Button
							variant='primary'
							type='submit'
							style={{ justifyContent: 'center', marginTop: '30px' }}>
							Submit
						</Button>
					</Form.Group>
				</Form>
			</Container>
		</>
	)
>>>>>>> bcc6c36ce1300fb02c9b063754c3e94b5552af03
}
